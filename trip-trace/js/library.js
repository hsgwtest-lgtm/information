// Library: the globe with every saved trip, and a deck of trip cards.
import * as db from './db.js';
import * as E from './engine.js';
import { icon } from './icons.js';
import { url, choose, prompt, confirm, toast, show } from './ui.js';
import { esc, dotRange, stayLabel, km } from './fmt.js';

const $ = id => document.getElementById(id);
const el = $('library');
let trips = [];
let focusId = null;
let hooks = {};
let scrollTimer = 0;

export function init(h) {
  hooks = h;
  $('libAdd').innerHTML = icon('plus');
  $('libAdd').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $('pickNew').click(); } });
  $('sampleBtn').addEventListener('click', () => hooks.sample());
  $('deck').addEventListener('scroll', () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(pickFocus, 120); }, { passive: true });
  $('deck').addEventListener('click', onDeckClick);
  E.on((type, id) => {
    if (type !== 'trip' || el.hidden) return;
    const card = $('deck').querySelector(`[data-id="${CSS.escape(id)}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
}

export async function open({ focus = null, from = null } = {}) {
  trips = await db.trips();
  focusId = focus || trips[0]?.id || null;
  E.setScreen('library');
  render();
  show(el, true);
  E.setGlobeTrips(trips, focusId);
  const t = trips.find(x => x.id === focusId);
  if (t?.stats?.center) {
    E.fly(globeCam(t), { duration: from === 'trip' ? 2600 : 2000 });
  } else {
    E.fly({ center: [137.5, 34.5], zoom: 1.5, pitch: 0, bearing: 0 }, { duration: 1600 });
  }
  E.holdSpin(5000);
}
export function close() { show(el, false); }

function globeCam(t) {
  const span = t.stats.spanKm || 50;
  const zoom = Math.max(2.2, Math.min(4.6, 6.6 - Math.log2(Math.max(span, 1)) * 0.55));
  return { center: t.stats.center, zoom, pitch: 0, bearing: 0 };
}

function card(t) {
  const s = t.stats || {};
  const cover = t.cover ? `style="background-image:url('${url(t.cover)}')"` : '';
  const dates = s.start ? `${dotRange(s.start, s.end, s.off)}　${stayLabel(s.days)}` : '位置情報のある写真なし';
  const stats = s.places ? `${s.places}か所 · 写真${s.photos}枚${s.km >= 1 ? ` · ${km(s.km)}` : ''}` : '';
  return `
    <article class="card" role="listitem" data-id="${esc(t.id)}" ${cover}>
      <button type="button" class="card-open" aria-label="${esc(t.title)}をひらく"></button>
      <div class="card-body">
        <div class="eyebrow">${esc(dates)}</div>
        <div class="card-title">${esc(t.title)}</div>
        <div class="card-stats">${esc(stats)}</div>
      </div>
      <button type="button" class="round card-more" data-more aria-label="${esc(t.title)}のメニュー">${icon('dots')}</button>
    </article>`;
}

function render() {
  const has = trips.length > 0;
  $('libEmpty').hidden = has;
  $('libAdd').hidden = !has;
  $('deck').hidden = !has;
  if (!has) return;
  const sample = trips.some(t => t.sample) ? '' : '<button type="button" class="sample" data-sample>サンプルの旅を追加</button>';
  $('deck').innerHTML = trips.map(card).join('') + `
    <label class="card add" for="pickNew" role="listitem">
      <span class="plus">${icon('plus')}</span>
      <b>新しい旅</b>
      <span>旅行の写真を選んでください</span>
      ${sample}
    </label>`;
  const i = Math.max(0, trips.findIndex(t => t.id === focusId));
  requestAnimationFrame(() => {
    const c = $('deck').children[i];
    if (c) $('deck').scrollLeft = c.offsetLeft - ($('deck').clientWidth - c.offsetWidth) / 2;
    markFocus();
  });
}

function centered() {
  const deck = $('deck');
  const mid = deck.scrollLeft + deck.clientWidth / 2;
  let best = null, bestD = Infinity;
  for (const c of deck.children) {
    const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
    if (d < bestD) { bestD = d; best = c; }
  }
  return best;
}
function markFocus() {
  const c = centered();
  for (const x of $('deck').children) x.classList.toggle('focus', x === c);
  return c;
}
function pickFocus() {
  const c = markFocus();
  const id = c?.dataset.id;
  if (!id || id === focusId) return;
  focusId = id;
  E.setGlobeTrips(trips, focusId);
  const t = trips.find(x => x.id === id);
  if (t?.stats?.center) E.fly(globeCam(t), { duration: 1700 });
  E.holdSpin(6000);
}

async function onDeckClick(e) {
  if (e.target.closest('[data-sample]')) { e.preventDefault(); hooks.sample(); return; }
  const c = e.target.closest('.card[data-id]');
  if (!c) return;
  const id = c.dataset.id;
  if (e.target.closest('[data-more]')) { menu(id); return; }
  if (!c.classList.contains('focus')) { c.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); return; }
  hooks.openTrip(id);
}

async function menu(id) {
  const t = trips.find(x => x.id === id);
  if (!t) return;
  const v = await choose({ title: t.title, options: [{ label: 'ひらく', value: 'open' }, { label: '名前を変える', value: 'rename' }, { label: 'この旅を削除', value: 'delete', danger: true }] });
  if (v === 'open') hooks.openTrip(id);
  if (v === 'rename') {
    const name = await prompt({ title: '旅の名前', value: t.title });
    if (name) { t.title = name; t.titleAuto = false; await db.saveTrip(t); render(); }
  }
  if (v === 'delete') {
    const ok = await confirm({ title: `「${t.title}」を削除しますか？`, body: 'この旅の写真と編集内容がこの端末から消えます。写真アプリの元の写真は消えません。', ok: '削除', danger: true });
    if (!ok) return;
    await db.removeTrip(id);
    trips = trips.filter(x => x.id !== id);
    focusId = trips[0]?.id || null;
    E.setGlobeTrips(trips, focusId);
    render();
    toast('削除しました');
  }
}
