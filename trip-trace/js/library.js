// Trip library: list of saved trips, create / rename / delete.
import * as db from './db.js';
import { createTripFromFiles } from './trips.js';
import { createSampleTrip } from './sample.js';
import { actionSheet, confirmDialog, promptDialog, toast, urlOf } from './ui.js';
import { esc, fmtKm, fmtRange } from './fmt.js';

const $ = id => document.getElementById(id);
let onOpen = () => {};

export function init(opts) {
  onOpen = opts.onOpen;
  $('newTripInput').addEventListener('change', async e => {
    const files = e.target.files;
    if (!files?.length) return;
    const id = await createTripFromFiles(files);
    e.target.value = '';
    if (id) onOpen(id, { fresh: true });
  });
  const sample = async () => { const id = await createSampleTrip(); onOpen(id, { fresh: true }); };
  $('sampleBtn').addEventListener('click', sample);
  $('sampleBtn2').addEventListener('click', sample);
  $('tripList').addEventListener('click', async e => {
    const card = e.target.closest('[data-id]');
    if (!card) return;
    const id = card.dataset.id;
    if (e.target.closest('[data-more]')) await tripMenu(id);
    else onOpen(id);
  });
}

function card(t) {
  const s = t.stats;
  const cover = t.cover ? `style="background-image:url('${urlOf(t.cover)}')"` : '';
  const range = s?.start ? fmtRange(s.start, s.end, s.off) : '位置情報のある写真なし';
  const days = s?.days > 1 ? ` · ${s.days}日間` : '';
  const stats = s ? `${s.spots}スポット · ${s.photos}枚${s.km ? ` · ${fmtKm(s.km)}` : ''}` : '';
  return `
    <article class="tc" role="listitem" data-id="${esc(t.id)}">
      <button type="button" class="tc-main" aria-label="${esc(t.title)}を開く">
        <span class="tc-cover" ${cover}>${t.cover ? '' : '<span class="tc-ph" aria-hidden="true"></span>'}</span>
        <span class="tc-body">
          <span class="tc-title">${esc(t.title)}</span>
          <span class="tc-range">${esc(range)}${days}</span>
          <span class="tc-stats">${esc(stats)}</span>
        </span>
      </button>
      <button type="button" class="tc-more icon-btn" data-more aria-label="${esc(t.title)}のメニュー">⋯</button>
    </article>`;
}

export async function render() {
  const trips = await db.listTrips();
  $('tripList').innerHTML = trips.map(card).join('');
  $('libEmpty').hidden = trips.length > 0;
  $('sampleBtn2').hidden = trips.length === 0 || trips.some(t => t.sample);
  try {
    const est = await navigator.storage?.estimate?.();
    if (est?.usage) $('storageInfo').textContent = `写真は端末の中だけに保存されます · 使用量 ${Math.round(est.usage / 1e6)}MB`;
  } catch { /* estimate unsupported */ }
}

async function tripMenu(id) {
  const t = await db.getTrip(id);
  if (!t) return;
  const v = await actionSheet({
    title: t.title,
    options: [
      { label: '開く', value: 'open' },
      { label: '名前を変更', value: 'rename' },
      { label: 'この旅を削除', value: 'delete', danger: true },
    ],
  });
  if (v === 'open') onOpen(id);
  if (v === 'rename') {
    const name = await promptDialog({ title: '旅の名前', value: t.title });
    if (name) { t.title = name; t.titleAuto = false; await db.putTrip(t); render(); }
  }
  if (v === 'delete') {
    const ok = await confirmDialog({ title: `「${t.title}」を削除しますか？`, message: 'この旅の写真と編集内容が端末から消えます。元の写真アプリの写真は消えません。', ok: '削除', danger: true });
    if (ok) { await db.deleteTrip(id); toast('削除しました'); render(); }
  }
}
