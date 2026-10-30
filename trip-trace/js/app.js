// Trip Trace — UI, map and replay.
import {
  MODES, MODE_ORDER, buildTrip, buildSegments, spotsNeedingStations, nearestStations,
  pathLengthKm, fmtKm, haversineKm,
} from './trip.js';
import { buildLegs, fetchStations, placeName } from './net.js';
import * as store from './store.js';
import { makeSamplePhotos } from './sample.js';

const $ = id => document.getElementById(id);
const S = {
  photos: [], spots: [], segments: [], orphans: [],
  stations: null, stationsFailed: false,
  overrides: {}, sample: false, token: 0,
};

/* ---------------- Map ---------------- */
const map = L.map('map', { zoomControl: false, attributionControl: false, worldCopyJump: true }).setView([35.68, 139.76], 11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  subdomains: 'abcd', maxZoom: 20,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);
L.control.attribution({ position: 'topright', prefix: false }).addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const spotLayer = L.layerGroup().addTo(map);
const replayLayer = L.layerGroup().addTo(map);
const segLayers = new Map();

function sheetHeight() {
  const el = [$('overview'), $('hud'), $('welcome')].find(e => !e.hidden);
  return el ? el.getBoundingClientRect().height : 0;
}
function padOpts(maxZoom = 16) {
  return { paddingTopLeft: [36, 90], paddingBottomRight: [36, sheetHeight() + 24], maxZoom };
}
function fitTrip(animate = true) {
  if (!S.spots.length) return;
  const pts = S.spots.map(s => [s.lat, s.lon]);
  for (const seg of S.segments) for (const l of seg.legs || []) pts.push(...l.coords);
  map.fitBounds(L.latLngBounds(pts), { ...padOpts(16), animate });
}

/* ---------------- Photo loading ---------------- */
async function shrink(file, max = 1600) {
  try {
    const bmp = await createImageBitmap(file);
    const sc = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const c = document.createElement('canvas');
    c.width = Math.round(bmp.width * sc); c.height = Math.round(bmp.height * sc);
    c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
    bmp.close?.();
    return await new Promise(r => c.toBlob(r, 'image/jpeg', 0.85));
  } catch { return null; }
}

const pad = n => String(n).padStart(2, '0');
function exifTime(ex) {
  const d = ex?.DateTimeOriginal || ex?.CreateDate;
  if (!(d instanceof Date) || isNaN(d)) return { time: null, off: null };
  const off = ex.OffsetTimeOriginal || ex.OffsetTime || null;
  if (off && /^[+-]\d\d:\d\d$/.test(off)) {
    // exifr reads the wall-clock time as device-local; re-anchor it to the camera's offset.
    const iso = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${off}`;
    return { time: Date.parse(iso), off };
  }
  return { time: d.getTime(), off: null };
}

async function readPhoto(file) {
  let ex = null;
  try {
    ex = await exifr.parse(file, { tiff: true, exif: true, gps: true, xmp: false, icc: false, iptc: false, ifd1: false });
  } catch { /* no EXIF */ }
  const { time, off } = exifTime(ex);
  let lat = null, lon = null;
  if (ex && typeof ex.latitude === 'number' && typeof ex.longitude === 'number' && !(ex.latitude === 0 && ex.longitude === 0)) {
    lat = ex.latitude; lon = ex.longitude;
  }
  const blob = (await shrink(file)) || file;
  return { id: `${file.name}|${time ?? file.size}`, name: file.name, time, off, lat, lon, blob };
}

async function addFiles(fileList) {
  const files = [...fileList];
  if (!files.length) return;
  if (S.sample) { await store.clearAll(); S.photos = []; S.overrides = {}; S.sample = false; }
  showLoading(`写真を読み込み中… 0/${files.length}`);
  const known = new Set(S.photos.map(p => p.id));
  const added = [];
  for (let i = 0; i < files.length; i++) {
    $('loadingText').textContent = `写真を読み込み中… ${i + 1}/${files.length}`;
    const p = await readPhoto(files[i]);
    if (known.has(p.id)) continue;
    known.add(p.id);
    p.url = URL.createObjectURL(p.blob);
    added.push(p);
  }
  S.photos.push(...added);
  hideLoading();
  await store.savePhotos(added);
  await saveMeta();
  const gps = added.filter(p => p.lat != null).length;
  toastStatus(`${added.length}枚を追加（位置情報あり ${gps}枚）`);
  S.stations = null; S.stationsFailed = false;
  rebuild(true);
}

async function loadSample() {
  closeMenu();
  await store.clearAll();
  showLoading('サンプルを準備中…');
  const photos = await makeSamplePhotos();
  for (const p of photos) p.url = URL.createObjectURL(p.blob);
  S.photos = photos; S.overrides = {}; S.sample = true; S.stations = null; S.stationsFailed = false;
  await store.savePhotos(photos);
  await saveMeta();
  hideLoading();
  rebuild(true);
}

async function clearTrip() {
  closeMenu();
  if (!confirm('読み込んだ写真と旅の情報を削除します。よろしいですか？')) return;
  stopReplay();
  await store.clearAll();
  for (const p of S.photos) URL.revokeObjectURL(p.url);
  Object.assign(S, { photos: [], spots: [], segments: [], orphans: [], stations: null, overrides: {}, sample: false });
  S.token++;
  routeLayer.clearLayers(); spotLayer.clearLayers(); segLayers.clear();
  showView('welcome');
}

function saveMeta() { return store.saveMeta({ overrides: S.overrides, sample: S.sample }); }

/* ---------------- Trip building ---------------- */
const segKey = seg => `${S.spots[seg.from].start}|${S.spots[seg.to].start}`;
function applyOverrides(segs) {
  for (const seg of segs) {
    const o = S.overrides[segKey(seg)];
    if (o && MODES[o]) seg.mode = o;
  }
}

async function rebuild(refit) {
  const token = ++S.token;
  const trip = buildTrip(S.photos, S.stations || null);
  S.spots = trip.spots; S.orphans = trip.orphans; S.segments = trip.segments;
  applyOverrides(S.segments);
  if (!S.photos.length) { showView('welcome'); return; }
  showView('overview');
  renderAll();
  if (refit) fitTrip(false);
  if (!S.spots.length) { setStatus('位置情報付きの写真がありません。写真を選ぶときに位置情報を含めてください。'); return; }

  // 1) stations → better mode guesses
  if (S.stations === null && !S.stationsFailed) {
    const need = spotsNeedingStations(S.spots);
    if (need.length) {
      setStatus('近くの駅を調べています…');
      const list = await fetchStations(need);
      if (token !== S.token) return;
      if (list) S.stations = nearestStations(S.spots, list);
      else S.stationsFailed = true;
    } else S.stations = {};
    const fresh = buildSegments(S.spots, S.stations || null);
    applyOverrides(fresh);
    S.segments = fresh;
    renderAll();
  }

  // 2) routes
  for (let i = 0; i < S.segments.length; i++) {
    const seg = S.segments[i];
    setStatus(`経路を描いています… ${i + 1}/${S.segments.length}`);
    seg.legs = await buildLegs(seg, S.spots[seg.from], S.spots[seg.to], S.stations);
    if (token !== S.token) return;
    drawSegment(seg);
  }
  renderStats();
  if (refit) fitTrip(true);
  setStatus(S.stationsFailed ? '駅情報を取得できなかったため、距離から移動手段を推定しています' : '');

  // 3) place names (slow, throttled)
  for (const sp of S.spots) {
    if (sp.name) continue;
    const name = await placeName(sp.lat, sp.lon);
    if (token !== S.token) return;
    if (name) { sp.name = name; updateSpotName(sp); }
  }
}

async function cycleMode(seg) {
  const next = MODE_ORDER[(MODE_ORDER.indexOf(seg.mode) + 1) % MODE_ORDER.length];
  seg.mode = next;
  if (next === seg.auto) delete S.overrides[segKey(seg)]; else S.overrides[segKey(seg)] = next;
  saveMeta();
  seg.legs = null;
  drawSegment(seg);
  renderStrip();
  const token = S.token;
  seg.legs = await buildLegs(seg, S.spots[seg.from], S.spots[seg.to], S.stations);
  if (token !== S.token || seg.mode !== next) return;
  drawSegment(seg);
  renderStats();
}

/* ---------------- Rendering ---------------- */
function renderAll() {
  routeLayer.clearLayers(); spotLayer.clearLayers(); segLayers.clear();
  S.segments.forEach(drawSegment);
  S.spots.forEach(drawSpot);
  renderStrip();
  renderStats();
}

function drawSegment(seg) {
  segLayers.get(seg.id)?.remove();
  const g = L.layerGroup().addTo(routeLayer);
  segLayers.set(seg.id, g);
  const a = S.spots[seg.from], b = S.spots[seg.to];
  const legs = seg.legs || [{ mode: seg.mode, coords: [[a.lat, a.lon], [b.lat, b.lon]], approx: true, pending: true }];
  for (const l of legs) {
    const color = MODES[l.mode].color;
    L.polyline(l.coords, { color, weight: 9, opacity: 0.18, className: 'route-line', interactive: false }).addTo(g);
    L.polyline(l.coords, {
      color, weight: 3.5, opacity: l.pending ? 0.5 : 0.95, className: 'route-line',
      dashArray: l.pending ? '2 8' : l.mode === 'plane' ? '10 8' : l.approx ? '6 6' : null,
    }).addTo(g).on('click', () => cycleMode(seg));
  }
}

function photoThumb(sp) { return (sp.photos.find(p => p.lat != null) || sp.photos[0])?.url || ''; }

function drawSpot(sp, i) {
  const html = `<div class="pin-wrap"><div class="spot-pin"><img src="${photoThumb(sp)}" alt=""></div><span class="pin-badge">${i + 1}</span></div>`;
  L.marker([sp.lat, sp.lon], {
    icon: L.divIcon({ className: '', html, iconSize: [46, 46], iconAnchor: [23, 23] }),
    keyboard: false,
  }).addTo(spotLayer).on('click', () => openGallery(sp, i));
}

function renderStrip() {
  const el = $('strip');
  el.innerHTML = '';
  S.spots.forEach((sp, i) => {
    const card = document.createElement('button');
    card.type = 'button'; card.className = 'spot-card'; card.setAttribute('role', 'listitem');
    card.dataset.spot = i;
    card.innerHTML = `<div class="th"><img src="${photoThumb(sp)}" alt="" loading="lazy"><span class="no">${i + 1}</span><span class="cnt">${sp.photos.length}枚</span></div>
      <div class="nm">${esc(sp.name || `スポット ${i + 1}`)}</div><div class="tm">${fmtClock(sp.start, offOf(sp))}${sp.end - sp.start > 60000 ? '–' + fmtClock(sp.end, offOf(sp)) : ''}</div>`;
    card.addEventListener('click', () => { map.flyTo([sp.lat, sp.lon], 17, { duration: 0.6 }); openGallery(sp, i); });
    el.appendChild(card);
    const seg = S.segments[i];
    if (seg) {
      const chip = document.createElement('button');
      chip.type = 'button'; chip.className = 'seg-chip' + (seg.mode !== seg.auto ? ' edited' : '');
      chip.title = seg.reason;
      chip.innerHTML = `<span class="ic">${MODES[seg.mode].icon}</span><span class="md">${MODES[seg.mode].label}</span><span class="km">${fmtKm(seg.km)}</span>`;
      chip.addEventListener('click', () => cycleMode(seg));
      el.appendChild(chip);
    }
  });
}

function updateSpotName(sp) {
  const card = document.querySelector(`.spot-card[data-spot="${sp.id}"] .nm`);
  if (card) card.textContent = sp.name;
}

function renderStats() {
  if (!S.spots.length) { $('tripTitle').textContent = `${S.photos.length}枚の写真`; $('tripStats').textContent = '位置情報付きの写真がありません'; return; }
  const first = S.spots[0], last = S.spots[S.spots.length - 1];
  const d1 = fmtDate(first.start, offOf(first)), d2 = fmtDate(last.end, offOf(last));
  $('tripTitle').textContent = (S.sample ? 'サンプル · ' : '') + (d1 === d2 ? d1 : `${d1} 〜 ${d2}`);
  let km = 0;
  for (const seg of S.segments) km += seg.legs ? seg.legs.reduce((s, l) => s + pathLengthKm(l.coords), 0) : seg.km;
  const used = S.photos.length - S.orphans.length;
  $('tripStats').textContent = `${S.spots.length}スポット · ${used}枚 · 移動 ${fmtKm(km)}` + (S.orphans.length ? ` · 位置不明 ${S.orphans.length}枚` : '');
}

/* ---------------- Gallery ---------------- */
function openGallery(sp, i) {
  if (RP.active) return;
  $('galTitle').textContent = `${i + 1}. ${sp.name || 'スポット ' + (i + 1)}`;
  $('galSub').textContent = `${fmtDate(sp.start, offOf(sp))} ${fmtClock(sp.start, offOf(sp))}–${fmtClock(sp.end, offOf(sp))} · ${sp.photos.length}枚`;
  $('galGrid').innerHTML = sp.photos.map(p =>
    `<figure><img src="${p.url}" alt="" loading="lazy"><figcaption>${fmtClock(p.time, p.off)}${p.lat == null ? ' · 位置なし（時刻から配置）' : ''}</figcaption></figure>`).join('');
  $('gallery').hidden = false;
}
$('galClose').addEventListener('click', () => { $('gallery').hidden = true; });

/* ---------------- Replay ---------------- */
const RP = { active: false, paused: false, speed: 1, skipStep: false, skipPhoto: false, steps: [], idx: 0, mover: null };
const SPEEDS = [1, 2, 4];

function buildSteps() {
  const steps = [];
  S.spots.forEach((sp, i) => {
    steps.push({ type: 'spot', sp, i });
    const seg = S.segments[i];
    if (!seg) return;
    const a = sp, b = S.spots[seg.to];
    const legs = seg.legs || [{ mode: seg.mode, coords: [[a.lat, a.lon], [b.lat, b.lon]], approx: true }];
    const lens = legs.map(l => Math.max(pathLengthKm(l.coords), 1e-6));
    const total = lens.reduce((s, v) => s + v, 0);
    let acc = 0;
    legs.forEach((l, k) => {
      steps.push({ type: 'leg', seg, leg: l, km: lens[k], from: a, to: b, f0: acc / total, f1: (acc + lens[k]) / total });
      acc += lens[k];
    });
  });
  return steps;
}

function wait(ms, onFrame) {
  return new Promise(res => {
    let el = 0, last = performance.now();
    const tick = now => {
      if (!RP.active) return res('stop');
      const dt = Math.min(now - last, 100); last = now;
      if (!RP.paused) el += dt * RP.speed;
      if (RP.skipStep) { onFrame?.(1); return res('skip'); }
      if (RP.skipPhoto) { RP.skipPhoto = false; onFrame?.(1); return res('next'); }
      const f = Math.min(1, el / ms);
      onFrame?.(f);
      if (f >= 1) return res('done');
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function legDuration(mode, km) {
  const c = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  if (mode === 'walk') return c(1800 + km * 2600, 1800, 6000);
  if (mode === 'taxi') return c(2400 + km * 350, 2400, 7000);
  if (mode === 'train') return c(2600 + km * 120, 2600, 7000);
  return 6500;
}
const ease = t => 0.5 - Math.cos(Math.PI * t) / 2;

function moverIcon(mode) {
  return L.divIcon({ className: '', html: `<div class="mover-ring"><span class="mover">${MODES[mode]?.icon || '📍'}</span></div>`, iconSize: [44, 44], iconAnchor: [22, 22] });
}

function setProgress(f) {
  $('hudBar').style.width = `${Math.min(100, ((RP.idx + f) / RP.steps.length) * 100)}%`;
}

async function startReplay() {
  if (!S.spots.length || RP.active) return;
  RP.active = true; RP.paused = false; RP.skipStep = false; RP.idx = 0;
  RP.steps = buildSteps();
  showView('hud');
  document.body.classList.add('replaying');
  $('hudPause').textContent = '❚❚';
  replayLayer.clearLayers();
  const first = S.spots[0];
  RP.mover = L.marker([first.lat, first.lon], { icon: moverIcon('walk'), interactive: false, zIndexOffset: 1000 }).addTo(replayLayer);
  map.flyTo([first.lat, first.lon], 16, { duration: 1 });
  await wait(1000);

  for (RP.idx = 0; RP.idx < RP.steps.length && RP.active; RP.idx++) {
    RP.skipStep = false;
    const st = RP.steps[RP.idx];
    if (st.type === 'spot') await playSpot(st); else await playLeg(st);
  }
  if (!RP.active) return;
  $('photoCard').hidden = true;
  $('hudLabel').textContent = 'おしまい';
  setProgress(0);
  fitTrip(true);
  await wait(1800);
  stopReplay();
}

async function playSpot({ sp, i }) {
  const off = offOf(sp);
  $('hudLabel').textContent = `${i + 1}. ${sp.name || 'スポット ' + (i + 1)} · ${sp.photos.length}枚`;
  $('hudClock').textContent = fmtClock(sp.start, off);
  RP.mover.setLatLng([sp.lat, sp.lon]);
  const per = sp.photos.length > 6 ? 1600 : 2600;
  const card = $('photoCard');
  $('photoPlace').textContent = sp.name || `スポット ${i + 1}`;
  $('photoDots').innerHTML = sp.photos.length > 1 ? sp.photos.map(() => '<i></i>').join('') : '';
  $('photoImg').src = sp.photos[0].url;
  card.hidden = false;
  card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
  await $('photoImg').decode?.().catch(() => {});
  // Keep the spot visible in the gap between the photo card and the HUD.
  focusBelowCard([sp.lat, sp.lon], Math.max(16, Math.min(map.getZoom(), 17)));
  for (let k = 0; k < sp.photos.length; k++) {
    const p = sp.photos[k];
    $('photoImg').src = p.url;
    $('photoTime').textContent = fmtClock(p.time, p.off || off);
    $('hudClock').textContent = fmtClock(p.time, p.off || off);
    [...$('photoDots').children].forEach((d, j) => d.classList.toggle('on', j === k));
    const r = await wait(per, f => setProgress(((k + f) / sp.photos.length) * 0.999));
    if (r === 'skip' || r === 'stop') break;
  }
  card.hidden = true;
}

function focusBelowCard(latlng, zoom) {
  const size = map.getSize();
  const cardRect = $('photoCard').hidden ? null : $('photoCard').getBoundingClientRect();
  const top = cardRect ? cardRect.bottom : 80;
  const bottom = size.y - sheetHeight();
  const targetY = bottom > top + 60 ? (top + bottom) / 2 : size.y / 2;
  const p = map.project(latlng, zoom);
  const center = map.unproject(p.add([0, size.y / 2 - targetY]), zoom);
  map.flyTo(center, zoom, { duration: 0.8 });
}

async function playLeg(st) {
  const { leg, seg, from, to } = st;
  const coords = leg.coords;
  RP.mover.setIcon(moverIcon(leg.mode));
  const label = leg.label ? `${MODES[leg.mode].icon} ${leg.label}` : `${MODES[leg.mode].icon} ${MODES[leg.mode].label}`;
  $('hudLabel').textContent = `${label} · ${fmtKm(st.km)}`;
  const bounds = L.latLngBounds(coords);
  map.flyToBounds(bounds, { ...padOpts(leg.mode === 'walk' ? 17 : 15), duration: 0.8 });
  if ((await wait(800)) === 'skip') { RP.mover.setLatLng(coords[coords.length - 1]); return; }

  const cum = [0];
  for (let i = 1; i < coords.length; i++)
    cum.push(cum[i - 1] + haversineKm({ lat: coords[i - 1][0], lon: coords[i - 1][1] }, { lat: coords[i][0], lon: coords[i][1] }));
  const total = cum[cum.length - 1] || 1e-9;
  const trail = L.polyline([coords[0]], { color: MODES[leg.mode].color, weight: 5, opacity: 1 }).addTo(replayLayer);
  const t0 = from.end, t1 = Math.max(to.start, from.end);
  const off = offOf(from);
  let j = 0;
  await wait(legDuration(leg.mode, st.km), f => {
    const target = ease(f) * total;
    while (j < cum.length - 2 && cum[j + 1] < target) j++;
    const segLen = cum[j + 1] - cum[j] || 1e-9;
    const u = Math.min(1, Math.max(0, (target - cum[j]) / segLen));
    const a = coords[j], b = coords[Math.min(j + 1, coords.length - 1)];
    const pos = [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
    RP.mover.setLatLng(pos);
    trail.setLatLngs([...coords.slice(0, j + 1), pos]);
    const tf = st.f0 + (st.f1 - st.f0) * f;
    $('hudClock').textContent = fmtClock(t0 + (t1 - t0) * tf, off);
    setProgress(f);
  });
  trail.setLatLngs(coords);
}

function stopReplay() {
  if (!RP.active && $('hud').hidden) return;
  RP.active = false;
  $('photoCard').hidden = true;
  replayLayer.clearLayers();
  document.body.classList.remove('replaying');
  showView(S.photos.length ? 'overview' : 'welcome');
}

$('playBtn').addEventListener('click', startReplay);
$('hudStop').addEventListener('click', stopReplay);
$('hudSkip').addEventListener('click', () => { RP.skipStep = true; });
$('photoCard').addEventListener('click', () => { RP.skipPhoto = true; });
$('hudPause').addEventListener('click', () => {
  RP.paused = !RP.paused;
  $('hudPause').textContent = RP.paused ? '▶' : '❚❚';
});
$('hudSpeed').addEventListener('click', () => {
  RP.speed = SPEEDS[(SPEEDS.indexOf(RP.speed) + 1) % SPEEDS.length];
  $('hudSpeed').textContent = `${RP.speed}×`;
});

/* ---------------- Views & helpers ---------------- */
function showView(v) {
  $('welcome').hidden = v !== 'welcome';
  $('overview').hidden = v !== 'overview';
  $('hud').hidden = v !== 'hud';
  $('topbar').style.visibility = v === 'hud' ? 'hidden' : '';
}
function setStatus(t) { $('status').textContent = t; }
let statusTimer = 0;
function toastStatus(t) { setStatus(t); clearTimeout(statusTimer); statusTimer = setTimeout(() => { if ($('status').textContent === t) setStatus(''); }, 4000); }
function showLoading(t) { $('loadingText').textContent = t; $('loading').hidden = false; }
function hideLoading() { $('loading').hidden = true; }
function closeMenu() { $('menu').hidden = true; }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function offMinutes(off) {
  if (!off) return -new Date().getTimezoneOffset();
  const m = /^([+-])(\d\d):(\d\d)$/.exec(off);
  return m ? (m[1] === '-' ? -1 : 1) * (+m[2] * 60 + +m[3]) : -new Date().getTimezoneOffset();
}
function shifted(ms, off) { return new Date(ms + offMinutes(off) * 60000); }
function fmtClock(ms, off) { if (ms == null) return '--:--'; const d = shifted(ms, off); return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; }
const WD = ['日', '月', '火', '水', '木', '金', '土'];
function fmtDate(ms, off) { const d = shifted(ms, off); return `${d.getUTCFullYear()}/${d.getUTCMonth() + 1}/${d.getUTCDate()}（${WD[d.getUTCDay()]}）`; }
function offOf(sp) { return sp.photos.find(p => p.off)?.off || null; }

$('fileInput').addEventListener('change', async e => { const f = e.target.files; await addFiles(f); e.target.value = ''; });
$('sampleBtn').addEventListener('click', loadSample);
$('sampleBtn2').addEventListener('click', loadSample);
$('clearBtn').addEventListener('click', clearTrip);
$('menuBtn').addEventListener('click', e => { e.stopPropagation(); $('menu').hidden = !$('menu').hidden; });
document.addEventListener('click', e => { if (!$('menu').hidden && !$('menu').contains(e.target)) closeMenu(); });

/* ---------------- Boot ---------------- */
(async function boot() {
  const [photos, meta] = await Promise.all([store.loadPhotos(), store.loadMeta()]);
  if (photos.length) {
    for (const p of photos) p.url = URL.createObjectURL(p.blob);
    S.photos = photos;
    S.overrides = meta.overrides || {};
    S.sample = !!meta.sample;
    rebuild(true);
  } else showView('welcome');
})();
