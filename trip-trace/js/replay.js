// Replay: travel along the estimated route; on arrival at each spot, show its highlight photos.
import { map, fitTo, flyToVisible, flyToBoundsVisible } from './mapview.js';
import { MODES, travelHours } from './analyze.js';
import { cumulative, pointAt, pathKm } from './geo.js';
import { fmtClock, fmtDate, fmtKm, fmtRange, esc } from './fmt.js';
import { urlOf } from './ui.js';

const $ = id => document.getElementById(id);
const SPEEDS = [1, 2, 4];
const R = { active: false, paused: false, speed: 1, skip: false, next: false, layer: null, mover: null, steps: [], idx: 0, ctx: null, wake: null };

/* ---------------- Public ---------------- */
export function start(ctx) {
  if (R.active) return;
  Object.assign(R, { ctx, active: true, paused: false, skip: false, next: false, idx: 0 });
  ctx.onEnter?.();
  $('replayView').hidden = false;
  if (!R.layer) R.layer = L.layerGroup().addTo(map);
  R.layer.clearLayers();
  R.steps = buildSteps(ctx);
  $('rpPause').textContent = '❚❚';
  $('rpSpeed').textContent = `${R.speed}×`;
  hidePhoto();
  hideCard();
  requestWake();
  run().catch(err => { console.error(err); stop(); });
}

export function stop() {
  if (!R.active && $('replayView').hidden) return;
  R.active = false;
  hidePhoto();
  hideCard();
  $('replayView').hidden = true;
  R.layer?.clearLayers();
  R.wake?.release?.().catch?.(() => {});
  R.wake = null;
  R.ctx?.onExit?.();
}

/* ---------------- Steps ---------------- */
function dominant(legs) {
  const by = {};
  for (const l of legs) by[l.mode] = (by[l.mode] || 0) + pathKm(l.coords);
  return Object.entries(by).sort((a, b) => b[1] - a[1])[0]?.[0] || 'walk';
}

function buildSteps(ctx) {
  const { result } = ctx;
  const multiDay = result.days.length > 1;
  const steps = [{ type: 'title' }];
  result.spots.forEach((s, i) => {
    if (i === 0) {
      if (multiDay) steps.push({ type: 'day', spot: s });
    } else {
      const prev = result.spots[i - 1];
      const seg = result.segments[i - 1];
      if (seg.newDay) steps.push({ type: 'day', spot: s });
      const legs = ctx.legsOf(seg);
      const total = legs.reduce((a, l) => a + pathKm(l.coords), 0) || 1e-9;
      // Leave the previous spot only as long before arrival as the trip would take.
      const travelMs = Math.min(travelHours(dominant(legs), total) * 3.6e6, s.start - prev.end);
      const depart = Math.max(prev.end, s.start - travelMs);
      let acc = 0;
      for (const leg of legs) {
        const km = pathKm(leg.coords);
        const t0 = depart + (s.start - depart) * (acc / total);
        acc += km;
        if (km < 0.02) continue;
        steps.push({ type: 'leg', leg, km, t0, t1: depart + (s.start - depart) * (acc / total), off: prev.off || s.off });
      }
    }
    steps.push({ type: 'spot', spot: s });
  });
  steps.push({ type: 'end' });
  return steps;
}

/* ---------------- Engine ---------------- */
function wait(ms, onFrame) {
  return new Promise(resolve => {
    let elapsed = 0, last = performance.now();
    const tick = now => {
      if (!R.active) return resolve('stop');
      const dt = Math.min(now - last, 250);
      last = now;
      if (!R.paused) elapsed += dt * R.speed;
      if (R.skip) { onFrame?.(1); return resolve('skip'); }
      if (R.next) { R.next = false; onFrame?.(1); return resolve('next'); }
      const f = Math.min(1, elapsed / ms);
      onFrame?.(f);
      if (f >= 1) return resolve('done');
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
const ease = t => 0.5 - Math.cos(Math.PI * t) / 2;

function legDuration(mode, km) {
  const c = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  if (mode === 'walk') return c(1600 + km * 2400, 1600, 6000);
  if (mode === 'car') return c(2200 + km * 300, 2200, 6500);
  if (mode === 'train') return c(2400 + km * 90, 2400, 7000);
  if (mode === 'boat') return c(2600 + km * 120, 2600, 6500);
  return 6500;
}

async function run() {
  const first = R.ctx.result.spots[0];
  R.mover = L.marker([first.lat, first.lon], { icon: moverIcon('spot'), interactive: false, zIndexOffset: 1000, keyboard: false }).addTo(R.layer);
  for (R.idx = 0; R.idx < R.steps.length && R.active; R.idx++) {
    R.skip = false;
    R.next = false;
    const st = R.steps[R.idx];
    if (st.type === 'title') await showTitle();
    else if (st.type === 'day') await showDay(st);
    else if (st.type === 'leg') await playLeg(st);
    else if (st.type === 'spot') await playSpot(st);
    else if (st.type === 'end') await showEnd();
  }
}

/* ---------------- HUD ---------------- */
function insets(withPhoto = false) {
  const top = $('rpHud').getBoundingClientRect().bottom;
  const el = withPhoto && !$('rpPhoto').hidden ? $('rpPhoto') : $('rpControls');
  return { top, bottom: window.innerHeight - el.getBoundingClientRect().top };
}
function setHud({ day, clock, label }) {
  if (day != null) $('rpDay').textContent = day;
  if (clock != null) $('rpClock').textContent = clock;
  if (label != null) $('rpLabel').textContent = label;
}
function dayText(s) {
  const r = R.ctx.result;
  return r.days.length > 1 ? `${s.day + 1}日目` : fmtDate(s.start, s.off);
}
function setProgress(f) {
  $('rpBar').style.width = `${Math.min(100, ((R.idx + f) / R.steps.length) * 100)}%`;
}
function moverIcon(mode) {
  const m = MODES[mode];
  const icon = m ? m.icon : '📷';
  const color = m ? m.color : '#14b8a6';
  return L.divIcon({ className: 'mover-wrap', html: `<div class="mover" style="--c:${color}"><span>${icon}</span></div>`, iconSize: [46, 46], iconAnchor: [23, 23] });
}

function showCard(html, cls = '') {
  const c = $('rpCard');
  c.className = `rp-card ${cls}`;
  c.innerHTML = html;
  c.hidden = false;
}
function hideCard() { $('rpCard').hidden = true; }

function showPhoto(p, s, k, n) {
  $('rpPhotoImg').src = urlOf(p.full || p.thumb);
  $('rpPhotoBg').style.backgroundImage = p.thumb ? `url("${urlOf(p.thumb)}")` : '';
  $('rpPlace').textContent = R.ctx.spotName(s);
  $('rpTime').textContent = fmtClock(p.time, p.off || s.off);
  $('rpDots').innerHTML = n > 1 ? Array.from({ length: n }, (_, j) => `<i class="${j === k ? 'on' : ''}"></i>`).join('') : '';
  const el = $('rpPhoto');
  if (el.hidden) {
    el.hidden = false;
    el.classList.remove('pop');
    void el.offsetWidth;
    el.classList.add('pop');
  }
}
function hidePhoto() { $('rpPhoto').hidden = true; }

/* ---------------- Steps: cards ---------------- */
async function showTitle() {
  const r = R.ctx.result;
  const first = r.spots[0], last = r.spots[r.spots.length - 1];
  setHud({ day: dayText(first), clock: fmtClock(first.start, first.off), label: R.ctx.title });
  const pts = r.spots.map(s => [s.lat, s.lon]);
  fitTo(L.latLngBounds(pts), insets(), 15, true);
  showCard(`
    <div class="rc-eyebrow">TRIP TRACE</div>
    <div class="rc-title">${esc(R.ctx.title)}</div>
    <div class="rc-sub">${esc(fmtRange(first.start, last.end, first.off))}${r.days.length > 1 ? ` · ${r.days.length}日間` : ''}</div>
    <div class="rc-sub">${r.spots.length}スポット · 写真${r.used}枚</div>`, 'title');
  await wait(2600, setProgress);
  hideCard();
}

async function showDay({ spot }) {
  setHud({ day: dayText(spot), label: '' });
  showCard(`<div class="rc-day" style="--c:${R.ctx.dayColor(spot.day)}">${spot.day + 1}日目</div><div class="rc-sub">${esc(fmtDate(spot.start, spot.off))}</div>`, 'day');
  await wait(1700, setProgress);
  hideCard();
}

async function showEnd() {
  const r = R.ctx.result;
  hidePhoto();
  setProgress(1);
  setHud({ label: 'おしまい' });
  R.mover?.remove();
  fitTo(L.latLngBounds(r.spots.map(s => [s.lat, s.lon])), insets(), 15, true);
  const km = r.segments.reduce((a, seg) => a + R.ctx.legsOf(seg).reduce((b, l) => b + pathKm(l.coords), 0), 0);
  showCard(`
    <div class="rc-eyebrow">おしまい</div>
    <div class="rc-title">${esc(R.ctx.title)}</div>
    <div class="rc-stats">
      <div><b>${r.days.length}</b><span>日</span></div>
      <div><b>${r.spots.length}</b><span>スポット</span></div>
      <div><b>${esc(fmtKm(km))}</b><span>移動</span></div>
      <div><b>${r.used}</b><span>写真</span></div>
    </div>
    <div class="rc-btns"><button type="button" class="btn ghost" data-a="again">もう一度</button><button type="button" class="btn primary" data-a="close">閉じる</button></div>`, 'end');
  const choice = await new Promise(resolve => {
    const h = e => {
      const a = e.target.closest('[data-a]')?.dataset.a;
      if (!a) return;
      $('rpCard').removeEventListener('click', h);
      resolve(a);
    };
    $('rpCard').addEventListener('click', h);
    const poll = () => { if (!R.active) { $('rpCard').removeEventListener('click', h); resolve('close'); } else setTimeout(poll, 300); };
    poll();
  });
  if (choice === 'again' && R.active) {
    hideCard();
    R.layer.clearLayers();
    R.steps = buildSteps(R.ctx);
    R.idx = -1; // the for-loop increments to 0
    const first = r.spots[0];
    R.mover = L.marker([first.lat, first.lon], { icon: moverIcon('spot'), interactive: false, zIndexOffset: 1000, keyboard: false }).addTo(R.layer);
    return;
  }
  stop();
}

/* ---------------- Steps: moving and photos ---------------- */
async function playLeg(st) {
  const { leg, km } = st;
  const m = MODES[leg.mode];
  R.mover.setIcon(moverIcon(leg.mode));
  setHud({ label: `${m.icon} ${m.label}${leg.label ? `（${leg.label}）` : ''} · ${fmtKm(km)}`, clock: fmtClock(st.t0, st.off) });
  const c = leg.coords;
  const maxZoom = leg.mode === 'walk' ? 16 : leg.mode === 'plane' ? 8 : 15;
  flyToBoundsVisible(L.latLngBounds(c), insets(), maxZoom, 0.9);
  if ((await wait(900)) === 'skip') { R.mover.setLatLng(c[c.length - 1]); return; }
  const cum = cumulative(c);
  const total = cum[cum.length - 1];
  const trail = L.polyline([c[0]], { color: m.color, weight: 6, opacity: 1, lineCap: 'round', lineJoin: 'round', interactive: false }).addTo(R.layer);
  await wait(legDuration(leg.mode, km), f => {
    const { pos, i } = pointAt(c, cum, ease(f) * total);
    R.mover.setLatLng(pos);
    trail.setLatLngs([...c.slice(0, i + 1), pos]);
    $('rpClock').textContent = fmtClock(st.t0 + (st.t1 - st.t0) * f, st.off);
    setProgress(f);
  });
  trail.setLatLngs(c);
  R.mover.setLatLng(c[c.length - 1]);
}

async function playSpot({ spot: s }) {
  setHud({ day: dayText(s), clock: fmtClock(s.start, s.off), label: `${s.idx + 1}. ${R.ctx.spotName(s)}` });
  R.mover.setLatLng([s.lat, s.lon]);
  R.mover.setIcon(moverIcon('spot'));
  const photos = (s.highlights.length ? s.highlights : s.photos).filter(p => p.full || p.thumb);
  if (!photos.length) {
    flyToVisible([s.lat, s.lon], 16, insets());
    await wait(1400, setProgress);
    return;
  }
  showPhoto(photos[0], s, 0, photos.length);
  try { await $('rpPhotoImg').decode(); } catch { /* show anyway */ }
  flyToVisible([s.lat, s.lon], 16, insets(true));
  const per = photos.length > 4 ? 1900 : 2700;
  for (let k = 0; k < photos.length; k++) {
    if (k > 0) showPhoto(photos[k], s, k, photos.length);
    $('rpClock').textContent = fmtClock(photos[k].time, photos[k].off || s.off);
    const res = await wait(per, f => setProgress(((k + f) / photos.length) * 0.999));
    if (res === 'skip' || res === 'stop') break;
  }
  hidePhoto();
}

/* ---------------- Controls ---------------- */
async function requestWake() {
  try { R.wake = await navigator.wakeLock?.request('screen'); } catch { R.wake = null; }
}
$('rpPause').addEventListener('click', () => {
  R.paused = !R.paused;
  $('rpPause').textContent = R.paused ? '▶' : '❚❚';
  $('rpPause').setAttribute('aria-label', R.paused ? '再開' : '一時停止');
});
$('rpSpeed').addEventListener('click', () => {
  R.speed = SPEEDS[(SPEEDS.indexOf(R.speed) + 1) % SPEEDS.length];
  $('rpSpeed').textContent = `${R.speed}×`;
});
$('rpSkip').addEventListener('click', () => { R.skip = true; });
$('rpStop').addEventListener('click', stop);
$('rpPhoto').addEventListener('click', () => { R.next = true; });
$('rpCard').addEventListener('click', e => { if (!e.target.closest('[data-a]')) R.skip = true; });
document.addEventListener('visibilitychange', () => {
  if (document.hidden && R.active && !R.paused) $('rpPause').click();
  if (!document.hidden && R.active && R.wake == null) requestWake();
});
