// Cinema: fly the journey like a drone. The camera chases the traveller along the estimated route,
// rises over the globe for flights, and circles each place while its photos appear as prints.
import * as E from './engine.js';
import * as db from './db.js';
import * as model from './model.js';
import { M } from './model.js';
import { MODES } from './analyze.js';
import { cumulative, along, bearing, pDist, lerp, clamp, angleDelta, smooth, easeInOut, bounds, axisBearing } from './geo.js';
import { clock, hourOf, dayTitle, jpDate, dotRange, stayLabel, km, dur, esc } from './fmt.js';
import { icon } from './icons.js';
import { url, sleep } from './ui.js';

const $ = id => document.getElementById(id);
const SPEEDS = [1, 2, 4];

const S = {
  active: false, paused: false, speed: 1, skip: false,
  last: 0, raf: 0, tasks: new Set(),
  r: null, steps: [], idx: 0, f: 0, now: null, off: null,
  marker: null, trail: [], audio: null, audioUrl: null, gain: null, actx: null, wake: null,
  hideTimer: 0, hooks: {},
};

/* =============== Clock =============== */
function loop(now) {
  const dt = Math.min(now - (S.last || now), 200);
  S.last = now;
  const step = S.paused ? 0 : dt * S.speed;
  for (const task of [...S.tasks]) task(step);
  if (S.active) S.raf = requestAnimationFrame(loop);
}
/** Advance through ms of film time, calling onFrame(f, step). Resolves 'done' | 'skip' | 'stop'. */
function run(ms, onFrame) {
  return new Promise(resolve => {
    let el = 0;
    const task = step => {
      if (!S.active) { S.tasks.delete(task); resolve('stop'); return; }
      if (S.skip) { onFrame?.(1, 0); S.tasks.delete(task); resolve('skip'); return; }
      el += step;
      const f = Math.min(1, el / ms);
      onFrame?.(f, step);
      if (f >= 1) { S.tasks.delete(task); resolve('done'); }
    };
    S.tasks.add(task);
  });
}

/* =============== Camera rig (smoothed chase / orbit camera) =============== */
const rig = {
  on: false, c: [0, 0], z: 10, p: 0, b: 0, pad: 0,
  t: { c: [0, 0], z: 10, p: 0, b: 0, pad: 0 },
  tau: { c: 0.22, z: 0.9, p: 0.9, b: 1.15, pad: 0.8 },
  orbit: 0,
  sync() {
    const cam = E.camera();
    this.c = cam.center.slice(); this.z = cam.zoom; this.p = cam.pitch; this.b = cam.bearing;
    this.t = { c: this.c.slice(), z: this.z, p: this.p, b: this.b, pad: this.pad };
  },
  task(step) {
    if (!rig.on || step <= 0) return;
    const k = tau => 1 - Math.exp(-step / (tau * 1000));
    if (rig.orbit) rig.t.b += rig.orbit * step / 1000;
    const kc = k(rig.tau.c);
    rig.c = [lerp(rig.c[0], rig.t.c[0], kc), lerp(rig.c[1], rig.t.c[1], kc)];
    rig.z = lerp(rig.z, rig.t.z, k(rig.tau.z));
    rig.p = lerp(rig.p, rig.t.p, k(rig.tau.p));
    rig.b = rig.b + angleDelta(rig.b, rig.t.b) * k(rig.tau.b);
    rig.pad = lerp(rig.pad, rig.t.pad, k(rig.tau.pad));
    E.map.jumpTo({ center: rig.c, zoom: rig.z, pitch: rig.p, bearing: rig.b, padding: { top: 0, bottom: rig.pad, left: 0, right: 0 } });
  },
};

/* =============== Free flight (van Wijk & Nuij smooth zoom-pan) =============== */
function zoomPath(p0, p1, rho = 1.42) {
  const [ux0, uy0, w0] = p0, [ux1, uy1, w1] = p1;
  const dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy;
  const rho2 = rho * rho;
  if (d2 < 1e-14) {
    const S0 = Math.log(w1 / w0) / rho;
    return t => [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S0), t];
  }
  const d1 = Math.sqrt(d2);
  const b0 = (w1 * w1 - w0 * w0 + rho2 * rho2 * d2) / (2 * w0 * rho2 * d1);
  const b1 = (w1 * w1 - w0 * w0 - rho2 * rho2 * d2) / (2 * w1 * rho2 * d1);
  const r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
  const S1 = (r1 - r0) / rho;
  return t => {
    const s = t * S1, ch = Math.cosh(r0);
    const u = w0 / (rho2 * d1) * (ch * Math.tanh(rho * s + r0) - Math.sinh(r0));
    return [ux0 + u * dx, uy0 + u * dy, w0 * ch / Math.cosh(rho * s + r0), u];
  };
}
function flightPath(from, to) {
  const W = E.map.getContainer().clientWidth || 390;
  const m0 = maplibregl.MercatorCoordinate.fromLngLat(from.center), m1 = maplibregl.MercatorCoordinate.fromLngLat(to.center);
  let x1 = m1.x;
  if (x1 - m0.x > 0.5) x1 -= 1; else if (m0.x - x1 > 0.5) x1 += 1;
  const w = z => W / (512 * 2 ** z);
  const path = zoomPath([m0.x, m0.y, w(from.zoom)], [x1, m1.y, w(to.zoom)]);
  return t => {
    const [x, y, ww, u] = path(t);
    const ll = new maplibregl.MercatorCoordinate(((x % 1) + 1) % 1, y).toLngLat();
    return { center: [ll.lng, ll.lat], zoom: Math.log2(W / (512 * ww)), u: clamp(u, 0, 1) };
  };
}
async function flyFree(to, ms, { pitchDip = 0.85, onFrame } = {}) {
  rig.on = false;
  const from = E.camera();
  const path = flightPath(from, to);
  const res = await run(ms, (f, step) => {
    const e = easeInOut(f);
    const c = path(e);
    const pitch = lerp(from.pitch, to.pitch, e) * (1 - Math.sin(Math.PI * e) * pitchDip);
    const brg = from.bearing + angleDelta(from.bearing, to.bearing) * e;
    E.map.jumpTo({ center: c.center, zoom: c.zoom, pitch, bearing: brg, padding: { top: 0, bottom: lerp(rig.pad, to.pad ?? 0, e), left: 0, right: 0 } });
    onFrame?.(f, c, step);
  });
  if (res === 'skip') E.map.jumpTo({ center: to.center, zoom: to.zoom, pitch: to.pitch, bearing: to.bearing, padding: { top: 0, bottom: to.pad ?? 0, left: 0, right: 0 } });
  rig.pad = to.pad ?? 0;
  rig.sync();
  return res;
}

/* =============== Traveller marker =============== */
function makeMarker(at) {
  const el = document.createElement('div');
  el.className = 'traveller dot';
  el.innerHTML = '<div class="halo"></div><div class="core"></div>';
  S.marker = new maplibregl.Marker({ element: el, anchor: 'center', pitchAlignment: 'viewport', rotationAlignment: 'viewport' })
    .setLngLat(at).addTo(E.map);
}
function travellerMode(mode) {
  const el = S.marker.getElement();
  el.classList.toggle('dot', !mode);
  const core = el.querySelector('.core');
  if (core.dataset.mode !== (mode || '')) { core.dataset.mode = mode || ''; core.innerHTML = mode ? icon(mode) : ''; }
  core.style.transform = '';
}

/* =============== Overlays =============== */
function setProgress(f = 0) {
  S.f = f;
  $('cineBar').style.width = `${Math.min(100, ((S.idx + f) / S.steps.length) * 100).toFixed(2)}%`;
}
let gradeState = { w: -1, n: -1 };
function setClock(ms, off = S.off) {
  if (ms == null) return;
  S.now = ms; S.off = off;
  $('cineClock').textContent = clock(ms, off);
  const h = hourOf(ms, off);
  const bump = (c, w) => Math.max(0, 1 - Math.abs(h - c) / w);
  const warm = Math.max(bump(17.5, 1.5), bump(6.0, 1.1) * 0.7) * 0.6;
  let night = 0;
  if (h >= 18 && h < 19.6) night = (h - 18) / 1.6;
  else if (h >= 19.6 || h < 4.6) night = 1;
  else if (h >= 4.6 && h < 6.3) night = 1 - (h - 4.6) / 1.7;
  night *= 0.52;
  if (Math.abs(warm - gradeState.w) > 0.01) { gradeState.w = warm; document.querySelector('.g-warm').style.opacity = warm.toFixed(3); }
  if (Math.abs(night - gradeState.n) > 0.01) { gradeState.n = night; document.querySelector('.g-night').style.opacity = night.toFixed(3); }
  E.setSkyHour(h);
}
function setDay(p) {
  const multi = S.r.days.length > 1;
  $('cineDay').innerHTML = multi ? `${dayTitle(p.day)}<small>${esc(jpDate(p.start, p.off))}</small>` : `<small>${esc(jpDate(p.start, p.off))}</small>`;
}
function caption(html) {
  const el = $('cineCap');
  el.innerHTML = html ? `<div class="cap-in">${html}</div>` : '';
}
function card(html, cls = '') {
  const el = $('cineCard');
  el.className = `cine-card ${cls}`;
  el.innerHTML = html;
  el.hidden = !html;
}
async function cardOut() {
  const el = $('cineCard');
  if (el.hidden) return;
  el.classList.add('out');
  await sleep(650);
  if (el.classList.contains('out')) el.hidden = true;
}

/* Prints */
function addPrint(photo, ms) {
  const box = $('prints');
  for (const old of box.querySelectorAll('.print:not(.gone)')) {
    if (old.classList.contains('back')) { old.classList.add('gone'); setTimeout(() => old.remove(), 1000); } else old.classList.add('back');
  }
  const fig = document.createElement('figure');
  fig.className = 'print';
  fig.style.setProperty('--r', `${(Math.random() * 6 - 3).toFixed(2)}deg`);
  fig.innerHTML = `<div class="frame"><img alt="" src="${url(photo.full || photo.thumb)}"></div>`;
  const img = fig.querySelector('img');
  img.style.setProperty('--kb', `${Math.round((ms + 900) / S.speed)}ms`);
  img.style.setProperty('--ox', `${30 + Math.random() * 40}%`);
  img.style.setProperty('--oy', `${30 + Math.random() * 40}%`);
  box.appendChild(fig);
}
function clearPrints() {
  for (const p of $('prints').querySelectorAll('.print')) { p.classList.remove('back'); p.classList.add('gone'); setTimeout(() => p.remove(), 1000); }
}
function preload(photos) {
  return Promise.race([
    Promise.all(photos.map(p => { const i = new Image(); i.src = url(p.full || p.thumb); return i.decode().catch(() => {}); })),
    sleep(1500),
  ]);
}
function printsInset() {
  const box = $('prints').getBoundingClientRect();
  return Math.max(0, window.innerHeight - box.top - 30);
}

/* =============== Story =============== */
function buildSteps(r) {
  const steps = [{ type: 'intro' }];
  r.places.forEach((p, i) => {
    if (i === 0) { if (r.days.length > 1) steps.push({ type: 'day', place: p }); }
    else {
      const mv = r.moves[i - 1];
      if (mv.newDay) steps.push({ type: 'day', place: p });
      steps.push({ type: 'move', mv });
    }
    steps.push({ type: 'place', place: p });
  });
  steps.push({ type: 'outro' });
  return steps;
}

const LEG = {
  walk:  km => ({ zoom: 16.4, pitch: 62, ms: clamp(1900 + km * 2300, 1900, 6500), look: 0.12, out: km > 1.4 ? 0.7 : 0 }),
  car:   km => ({ zoom: 15.2, pitch: 60, ms: clamp(2600 + km * 240, 2600, 8000), look: Math.max(0.35, km * 0.05), out: clamp(Math.log2(km / 2), 0, 2.8) }),
  train: km => ({ zoom: 14.8, pitch: 58, ms: clamp(2800 + km * 110, 2800, 8500), look: Math.max(0.6, km * 0.06), out: clamp(Math.log2(km / 2) * 0.9, 0, 3) }),
  boat:  km => ({ zoom: 14.4, pitch: 56, ms: clamp(2800 + km * 150, 2800, 7500), look: Math.max(0.4, km * 0.05), out: clamp(Math.log2(km / 2) * 0.8, 0, 2.6) }),
};

async function intro() {
  const r = S.r, first = r.places[0], last = r.places[r.places.length - 1];
  const c = M.trip.stats?.center || [first.lon, first.lat];
  setDay(first);
  setClock(first.start - 20 * 60000, first.off);
  card(`<div class="cc-title">${esc(M.trip.title)}</div><div class="cc-sub">${esc(dotRange(first.start, last.end, first.off))}　${esc(stayLabel(r.days.length))}</div>`);
  // Rise to space, hold on the globe, then dive into the first place.
  await flyFree({ center: c, zoom: 2.1, pitch: 0, bearing: 0, pad: 0 }, 2600, { pitchDip: 0 });
  if (!S.active) return;
  await run(1500, (f, step) => { const cam = E.camera(); E.map.jumpTo({ center: [cam.center[0] + step * 0.004, cam.center[1]] }); setProgress(f * 0.3); });
  cardOut();
  await flyFree({ center: [first.lon, first.lat], zoom: 15.6, pitch: 60, bearing: -24, pad: 0 }, 5200, { pitchDip: 0, onFrame: f => setProgress(0.3 + f * 0.7) });
  S.marker.setLngLat([first.lon, first.lat]);
  S.marker.getElement().style.opacity = '';
}

async function dayCard(p) {
  setDay(p);
  setClock(p.start - 45 * 60000, p.off);
  card(`<div class="cc-day">${dayTitle(p.day)}</div><div class="cc-sub">${esc(jpDate(p.start, p.off))}</div>`);
  rig.on = true;
  rig.t.z = Math.max(12, rig.z - 1.4);
  rig.t.p = 48;
  rig.orbit = 4;
  await run(2700, setProgress);
  rig.orbit = 0;
  cardOut();
}

async function visit(p) {
  const r = S.r;
  setDay(p);
  setClock(p.start, p.off);
  travellerMode(null);
  S.marker.setLngLat([p.lon, p.lat]);
  E.setPlaces(r.places, model.placeName, x => (x.idx < p.idx ? 'done' : x.idx === p.idx ? 'now' : 'next'));
  const sub = model.placeSub(p);
  caption(`<div class="cap-name">${esc(model.placeName(p))}</div>${sub ? `<div class="cap-sub">${esc(sub)}</div>` : ''}`);
  const photos = p.highlights.filter(x => x.full || x.thumb);
  rig.on = true;
  rig.t.c = [p.lon, p.lat];
  rig.t.z = 16.5;
  rig.t.p = 60;
  rig.t.pad = photos.length ? printsInset() : 0;
  rig.tau.c = 0.6;
  rig.orbit = -3.2;
  await preload(photos.slice(0, 1));
  if ((await run(photos.length ? 1100 : 2000, f => setProgress(f * 0.15))) === 'stop') return;
  const per = photos.length > 4 ? 2200 : 2900;
  for (let k = 0; k < photos.length && !S.skip; k++) {
    addPrint(photos[k], per);
    setClock(photos[k].time ?? p.start, photos[k].off || p.off);
    if (k + 1 < photos.length) preload([photos[k + 1]]);
    const res = await run(per, f => setProgress(0.15 + ((k + f) / photos.length) * 0.8));
    if (res !== 'done') break;
  }
  clearPrints();
  rig.orbit = 0;
  rig.t.pad = 0;
  rig.tau.c = 0.22;
  setClock(p.end, p.off);
  await run(450, f => setProgress(0.95 + f * 0.05));
}

async function move(snap) {
  const r = S.r;
  // Station lookups may have refined the mode since the replay started.
  const mv = M.r?.moves.find(m => m.key === snap.key) || snap;
  const a = r.places[mv.from], b = r.places[mv.to];
  // Use the real route when it is ready (or arrives within a moment).
  await Promise.race([model.routeMove(mv), sleep(2500)]);
  if (!S.active) return;
  const legs = model.legsOf(mv);
  const total = legs.reduce((s, l) => s + (l.km ?? (l.km = lenKm(l.coords))), 0) || 1e-9;
  const hours = legs.reduce((s, l) => s + (l.hours || 0), 0);
  // Leave as late as the trip allows, so the clock reads like the real day.
  const arrive = b.start;
  const depart = Math.max(a.end, arrive - hours * 3.6e6);
  preload(b.highlights.slice(0, 2));
  let acc = 0, i = 0;
  for (; i < legs.length && S.active && !S.skip; i++) {
    const l = legs[i];
    const t0 = depart + (arrive - depart) * (acc / total);
    acc += l.km;
    const t1 = depart + (arrive - depart) * (acc / total);
    const share = [(acc - l.km) / total, acc / total];
    moveCaption(mv, l, hours);
    if (l.mode === 'plane') await fly(l, t0, t1, a.off, share);
    else await chase(l, t0, t1, a.off, share);
  }
  if (S.skip) {
    for (let j = i; j < legs.length; j++) S.trail.push(...legs[j].coords);
    E.setTrail(S.trail);
    E.setTrailNow(null);
    S.marker.setLngLat([b.lon, b.lat]);
  }
}
const lenKm = c => { let s = 0; for (let i = 1; i < c.length; i++) s += pDist(c[i - 1], c[i]); return s; };

function moveCaption(mv, leg, hours) {
  const m = MODES[leg.mode];
  const what = leg.label ? `${m.by}　${esc(leg.label)}` : m.by;
  const extra = leg.mode === 'plane' ? km(leg.km) : hours >= 1 / 60 ? `約${dur(hours)}` : '';
  caption(`<div class="cap-move">${icon(leg.mode)}<span>${what}</span>${extra ? `<small>${esc(extra)}</small>` : ''}</div>`);
}

async function chase(leg, t0, t1, off, share) {
  const c = leg.coords;
  const cum = cumulative(c);
  const total = cum[cum.length - 1];
  if (total < 0.015) return;
  const P = (LEG[leg.mode] || LEG.car)(total);
  travellerMode(leg.mode);
  rig.on = true;
  rig.orbit = 0;
  rig.t.pad = 0;
  rig.t.p = P.pitch;
  let last = rig.t.b;
  const res = await run(P.ms, f => {
    const d = smooth(f) * total;
    const { pos, i } = along(c, cum, d);
    const ahead = along(c, cum, Math.min(total, d + P.look)).pos;
    if (pDist(pos, ahead) > 0.002) last = bearing(pos, ahead);
    rig.t.c = pos;
    rig.t.b = last;
    rig.t.z = P.zoom - P.out * Math.sin(Math.PI * f);
    S.marker.setLngLat(pos);
    E.setTrailNow([...c.slice(0, i + 1), pos]);
    setClock(lerp(t0, t1, f), off);
    setProgress(lerp(share[0], share[1], f));
  });
  S.trail.push(...c);
  E.setTrail(S.trail);
  E.setTrailNow(null);
  S.marker.setLngLat(c[c.length - 1]);
  return res;
}

async function fly(leg, t0, t1, off, share) {
  const c = leg.coords;
  const cum = cumulative(c);
  const total = cum[cum.length - 1];
  const end = c[c.length - 1];
  travellerMode('plane');
  const core = S.marker.getElement().querySelector('.core');
  const ms = clamp(5200 + total * 1.6, 6000, 10000);
  await flyFree({ center: end, zoom: 13.6, pitch: 55, bearing: E.map.getBearing(), pad: 0 }, ms, {
    pitchDip: 1,
    onFrame: (f, cam) => {
      const d = cam.u * total;
      const { pos, i } = along(c, cum, d);
      const next = along(c, cum, Math.min(total, d + total * 0.01)).pos;
      S.marker.setLngLat(pos);
      core.style.transform = `rotate(${(bearing(pos, next) - E.map.getBearing()).toFixed(1)}deg)`;
      E.setTrailNow([...c.slice(0, i + 1), pos]);
      setClock(lerp(t0, t1, cam.u), off);
      setProgress(lerp(share[0], share[1], f));
    },
  });
  core.style.transform = '';
  S.trail.push(...c);
  E.setTrail(S.trail);
  E.setTrailNow(null);
  S.marker.setLngLat(end);
}

async function outro() {
  const r = S.r;
  clearPrints();
  caption('');
  travellerMode(null);
  S.marker.getElement().style.opacity = '0';
  E.setPlaces(r.places, model.placeName, () => 'done');
  const pts = r.places.map(p => [p.lon, p.lat]).concat(S.trail);
  const flight = r.moves.some(m => m.mode === 'plane');
  const cam = E.frame(bounds(pts), { padding: { top: 140, bottom: Math.round(window.innerHeight * 0.42), left: 40, right: 40 }, pitch: flight ? 20 : 45, bearing: flight ? 0 : axisBearing(r.places), maxZoom: 15 });
  let total = 0;
  for (const mv of r.moves) total += model.moveSummary(mv).km;
  const showCard = () => card(`
    <div class="cc-sub">旅のおわり</div>
    <div class="cc-title">${esc(M.trip.title)}</div>
    <div class="cc-stats">
      <div><b>${r.days.length}</b><span>日</span></div>
      <div><b>${r.places.length}</b><span>か所</span></div>
      <div><b>${esc(km(total).replace(' ', ''))}</b><span>移動</span></div>
      <div><b>${r.used}</b><span>写真</span></div>
    </div>
    <div class="cc-buttons"><button type="button" class="btn quiet" data-a="again">もう一度</button><button type="button" class="btn gold" data-a="close">閉じる</button></div>`, 'end');
  if (cam) await flyFree({ ...cam, pad: 0 }, 3600, { pitchDip: 0.3, onFrame: f => setProgress(f) });
  setProgress(1);
  showCard();
  fadeMusic(0, 4000);
  const choice = await new Promise(resolve => {
    S.endChoice = resolve;
    const watch = () => { if (!S.active) resolve('close'); else setTimeout(watch, 250); };
    watch();
  });
  S.endChoice = null;
  if (choice === 'again' && S.active) { restart(); return 'again'; }
  stop();
  return 'close';
}

/* =============== Run =============== */
async function play() {
  for (S.idx = 0; S.idx < S.steps.length && S.active; S.idx++) {
    S.skip = false;
    const st = S.steps[S.idx];
    setProgress(0);
    if (st.type === 'intro') await intro();
    else if (st.type === 'day') await dayCard(st.place);
    else if (st.type === 'place') await visit(st.place);
    else if (st.type === 'move') await move(st.mv);
    else if (st.type === 'outro') { if ((await outro()) === 'again') return; }
  }
}

function restart() {
  card('');
  S.trail = [];
  E.setTrail(null);
  E.setTrailNow(null);
  S.marker.getElement().style.opacity = '';
  S.steps = buildSteps(S.r);
  startMusic();
  setTimeout(() => play().catch(fail), 0);
}

function fail(err) {
  console.error(err);
  stop();
}

/* =============== Music =============== */
export async function prepare(tripId) {
  dropMusic();
  const m = await db.music(tripId).catch(() => null);
  if (!m?.blob) return;
  S.audioUrl = URL.createObjectURL(m.blob);
  S.audio = new Audio(S.audioUrl);
  S.audio.loop = true;
  S.audio.preload = 'auto';
}
function dropMusic() {
  try { S.audio?.pause(); } catch { /* ignore */ }
  if (S.audioUrl) URL.revokeObjectURL(S.audioUrl);
  S.audio = null; S.audioUrl = null; S.gain = null;
  try { S.actx?.close(); } catch { /* ignore */ }
  S.actx = null;
}
function startMusic() {
  if (!S.audio) return;
  try {
    if (!S.actx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        S.actx = new AC();
        const src = S.actx.createMediaElementSource(S.audio);
        S.gain = S.actx.createGain();
        src.connect(S.gain).connect(S.actx.destination);
      }
    }
    S.actx?.resume?.();
    if (S.gain) S.gain.gain.value = 1; else S.audio.volume = 1;
    S.audio.currentTime = 0;
    S.audio.play().catch(() => {});
  } catch { /* music is optional */ }
}
function fadeMusic(to, ms) {
  if (!S.audio) return;
  if (S.gain && S.actx) {
    const g = S.gain.gain, now = S.actx.currentTime;
    g.cancelScheduledValues(now);
    g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(to, now + ms / 1000);
  } else {
    const from = S.audio.volume, t0 = performance.now();
    const step = () => { const f = Math.min(1, (performance.now() - t0) / ms); S.audio.volume = lerp(from, to, f); if (f < 1) requestAnimationFrame(step); };
    step();
  }
  if (to === 0) setTimeout(() => { if (!S.active) S.audio?.pause(); }, ms + 50);
}

/* =============== Public =============== */
/** Must be called straight from a tap, so music may start on iOS. */
export function start(hooks = {}) {
  if (S.active || !M.r?.places.length) return;
  S.hooks = hooks;
  startMusic();
  Object.assign(S, { active: true, paused: false, skip: false, r: M.r, idx: 0, trail: [], last: 0 });
  gradeState = { w: -1, n: -1 };
  document.body.classList.add('cine');
  E.setScreen('cinema');
  E.setTrail(null);
  E.setTrailNow(null);
  E.setPlaces(S.r.places, model.placeName, () => 'next');
  const el = $('cinema');
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add('in'));
  $('cinePause').innerHTML = icon('pause');
  $('cineSkip').innerHTML = icon('skip');
  $('cineClose').innerHTML = icon('close');
  $('cineSpeed').textContent = `${S.speed}×`;
  $('prints').innerHTML = '';
  caption('');
  card('');
  setControls(false);
  makeMarker([S.r.places[0].lon, S.r.places[0].lat]);
  S.marker.getElement().style.opacity = '0';
  rig.pad = 0;
  rig.sync();
  S.tasks.clear();
  S.tasks.add(rig.task);
  S.steps = buildSteps(S.r);
  S.raf = requestAnimationFrame(loop);
  wakeLock();
  play().catch(fail);
}

export function stop() {
  if (!S.active) return;
  S.active = false;
  cancelAnimationFrame(S.raf);
  S.tasks.clear();
  rig.on = false;
  fadeMusic(0, 600);
  S.marker?.remove();
  S.marker = null;
  S.endChoice?.('close');
  E.setTrail(null);
  E.setTrailNow(null);
  document.body.classList.remove('cine');
  document.querySelector('.g-warm').style.opacity = '0';
  document.querySelector('.g-night').style.opacity = '0';
  const el = $('cinema');
  el.classList.remove('in');
  setTimeout(() => { if (!S.active) el.hidden = true; }, 450);
  document.body.classList.remove('paused');
  try { S.wake?.release(); } catch { /* ignore */ }
  S.wake = null;
  E.map.jumpTo({ padding: { top: 0, bottom: 0, left: 0, right: 0 } });
  S.hooks.exit?.();
}

export const isActive = () => S.active;

function setPaused(p) {
  S.paused = p;
  $('cinePause').innerHTML = icon(p ? 'play' : 'pause');
  $('cinePause').setAttribute('aria-label', p ? '再生' : '一時停止');
  document.body.classList.toggle('paused', p);
  if (S.audio) { try { p ? S.audio.pause() : S.audio.play().catch(() => {}); } catch { /* ignore */ } }
  if (p) setControls(true, false); else setControls(true);
}
function setControls(on, autoHide = true) {
  $('cineControls').classList.toggle('show', on);
  clearTimeout(S.hideTimer);
  if (on && autoHide && !S.paused) S.hideTimer = setTimeout(() => $('cineControls').classList.remove('show'), 3200);
}
async function wakeLock() {
  try { S.wake = await navigator.wakeLock?.request('screen'); } catch { S.wake = null; }
}

$('cinema').addEventListener('click', e => {
  const a = e.target.closest('[data-a]')?.dataset.a;
  if (a) { S.endChoice?.(a); return; }
  if (e.target.closest('#cineControls')) return;
  setControls(!$('cineControls').classList.contains('show'));
});
$('cinePause').addEventListener('click', () => setPaused(!S.paused));
$('cineSpeed').addEventListener('click', () => {
  S.speed = SPEEDS[(SPEEDS.indexOf(S.speed) + 1) % SPEEDS.length];
  $('cineSpeed').textContent = `${S.speed}×`;
  setControls(true);
});
$('cineSkip').addEventListener('click', () => { S.skip = true; setControls(true); });
$('cineClose').addEventListener('click', () => stop());
document.addEventListener('keydown', e => {
  if (!S.active) return;
  if (e.key === ' ') { e.preventDefault(); setPaused(!S.paused); }
  if (e.key === 'Escape') stop();
  if (e.key === 'ArrowRight') S.skip = true;
});
document.addEventListener('visibilitychange', () => {
  if (!S.active) return;
  if (document.hidden && !S.paused) setPaused(true);
  if (!document.hidden && !S.wake) wakeLock();
});
