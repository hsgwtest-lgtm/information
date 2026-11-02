// Trip overview (the whole journey on the 3D map) and place visits (fly to one place and look at its photos).
import * as E from './engine.js';
import * as model from './model.js';
import { M } from './model.js';
import { icon } from './icons.js';
import { url, show, toast, prompt } from './ui.js';
import { esc, dotRange, stayLabel, km, clock, dayTitle, jpDate } from './fmt.js';
import { bounds } from './geo.js';

const $ = id => document.getElementById(id);
let hooks = {};
let mode = 'off';        // 'overview' | 'place' | 'off'
let placeIdx = 0;
let reelIdx = 0;

export function init(h) {
  hooks = h;
  $('tripBack').innerHTML = icon('back');
  $('tripEdit').innerHTML = icon('edit');
  $('placeBack').innerHTML = icon('back');
  $('placePrev').innerHTML = icon('back');
  $('placeNext').innerHTML = icon('next');
  $('playBtn').innerHTML = `${icon('play')}<span>この旅をたどる</span>`;
  $('tripBack').addEventListener('click', () => hooks.back());
  $('tripEdit').addEventListener('click', () => hooks.edit());
  $('playBtn').addEventListener('click', () => hooks.play());
  $('moments').addEventListener('click', e => {
    const b = e.target.closest('[data-i]');
    if (b) openPlace(Number(b.dataset.i));
  });
  $('placeBack').addEventListener('click', () => overview(true));
  $('placePrev').addEventListener('click', () => openPlace(placeIdx - 1));
  $('placeNext').addEventListener('click', () => openPlace(placeIdx + 1));
  $('placeName').addEventListener('click', renamePlace);
  $('reel').addEventListener('scroll', onReelScroll, { passive: true });
  $('starBtn').addEventListener('click', toggleStar);
  $('hideBtn').addEventListener('click', hidePhoto);
  E.on((type, n) => {
    if (type !== 'place' || mode === 'off' || n == null) return;
    openPlace(Number(n));
  });
  model.on(onModel);
}

/* ---------- Entering and leaving ---------- */
export async function open({ fresh = false } = {}) {
  mode = 'overview';
  E.setScreen('trip');
  drawMap();
  renderOverview();
  show($('trip'), true);
  show($('place'), false);
  await new Promise(r => requestAnimationFrame(r));
  flyOverview(fresh ? 3600 : 2800);
  model.enrich();
}

export function hide() {
  mode = 'off';
  show($('trip'), false);
  show($('place'), false);
  E.map.stop();
}

export function resume() {
  mode = 'overview';
  E.setScreen('trip');
  drawMap();
  renderOverview();
  show($('trip'), true);
  flyOverview(2000);
}

/* ---------- Model updates ---------- */
let redrawPending = false;
function onModel(type) {
  if (mode === 'off' || !M.r) return;
  if (type === 'analysis' || type === 'legs') {
    if (!redrawPending) {
      redrawPending = true;
      requestAnimationFrame(() => { redrawPending = false; drawMap(); renderStats(); });
    }
    if (type === 'analysis') { renderMoments(); if (mode === 'place') renderPlace(false); }
  }
  if (type === 'names') { drawPlaces(); if (mode === 'place') renderPlaceCaption(); }
  if (type === 'title') renderTitle();
  if (type === 'progress' || type === 'ready' || type === 'names') renderStatus();
}

/* ---------- Map ---------- */
function drawMap() {
  E.setRoute(M.r.moves, model.legsOf);
  drawPlaces();
}
function drawPlaces() {
  E.setPlaces(M.r.places, model.placeName);
}

function footInset() {
  const foot = mode === 'place' ? document.querySelector('.place-foot') : $('tripFoot');
  return Math.max(120, foot.getBoundingClientRect().height - 70);
}

export function overviewCamera() {
  const pts = M.r.places.map(p => [p.lon, p.lat]);
  for (const mv of M.r.moves) for (const l of model.legsOf(mv)) if (l.mode !== 'plane') pts.push(...l.coords);
  if (!pts.length) return null;
  const top = $('tripBack').getBoundingClientRect().bottom + 10;
  const flight = M.r.moves.some(m => m.mode === 'plane');
  return E.frame(bounds(M.r.places.length > 1 || pts.length > 1 ? pts : [[pts[0][0] - 0.01, pts[0][1] - 0.01], [pts[0][0] + 0.01, pts[0][1] + 0.01]]), {
    padding: { top: top + 20, bottom: footInset(), left: 36, right: 36 },
    pitch: flight ? 25 : 52, bearing: -18, maxZoom: 15.5,
  });
}

function flyOverview(duration = 2400) {
  const cam = overviewCamera();
  if (cam) E.fly(cam, { duration, curve: 1.5 });
}

function overview(animate) {
  mode = 'overview';
  E.map.stop();
  show($('place'), false);
  show($('trip'), true);
  renderOverview();
  if (animate) flyOverview(2200);
}

/* ---------- Overview UI ---------- */
function renderOverview() {
  renderTitle();
  renderStats();
  renderStatus();
  renderMoments();
  $('playBtn').disabled = M.r.places.length === 0;
}
function renderTitle() {
  $('tripTitle').textContent = M.trip.title;
}
function renderStats() {
  const s = M.trip.stats;
  if (!s?.start) {
    $('tripDates').textContent = '';
    $('tripStats').textContent = '地図に置ける写真がありません。編集から写真を追加できます';
    return;
  }
  $('tripDates').textContent = `${dotRange(s.start, s.end, s.off)}　${stayLabel(s.days)}`;
  $('tripStats').textContent = `${s.places}か所 · 写真${s.photos}枚${s.km >= 0.5 ? ` · ${km(s.km)}` : ''}`;
}
function renderStatus() {
  const b = M.busy;
  let t = '';
  if (b.routes) t = `道のりを描いています ${b.routes.done + 1} / ${b.routes.total}`;
  else if (b.spots) t = '駅や名所を調べています';
  else if (b.names) t = '地名を調べています';
  $('tripStatus').innerHTML = t ? `<span class="spin"></span><span>${esc(t)}</span>` : '';
}
function renderMoments() {
  let html = '';
  let day = -1;
  for (const p of M.r.places) {
    if (p.day !== day && M.r.days.length > 1) { day = p.day; html += `<span class="m-day">${dayTitle(p.day)}</span>`; }
    const ph = p.highlights.find(x => x.thumb) || p.photos.find(x => x.thumb);
    html += `<button type="button" class="m-item" role="listitem" data-i="${p.idx}" aria-label="${esc(model.placeName(p))}">
      ${ph ? `<img src="${url(ph.thumb)}" alt="" loading="lazy">` : ''}<b>${p.idx + 1}</b></button>`;
  }
  $('moments').innerHTML = html;
}

/* ---------- Place visit ---------- */
export function openPlace(i) {
  if (!M.r.places.length) return;
  placeIdx = Math.max(0, Math.min(M.r.places.length - 1, i));
  if (mode !== 'place') {
    mode = 'place';
    show($('trip'), false);
    show($('place'), true);
  }
  renderPlace(true);
  requestAnimationFrame(() => visitCamera(M.r.places[placeIdx]));
}

function visitCamera(p) {
  E.map.stop();
  const bottom = footInset();
  const bearing = E.map.getBearing() - 25;
  E.map.flyTo({ center: [p.lon, p.lat], zoom: 16.4, pitch: 62, bearing, duration: 2600, curve: 1.6, essential: true,
    padding: { top: 60, bottom, left: 0, right: 0 } });
  E.map.once('moveend', () => {
    if (mode !== 'place' || M.r.places[placeIdx] !== p) return;
    // A slow orbit; any touch on the map stops it.
    E.map.easeTo({ bearing: E.map.getBearing() - 70, duration: 60000, easing: t => t, essential: true, padding: { top: 60, bottom, left: 0, right: 0 } });
  });
}

function renderPlace(resetReel) {
  const p = M.r.places[placeIdx];
  if (!p) { overview(true); return; }
  $('placeCount').textContent = `${placeIdx + 1} / ${M.r.places.length}`;
  $('placePrev').disabled = placeIdx === 0;
  $('placeNext').disabled = placeIdx === M.r.places.length - 1;
  renderPlaceCaption();
  const hl = new Set(p.highlights.map(x => x.id));
  $('reel').innerHTML = p.photos.map((ph, k) => `
    <figure class="print" role="listitem" data-k="${k}">
      ${ph.full || ph.thumb ? `<img src="${url(ph.full || ph.thumb)}" alt="" loading="lazy" decoding="async">` : ''}
      ${hl.has(ph.id) ? `<span class="flag">${icon(M.trip.stars?.[ph.id] ? 'starOn' : 'play')}</span>` : ''}
    </figure>`).join('');
  if (resetReel) { reelIdx = 0; $('reel').scrollLeft = 0; }
  else reelIdx = Math.min(reelIdx, p.photos.length - 1);
  renderTools();
}

function renderPlaceCaption() {
  const p = M.r.places[placeIdx];
  if (!p) return;
  const multi = M.r.days.length > 1;
  const time = p.end - p.start >= 60000 ? `${clock(p.start, p.off)} – ${clock(p.end, p.off)}` : clock(p.start, p.off);
  $('placeWhen').textContent = `${multi ? dayTitle(p.day) + '　' : jpDate(p.start, p.off) + '　'}${time}`;
  $('placeName').textContent = model.placeName(p);
  $('placeSub').textContent = model.placeSub(p);
}

function onReelScroll() {
  const reel = $('reel');
  const mid = reel.scrollLeft + reel.clientWidth / 2;
  let best = 0, bestD = Infinity;
  [...reel.children].forEach((c, k) => {
    const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
    if (d < bestD) { bestD = d; best = k; }
  });
  if (best !== reelIdx) { reelIdx = best; renderTools(); }
}

function currentPhoto() {
  return M.r.places[placeIdx]?.photos[reelIdx] || null;
}

function renderTools() {
  const p = M.r.places[placeIdx];
  const ph = currentPhoto();
  $('reelCount').textContent = p ? `${reelIdx + 1} / ${p.photos.length}` : '';
  const starred = !!(ph && M.trip.stars?.[ph.id]);
  $('starBtn').innerHTML = `${icon(starred ? 'starOn' : 'star')}<span>再生で必ず見せる</span>`;
  $('starBtn').classList.toggle('on', starred);
  $('hideBtn').innerHTML = `${icon('eyeOff')}<span>旅から外す</span>`;
}

function toggleStar() {
  const ph = currentPhoto();
  if (!ph) return;
  if (M.trip.stars[ph.id]) delete M.trip.stars[ph.id]; else M.trip.stars[ph.id] = true;
  model.recompute();
  model.saveSoon();
  renderPlace(false);
}

function hidePhoto() {
  const ph = currentPhoto();
  if (!ph) return;
  const p = M.r.places[placeIdx];
  const key = p.key;
  M.trip.exclusions[ph.id] = 'out';
  delete M.trip.stars[ph.id];
  model.recompute();
  model.saveSoon();
  toast('この写真を旅から外しました', {
    action: '元に戻す',
    onAction: () => { delete M.trip.exclusions[ph.id]; model.recompute(); model.saveSoon(); },
  });
  // The place may have moved or disappeared; follow it by key.
  const again = M.r.places.findIndex(x => x.key === key);
  if (again >= 0) { placeIdx = again; renderPlace(false); }
  else if (M.r.places.length) openPlace(Math.min(placeIdx, M.r.places.length - 1));
  else overview(true);
}

async function renamePlace() {
  const p = M.r.places[placeIdx];
  if (!p) return;
  const name = await prompt({ title: '場所の名前', value: model.placeName(p), placeholder: '空にすると自動の名前に戻ります' });
  if (name == null) return;
  if (name) M.trip.names[p.key] = name; else delete M.trip.names[p.key];
  model.saveSoon();
  renderPlaceCaption();
  drawPlaces();
}

export const isOpen = () => mode !== 'off';
export function refresh() { if (mode === 'overview') renderOverview(); }
