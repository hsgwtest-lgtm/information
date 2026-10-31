// Trip view: map with spots and routes, bottom-sheet timeline, editing (modes, stars, exclusions, names).
import * as db from './db.js';
import { analyze, MODES, MODE_LIST, travelHours } from './analyze.js';
import { buildLegs, draftLegs, legSummary } from './legs.js';
import * as services from './services.js';
import { map, STYLES, setStyle, resolveStyle, currentStyle, fitTo, flyToVisible } from './mapview.js';
import { importFiles } from './trips.js';
import { actionSheet, confirmDialog, promptDialog, openPanel, toast, urlOf, revokeUrls } from './ui.js';
import { esc, fmtClock, fmtDate, fmtKm, fmtDur, fmtRange } from './fmt.js';
import * as replay from './replay.js';

const $ = id => document.getElementById(id);
export const DAY_COLORS = ['#14b8a6', '#ec4899', '#f59e0b', '#3b82f6', '#8b5cf6', '#f97316', '#22c55e'];
const dayColor = d => DAY_COLORS[d % DAY_COLORS.length];

const V = {
  trip: null, photos: [], result: null,
  legs: new Map(), places: {}, areas: {}, placesTried: new Set(),
  token: 0, routeLayer: null, spotLayer: null, segLayers: new Map(), panel: null, saveTimer: 0,
};
let onBack = () => {};

/* ---------------- Setup ---------------- */
export function init(opts) {
  onBack = opts.onBack;
  V.routeLayer = L.layerGroup().addTo(map);
  V.spotLayer = L.layerGroup().addTo(map);
  $('backBtn').addEventListener('click', close);
  $('titleBtn').addEventListener('click', rename);
  $('styleBtn').addEventListener('click', chooseStyle);
  $('menuBtn').addEventListener('click', menu);
  $('playBtn').addEventListener('click', play);
  $('addInput').addEventListener('change', addPhotos);
  $('timeline').addEventListener('click', onTimelineClick);
  $('peekInfo').addEventListener('click', () => setSheet($('sheet').dataset.state === 'open' ? 'peek' : 'open'));
  setupSheet();
  const zoomClass = () => {
    const z = map.getZoom(), el = map.getContainer();
    el.classList.toggle('z-far', z < 12);
    el.classList.toggle('z-mid', z >= 12 && z < 14.5);
  };
  map.on('zoomend', zoomClass);
  zoomClass();
}

export async function open(id, opts = {}) {
  V.trip = await db.getTrip(id);
  if (!V.trip) { toast('旅が見つかりませんでした'); onBack(); return; }
  V.photos = await db.getPhotos(id);
  V.legs.clear(); V.places = {}; V.areas = {}; V.placesTried.clear();
  setSheet('peek');
  renderTitle();
  await recompute({ fit: true });
}

function close() {
  replay.stop();
  V.token++;
  V.panel?.close();
  V.routeLayer.clearLayers(); V.spotLayer.clearLayers(); V.segLayers.clear();
  flushSave();
  revokeUrls();
  onBack();
}

/* ---------------- Analysis pipeline ---------------- */
const stationMap = () => {
  const m = {};
  for (const [k, v] of Object.entries(V.places)) m[k] = v ? v.station : null;
  return m;
};
const legKey = seg => `${seg.key}|${seg.mode}|${seg.stationFrom?.name || ''}|${seg.stationTo?.name || ''}`;
const legsOf = seg => V.legs.get(legKey(seg));
const spotOf = i => V.result.spots[i];

async function recompute({ fit = false } = {}) {
  const token = ++V.token;
  V.result = analyze(V.photos, V.trip, stationMap());
  // Apply whatever is already cached on the device before the first paint.
  const spots = V.result.spots;
  const unknown = spots.filter(s => !(s.key in V.places));
  if (unknown.length) {
    const cached = await services.cachedPlaces(unknown);
    if (token !== V.token) return;
    if (Object.keys(cached).length) {
      Object.assign(V.places, cached);
      V.result = analyze(V.photos, V.trip, stationMap());
    }
  }
  for (const s of V.result.spots) {
    if (s.key in V.areas) continue;
    const a = await services.cachedArea(s.lat, s.lon);
    if (token !== V.token) return;
    if (a) V.areas[s.key] = a;
  }
  applyStyle();
  renderAll();
  if (fit) fitAll(false);
  queueSave();
  enrich(token);
}

async function enrich(token) {
  const spots = V.result.spots;
  if (!spots.length) return;
  fetchAreas(token);
  const missing = spots.filter(s => !(s.key in V.places) && !V.placesTried.has(s.key));
  let placesJob = null;
  if (missing.length) {
    missing.forEach(s => V.placesTried.add(s.key));
    setBusy('駅や名所を調べています…');
    placesJob = services.places(missing);
  }
  const stationsKnown = seg => (spotOf(seg.from).key in V.places) && (spotOf(seg.to).key in V.places);
  await buildRoutes(token, seg => seg.forced || seg.mode === 'walk' || seg.mode === 'plane' || stationsKnown(seg));
  if (token !== V.token) return;
  if (placesJob) {
    const got = await placesJob;
    if (token !== V.token) return;
    Object.assign(V.places, got);
    if (Object.keys(got).length < missing.length) toast('一部の駅・名所を調べられませんでした。距離から推定しています');
    V.result = analyze(V.photos, V.trip, stationMap());
    renderAll();
  }
  await buildRoutes(token, () => true);
  if (token !== V.token) return;
  setBusy('');
  queueSave();
}

async function buildRoutes(token, filter) {
  const segs = V.result.segments.filter(s => filter(s) && !legsOf(s));
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    setBusy(`経路を描いています… ${i + 1} / ${segs.length}`);
    const legs = await buildLegs(seg, spotOf(seg.from), spotOf(seg.to));
    if (token !== V.token) return;
    V.legs.set(legKey(seg), legs);
    const cur = V.result.segments[seg.idx];
    if (cur && legKey(cur) === legKey(seg)) { drawSegment(cur); updateSegRow(cur); }
  }
  renderPeek();
}

async function fetchAreas(token) {
  for (const s of V.result.spots) {
    if (s.key in V.areas) continue;
    const a = await services.area(s.lat, s.lon);
    if (token !== V.token) return;
    V.areas[s.key] = a;
    updateSpotName(s.idx);
  }
  autoTitle();
}

/* ---------------- Names, stats, saving ---------------- */
function areaLabel(a) {
  if (!a) return null;
  if (a.area && a.city && a.area !== a.city) return `${a.city} ${a.area}`;
  return a.area || a.city || null;
}
export function spotName(s) {
  return V.trip.spotNames?.[s.key] || V.places[s.key]?.landmark || areaLabel(V.areas[s.key]) || `スポット ${s.idx + 1}`;
}

function autoTitle() {
  if (!V.trip.titleAuto) return;
  const count = {};
  for (const s of V.result.spots) {
    const c = V.areas[s.key]?.city;
    if (c) count[c] = (count[c] || 0) + s.photos.length;
  }
  const top = Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 2).map(e => e[0]);
  if (!top.length) return;
  V.trip.title = top.join('・');
  renderTitle();
  queueSave();
}

function totalKm() {
  return V.result.segments.reduce((s, seg) => s + (legsOf(seg) ? legSummary(legsOf(seg)).km : seg.km), 0);
}

function queueSave() {
  const r = V.result, t = V.trip;
  t.stats = r.spots.length
    ? { start: r.spots[0].start, end: r.spots[r.spots.length - 1].end, off: r.spots[0].off, days: r.days.length, spots: r.spots.length, photos: r.used, km: totalKm() }
    : { start: null, end: null, days: 0, spots: 0, photos: 0, km: 0 };
  const big = [...r.spots].sort((a, b) => b.photos.length - a.photos.length)[0];
  const cp = big?.highlights.find(p => p.full || p.thumb) || big?.photos.find(p => p.full || p.thumb);
  t.cover = cp ? (cp.full || cp.thumb) : null;
  clearTimeout(V.saveTimer);
  V.saveTimer = setTimeout(flushSave, 400);
}
function flushSave() {
  clearTimeout(V.saveTimer);
  if (V.trip) db.putTrip(V.trip);
}

/* ---------------- Map ---------------- */
function applyStyle() {
  const key = resolveStyle(V.trip.mapStyle, V.result.spots);
  if (key !== currentStyle()) setStyle(key);
}

export function insets() {
  const top = $('tripTop').getBoundingClientRect().bottom;
  return { top, bottom: window.innerHeight - $('sheet').getBoundingClientRect().top };
}

function fitAll(animate = true) {
  const pts = V.result.spots.map(s => [s.lat, s.lon]);
  if (!pts.length) return;
  for (const seg of V.result.segments) for (const l of legsOf(seg) || []) if (l.mode !== 'plane') pts.push(...l.coords);
  fitTo(L.latLngBounds(pts), insets(), 16, animate);
}

const DASH = { train: '10 7', boat: '2 9', plane: '12 10' };
function drawSegment(seg) {
  V.segLayers.get(seg.idx)?.remove();
  const from = spotOf(seg.from), to = spotOf(seg.to);
  const legs = legsOf(seg) || draftLegs(seg, from, to);
  const g = L.layerGroup();
  for (const l of legs) {
    const color = MODES[l.mode].color;
    L.polyline(l.coords, { color: '#ffffff', weight: 8, opacity: l.draft ? 0.45 : 0.92, lineCap: 'round', lineJoin: 'round', interactive: false, className: 'route-casing' }).addTo(g);
    L.polyline(l.coords, {
      color, weight: 4.5, opacity: l.draft ? 0.75 : 1, lineCap: 'round', lineJoin: 'round', className: 'route-line',
      dashArray: l.draft ? '2 9' : DASH[l.mode] || null,
    }).addTo(g).on('click', () => editSegment(seg.idx));
  }
  g.addTo(V.routeLayer);
  V.segLayers.set(seg.idx, g);
}

function drawSpot(s) {
  const p = s.highlights.find(x => x.thumb) || s.photos.find(x => x.thumb);
  const img = p ? `<img src="${urlOf(p.thumb)}" alt="">` : '<span class="pin-noimg"></span>';
  L.marker([s.lat, s.lon], {
    icon: L.divIcon({ className: 'pin-wrap', html: `<div class="pin" style="--c:${dayColor(s.day)}">${img}<b>${s.idx + 1}</b></div>`, iconSize: [46, 46], iconAnchor: [23, 23] }),
    keyboard: false, riseOnHover: true,
  }).addTo(V.spotLayer).on('click', () => openSpot(s.idx));
}

function renderMap() {
  V.routeLayer.clearLayers(); V.spotLayer.clearLayers(); V.segLayers.clear();
  V.result.segments.forEach(drawSegment);
  V.result.spots.forEach(drawSpot);
}

/* ---------------- Sheet ---------------- */
function setupSheet() {
  const sheet = $('sheet'), grip = $('grip');
  let drag = null;
  const peekH = () => sheet.querySelector('.peek').offsetTop + sheet.querySelector('.peek').offsetHeight + parseFloat(getComputedStyle(sheet).paddingBottom);
  grip.addEventListener('pointerdown', e => {
    drag = { y: e.clientY, h: sheet.getBoundingClientRect().height, moved: false };
    sheet.style.transition = 'none';
    grip.setPointerCapture(e.pointerId);
  });
  grip.addEventListener('pointermove', e => {
    if (!drag) return;
    const dy = drag.y - e.clientY;
    if (Math.abs(dy) > 6) drag.moved = true;
    const max = window.innerHeight * 0.86;
    sheet.style.height = `${Math.max(peekH(), Math.min(max, drag.h + dy))}px`;
  });
  const end = () => {
    if (!drag) return;
    const h = sheet.getBoundingClientRect().height;
    const wasOpen = sheet.dataset.state === 'open';
    sheet.style.transition = '';
    sheet.style.height = '';
    if (!drag.moved) setSheet(wasOpen ? 'peek' : 'open');
    else setSheet(h > peekH() + 120 ? 'open' : 'peek');
    drag = null;
  };
  grip.addEventListener('pointerup', end);
  grip.addEventListener('pointercancel', end);
  grip.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSheet(sheet.dataset.state === 'open' ? 'peek' : 'open'); } });
}
function setSheet(state) {
  $('sheet').dataset.state = state;
  $('grip').setAttribute('aria-expanded', String(state === 'open'));
}
function setBusy(text) {
  $('busy').textContent = text;
  $('busy').hidden = !text;
}

function renderPeek() {
  const r = V.result;
  if (!r.spots.length) {
    $('peekRange').textContent = '位置情報のある写真がありません';
    $('peekStats').textContent = `${V.photos.length}枚の写真`;
  } else {
    const first = r.spots[0], last = r.spots[r.spots.length - 1];
    $('peekRange').textContent = `${fmtRange(first.start, last.end, first.off)}${r.days.length > 1 ? ` · ${r.days.length}日間` : ''}`;
    $('peekStats').textContent = `${r.spots.length}スポット · ${r.used}枚 · 移動 ${fmtKm(totalKm())}`;
  }
  $('playBtn').disabled = r.spots.length === 0;
}

function segRow(seg) {
  const legs = legsOf(seg);
  const sum = legs ? legSummary(legs) : null;
  const main = sum?.main || seg.mode;
  const km = sum ? sum.km : seg.km;
  const icons = (sum ? sum.seq : [seg.mode]).map(m => MODES[m].icon).join('');
  const label = MODES[main].label + (sum?.train ? `（${sum.train}）` : '');
  const sub = [`${fmtKm(km)}`, `約${fmtDur(sum ? sum.hours : travelHours(main, km))}`, seg.forced ? '手動で変更' : '', sum?.note || '', legs ? '' : '経路を取得中'].filter(Boolean).join(' · ');
  return `<button type="button" class="tl-seg" data-act="seg" data-i="${seg.idx}" style="--c:${MODES[main].color}">
    <span class="tl-seg-ic" aria-hidden="true">${icons}</span>
    <span class="tl-seg-txt"><b>${esc(label)}</b><small>${esc(sub)}</small></span>
    <span class="tl-seg-edit">変更</span></button>`;
}

function spotRow(s) {
  const time = s.end - s.start >= 60000 ? `${fmtClock(s.start, s.off)}–${fmtClock(s.end, s.off)}` : fmtClock(s.start, s.off);
  const thumbs = s.highlights.slice(0, 5).map(p => p.thumb
    ? `<img src="${urlOf(p.thumb)}" alt="" loading="lazy" data-act="photo" data-spot="${s.idx}" data-id="${esc(p.id)}">` : '').join('');
  const more = s.photos.length - Math.min(5, s.highlights.length);
  return `<div class="tl-spot">
    <button type="button" class="tl-spot-head" data-act="spot" data-i="${s.idx}">
      <span class="tl-num" style="--c:${dayColor(s.day)}">${s.idx + 1}</span>
      <span class="tl-spot-txt"><b data-name="${s.idx}">${esc(spotName(s))}</b><small>${time} · 写真${s.photos.length}枚</small></span>
      <span class="tl-chev" aria-hidden="true">›</span>
    </button>
    <div class="tl-thumbs">${thumbs}${more > 0 ? `<button type="button" class="tl-more" data-act="spot" data-i="${s.idx}">+${more}</button>` : ''}</div>
  </div>`;
}

function renderTimeline() {
  const r = V.result;
  let html = '';
  if (!r.spots.length) {
    html += `<div class="tl-empty"><b>地図に置ける写真がありません</b><p>写真に位置情報が入っていない可能性があります。iPhoneでは写真を選ぶ画面の「オプション」で「位置情報」をオンにしてから選んでください。</p></div>`;
  }
  for (const day of r.days) {
    html += `<div class="tl-day" style="--c:${dayColor(day.index)}"><span class="tl-day-dot"></span><b>${day.index + 1}日目</b><span>${fmtDate(day.start, day.off)}</span></div>`;
    for (const s of r.spots.filter(x => x.day === day.index)) {
      if (s.idx > 0) html += segRow(r.segments[s.idx - 1]);
      html += spotRow(s);
    }
  }
  html += '<div class="tl-extra">';
  if (r.excluded.length) html += `<button type="button" class="tl-x" data-act="excluded"><span>除外した写真 <b>${r.excluded.length}</b>枚</span><small>外れ値として自動で外したもの・手動で外したもの</small></button>`;
  if (r.unplaced.length) html += `<button type="button" class="tl-x" data-act="unplaced"><span>地図に置けない写真 <b>${r.unplaced.length}</b>枚</span><small>位置情報や撮影日時がない写真</small></button>`;
  html += `<button type="button" class="tl-x add" data-act="add"><span>＋ 写真を追加</span></button></div>`;
  $('timeline').innerHTML = html;
}

function renderAll() {
  renderMap();
  renderPeek();
  renderTimeline();
}

function updateSegRow(seg) {
  const el = $('timeline').querySelector(`.tl-seg[data-i="${seg.idx}"]`);
  if (el) el.outerHTML = segRow(seg);
}
function updateSpotName(i) {
  const s = spotOf(i);
  const el = $('timeline').querySelector(`[data-name="${i}"]`);
  if (s && el) el.textContent = spotName(s);
}
function renderTitle() { $('titleBtn').textContent = V.trip.title; }

function onTimelineClick(e) {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  const act = b.dataset.act;
  if (act === 'seg') editSegment(Number(b.dataset.i));
  else if (act === 'spot') openSpot(Number(b.dataset.i));
  else if (act === 'photo') {
    const s = spotOf(Number(b.dataset.spot));
    const list = s.photos;
    openViewer(list, Math.max(0, list.findIndex(p => p.id === b.dataset.id)));
  }
  else if (act === 'excluded') openExcluded();
  else if (act === 'unplaced') openUnplaced();
  else if (act === 'add') $('addInput').click();
}

/* ---------------- Editing ---------------- */
async function save() { flushSave(); }

async function editSegment(i) {
  const seg = V.result.segments[i];
  if (!seg) return;
  const from = spotOf(seg.from), to = spotOf(seg.to);
  const v = await actionSheet({
    title: `${spotName(from)} → ${spotName(to)}`,
    message: `直線距離 ${fmtKm(seg.km)} ・ 自動の推定: ${MODES[seg.auto].label}（${seg.reason}）`,
    options: [
      ...MODE_LIST.map(m => ({ label: `${MODES[m].icon}  ${MODES[m].label}`, value: m, checked: seg.mode === m, sub: m === seg.auto ? '自動の推定' : '' })),
      ...(seg.forced ? [{ label: '自動の推定に戻す', value: 'auto' }] : []),
    ],
  });
  if (!v || (v === seg.mode && !seg.forced)) return;
  if (v === 'auto' || v === seg.auto) delete V.trip.modes[seg.key];
  else V.trip.modes[seg.key] = v;
  await save();
  recompute();
}

async function rename() {
  const name = await promptDialog({ title: '旅の名前', value: V.trip.title });
  if (!name) return;
  V.trip.title = name;
  V.trip.titleAuto = false;
  renderTitle();
  await save();
}

async function chooseStyle() {
  const cur = V.trip.mapStyle || 'auto';
  const v = await actionSheet({
    title: '地図の種類',
    options: [
      { label: '自動', sub: '日本国内は淡色、海外は標準', value: 'auto', checked: cur === 'auto' },
      ...Object.entries(STYLES).map(([k, s]) => ({ label: s.label, sub: s.sub, value: k, checked: cur === k })),
    ],
  });
  if (!v) return;
  V.trip.mapStyle = v;
  applyStyle();
  await save();
}

async function menu() {
  const t = V.trip, r = V.result;
  const hl = { 1: '1枚', 3: '3枚', 5: '5枚', 0: 'すべて' }[t.highlightCount ?? 3] || `${t.highlightCount}枚`;
  const rad = { 100: '狭い', 200: '標準', 400: '広い' }[t.spotRadiusM || 200] || '標準';
  const v = await actionSheet({
    title: t.title,
    options: [
      { label: '写真を追加', value: 'add' },
      { label: '旅の名前を変更', value: 'rename' },
      { label: '再生で見せる写真', sub: `各スポット ${hl}（★を付けた写真は必ず表示）`, value: 'hl' },
      { label: 'スポットのまとめ方', sub: `${rad}（近い写真を1か所にまとめる範囲）`, value: 'radius' },
      { label: `除外した写真（${r.excluded.length}枚）`, value: 'excluded' },
      { label: 'この旅を削除', value: 'delete', danger: true },
    ],
  });
  if (v === 'add') $('addInput').click();
  if (v === 'rename') rename();
  if (v === 'excluded') openExcluded();
  if (v === 'hl') {
    const n = await actionSheet({
      title: '再生で見せる写真（各スポット）',
      options: [1, 3, 5, 0].map(k => ({ label: k ? `${k}枚まで` : 'すべて', value: String(k), checked: (t.highlightCount ?? 3) === k })),
    });
    if (n != null) { t.highlightCount = Number(n); await save(); recompute(); }
  }
  if (v === 'radius') {
    const n = await actionSheet({
      title: 'スポットのまとめ方',
      message: '近くで撮った写真を1つのスポットにまとめる範囲です',
      options: [[100, '狭い（100m）'], [200, '標準（200m）'], [400, '広い（400m）']].map(([k, l]) => ({ label: l, value: String(k), checked: (t.spotRadiusM || 200) === k })),
    });
    if (n != null) { t.spotRadiusM = Number(n); await save(); recompute({ fit: true }); }
  }
  if (v === 'delete') {
    const ok = await confirmDialog({ title: `「${t.title}」を削除しますか？`, message: 'この旅の写真と編集内容が端末から消えます。写真アプリの元の写真は消えません。', ok: '削除', danger: true });
    if (ok) { await db.deleteTrip(t.id); V.trip = null; toast('削除しました'); close(); }
  }
}

async function addPhotos(e) {
  const files = e.target.files;
  if (!files?.length) return;
  const res = await importFiles(V.trip, files);
  e.target.value = '';
  V.photos = await db.getPhotos(V.trip.id);
  toast(res.added ? `${res.added}枚を追加しました` : '新しい写真はありませんでした');
  recompute({ fit: true });
}

/* ---------------- Spot detail ---------------- */
function openSpot(i) {
  const s = spotOf(i);
  if (!s) return;
  const key = s.key;
  const panel = openPanel({
    title: spotName(s), sub: '',
    actionsHtml: '<button type="button" class="btn ghost sm" data-a="rename">名前</button><button type="button" class="btn ghost sm" data-a="map">地図</button>',
    onClose: () => { if (V.panel === panel) V.panel = null; },
  });
  V.panel = panel;
  const draw = () => {
    const cur = V.result.spots.find(x => x.key === key);
    if (!cur) { panel.close(); return; }
    const hl = new Set(cur.highlights.map(p => p.id));
    const n = V.trip.highlightCount ?? 3;
    panel.setTitle(spotName(cur), `${fmtDate(cur.start, cur.off)} ${fmtClock(cur.start, cur.off)}–${fmtClock(cur.end, cur.off)} · 写真${cur.photos.length}枚`);
    panel.body.innerHTML = `
      <p class="note">再生では <span class="chip-hl">▶</span> の写真を表示します（${n ? `${n}枚まで` : 'すべて'}）。写真を開いて ★ を付けると必ず表示されます。</p>
      <div class="grid">${cur.photos.map((p, k) => `
        <button type="button" class="tile${hl.has(p.id) ? ' hl' : ''}" data-k="${k}">
          ${p.thumb ? `<img src="${urlOf(p.thumb)}" alt="" loading="lazy">` : '<span class="tile-ph">画像なし</span>'}
          <span class="tile-t">${fmtClock(p.time, p.off || cur.off)}</span>
          ${hl.has(p.id) ? '<span class="tile-hl">▶</span>' : ''}
          ${V.trip.stars?.[p.id] ? '<span class="tile-star">★</span>' : ''}
          ${p.lat == null ? '<span class="tile-ng">位置なし</span>' : ''}
        </button>`).join('')}
      </div>`;
    panel.body.querySelectorAll('.tile').forEach(t => t.addEventListener('click', () => {
      const c = V.result.spots.find(x => x.key === key);
      openViewer(c.photos, Number(t.dataset.k), draw);
    }));
  };
  panel.refresh = draw;
  draw();
  panel.el.querySelector('[data-a="rename"]').addEventListener('click', async () => {
    const cur = V.result.spots.find(x => x.key === key);
    const name = await promptDialog({ title: 'スポットの名前', value: spotName(cur), placeholder: '空にすると自動の名前に戻ります' });
    if (name == null) return;
    if (name) V.trip.spotNames[key] = name; else delete V.trip.spotNames[key];
    await save();
    draw();
    updateSpotName(cur.idx);
  });
  panel.el.querySelector('[data-a="map"]').addEventListener('click', () => {
    const cur = V.result.spots.find(x => x.key === key);
    panel.close();
    setSheet('peek');
    requestAnimationFrame(() => flyToVisible([cur.lat, cur.lon], 17, insets()));
  });
}

/* ---------------- Photo viewer ---------------- */
function openViewer(list, index, onChange) {
  const photos = list.slice();
  let k = index;
  const wrap = document.createElement('div');
  wrap.className = 'ov ov-viewer';
  wrap.innerHTML = `
    <div class="vw" role="dialog" aria-label="写真">
      <div class="vw-top"><button type="button" class="icon-btn" data-a="close" aria-label="閉じる">✕</button><span class="vw-count"></span><span></span></div>
      <div class="vw-stage"><img alt=""><button type="button" class="vw-nav prev" data-a="prev" aria-label="前の写真">‹</button><button type="button" class="vw-nav next" data-a="next" aria-label="次の写真">›</button></div>
      <div class="vw-bottom">
        <div class="vw-meta"><b class="vw-time"></b><span class="vw-name"></span></div>
        <div class="vw-btns">
          <button type="button" class="btn ghost" data-a="star"></button>
          <button type="button" class="btn ghost" data-a="exclude">この写真を除外</button>
        </div>
      </div>
    </div>`;
  document.getElementById('layer').appendChild(wrap);
  requestAnimationFrame(() => wrap.classList.add('in'));
  const img = wrap.querySelector('img');
  const show = () => {
    const p = photos[k];
    img.src = urlOf(p.full || p.thumb);
    wrap.querySelector('.vw-count').textContent = `${k + 1} / ${photos.length}`;
    wrap.querySelector('.vw-time').textContent = p.time ? `${fmtDate(p.time, p.off)} ${fmtClock(p.time, p.off)}` : '日時なし';
    wrap.querySelector('.vw-name').textContent = p.lat == null ? '位置情報なし' : '';
    const starred = !!V.trip.stars?.[p.id];
    const b = wrap.querySelector('[data-a="star"]');
    b.textContent = starred ? '★ 再生で必ず見せる' : '☆ 再生で必ず見せる';
    b.classList.toggle('on', starred);
    wrap.querySelector('.prev').hidden = k === 0;
    wrap.querySelector('.next').hidden = k === photos.length - 1;
  };
  const closeV = () => { wrap.classList.remove('in'); setTimeout(() => wrap.remove(), 200); };
  wrap.addEventListener('click', async e => {
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (a === 'close') closeV();
    if (a === 'prev' && k > 0) { k--; show(); }
    if (a === 'next' && k < photos.length - 1) { k++; show(); }
    if (a === 'star') {
      const id = photos[k].id;
      if (V.trip.stars[id]) delete V.trip.stars[id]; else V.trip.stars[id] = true;
      await save();
      show();
      await recompute();
      onChange?.();
    }
    if (a === 'exclude') {
      const id = photos[k].id;
      V.trip.exclusions[id] = 'out';
      delete V.trip.stars[id];
      await save();
      photos.splice(k, 1);
      toast('除外しました。「除外した写真」からいつでも戻せます');
      await recompute();
      onChange?.();
      if (!photos.length) { closeV(); return; }
      k = Math.min(k, photos.length - 1);
      show();
    }
  });
  let sx = null;
  wrap.querySelector('.vw-stage').addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  wrap.querySelector('.vw-stage').addEventListener('touchend', e => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    sx = null;
    if (dx > 50 && k > 0) { k--; show(); }
    if (dx < -50 && k < photos.length - 1) { k++; show(); }
  });
  show();
}

/* ---------------- Excluded / unplaced ---------------- */
function openExcluded() {
  const panel = openPanel({ title: '除外した写真', sub: '' });
  const draw = () => {
    const items = V.result.excluded;
    panel.setTitle('除外した写真', `${items.length}枚`);
    if (!items.length) { panel.body.innerHTML = '<p class="note">除外した写真はありません。</p>'; return; }
    panel.body.innerHTML = `
      <p class="note">外れ値（撮影日が離れている、前後の写真から位置が大きく外れている、位置の誤差が大きい）は自動で地図から外しています。「戻す」で旅に入れ直せます。</p>
      <div class="xlist">${items.map(x => `
        <div class="xrow">
          ${x.photo.thumb ? `<img src="${urlOf(x.photo.thumb)}" alt="" loading="lazy">` : '<span class="tile-ph">画像なし</span>'}
          <div class="xrow-txt"><b>${esc(x.reason)}</b><small>${x.photo.time ? `${fmtDate(x.photo.time, x.photo.off, true)} ${fmtClock(x.photo.time, x.photo.off)}` : '日時なし'}${x.auto ? ' · 自動' : ''}</small></div>
          <button type="button" class="btn ghost sm" data-restore="${esc(x.photo.id)}" data-auto="${x.auto ? 1 : 0}">戻す</button>
        </div>`).join('')}</div>`;
  };
  panel.body.addEventListener('click', async e => {
    const b = e.target.closest('[data-restore]');
    if (!b) return;
    const id = b.dataset.restore;
    if (b.dataset.auto === '1') V.trip.exclusions[id] = 'in'; else delete V.trip.exclusions[id];
    await save();
    await recompute();
    draw();
    toast('旅に戻しました');
  });
  draw();
}

function openUnplaced() {
  const panel = openPanel({ title: '地図に置けない写真', sub: `${V.result.unplaced.length}枚` });
  panel.body.innerHTML = `
    <p class="note">位置情報がない写真は、前後45分以内に撮った写真があればそのスポットに入ります。それもない写真と、撮影日時がない写真（スクリーンショットや保存した画像など）はここに残ります。</p>
    <div class="xlist">${V.result.unplaced.map(x => `
      <div class="xrow">
        ${x.photo.thumb ? `<img src="${urlOf(x.photo.thumb)}" alt="" loading="lazy">` : '<span class="tile-ph">画像なし</span>'}
        <div class="xrow-txt"><b>${esc(x.reason)}</b><small>${esc(x.photo.name || '')}</small></div>
      </div>`).join('')}</div>`;
}

/* ---------------- Replay ---------------- */
function play() {
  if (!V.result.spots.length) return;
  V.panel?.close();
  setSheet('peek');
  replay.start({
    title: V.trip.title,
    result: V.result,
    legsOf: seg => legsOf(seg) || draftLegs(seg, spotOf(seg.from), spotOf(seg.to)),
    spotName,
    dayColor,
    onExit: () => {
      document.body.classList.remove('at-replay');
      $('tripView').hidden = false;
      requestAnimationFrame(() => fitAll(true));
    },
    onEnter: () => {
      document.body.classList.add('at-replay');
      $('tripView').hidden = true;
    },
  });
}
