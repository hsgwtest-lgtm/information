// Editor: name, what the replay shows, how each move was made, and photos kept off the map.
import * as db from './db.js';
import * as model from './model.js';
import { M } from './model.js';
import { MODES, MODE_ORDER } from './analyze.js';
import { icon } from './icons.js';
import { url, show, prompt, confirm, toast } from './ui.js';
import { esc, km, clock, dotDate, dayTitle } from './fmt.js';

const $ = id => document.getElementById(id);
let hooks = {};

export function init(h) {
  hooks = h;
  $('editorDone').addEventListener('click', close);
  $('editorBody').addEventListener('click', onClick);
  $('pickMusic').addEventListener('change', async e => {
    const f = e.target.files?.[0];
    e.target.value = '';
    if (!f) return;
    await db.saveMusic(M.trip.id, { name: f.name, blob: f });
    M.trip.music = f.name.replace(/\.[^.]+$/, '');
    await model.save();
    render();
    toast('再生中に流す音楽を設定しました');
  });
  model.on(type => { if (!$('editor').hidden && (type === 'analysis' || type === 'names')) render(); });
}

export function open() { render(); show($('editor'), true); }
export function close() { show($('editor'), false); hooks.closed?.(); }

const seg = (name, options, value) => `<div class="seg" role="radiogroup">${options.map(([v, label, extra = '']) =>
  `<button type="button" role="radio" aria-checked="${String(v) === String(value)}" class="${String(v) === String(value) ? 'on' : ''} ${extra}" data-set="${name}" data-v="${v}">${label}</button>`).join('')}</div>`;

function render() {
  const t = M.trip, r = M.r;
  const per = t.settings.perPlace ?? 3;
  let html = '';

  html += `<section class="sec">
    <h3>旅の名前</h3>
    <div class="row"><div class="row-title">${esc(t.title)}</div><button type="button" class="btn small" data-act="rename">変える</button></div>
  </section>`;

  html += `<section class="sec">
    <h3>再生</h3>
    <p class="hint">たどるとき、それぞれの場所で見せる写真の枚数です。場所の画面で ★ を付けた写真は必ず見せます。</p>
    <div class="row"><div class="row-label"><b>場所ごとの写真</b></div>${seg('per', [[1, '1'], [2, '2'], [3, '3'], [5, '5'], [0, 'すべて']], per)}</div>
    <div class="row"><div class="row-label"><b>音楽</b><small>${t.music ? esc(t.music) : '流さない'}</small></div>
      <div>${t.music ? '<button type="button" class="btn small quiet" data-act="music-off">外す</button>' : ''}<button type="button" class="btn small" data-act="music">${t.music ? '変える' : '選ぶ'}</button></div></div>
  </section>`;

  html += `<section class="sec"><h3>移動</h3>
    <p class="hint">写真の場所と時刻から推定しています。違っていたら選び直してください。枠の付いたアイコンが自動の推定です。</p>`;
  if (!r.moves.length) html += '<p class="empty-note">移動はありません。</p>';
  let day = -1;
  for (const mv of r.moves) {
    const a = r.places[mv.from], b = r.places[mv.to];
    if (r.days.length > 1 && b.day !== day && mv.newDay) { day = b.day; html += `<div class="mv-day">${dayTitle(b.day)}へ</div>`; }
    const opts = MODE_ORDER.map(m => [m, icon(m), m === mv.auto ? 'auto' : '']);
    html += `<div class="mv">
      <div class="mv-head"><b>${mv.from + 1} → ${mv.to + 1}</b><span>${esc(model.placeName(a))} → ${esc(model.placeName(b))}</span></div>
      ${seg(`mode:${mv.key}`, opts, mv.mode)}
      <div class="mv-note">${esc(MODES[mv.mode].label)} · 直線 ${esc(km(mv.km))}${mv.forced ? ' · 手動で変更' : ` · ${esc(mv.reason)}`}</div>
    </div>`;
  }
  html += '</section>';

  html += `<section class="sec"><h3>地図に置かなかった写真</h3>
    <p class="hint">撮影日がほかと離れた写真、前後から大きく外れた位置の写真、位置の誤差が大きい写真は自動で外しています。</p>`;
  html += r.excluded.length ? `<div class="xlist">${r.excluded.map(x => xRow(x.photo, x.reason, x.auto ? '自動' : '手動',
    `<button type="button" class="btn small" data-restore="${esc(x.photo.id)}" data-auto="${x.auto ? 1 : 0}">戻す</button>`)).join('')}</div>`
    : '<p class="empty-note">ありません。</p>';
  html += '</section>';

  if (r.unplaced.length) {
    html += `<section class="sec"><h3>位置がわからない写真</h3>
      <p class="hint">位置情報のない写真は、前後45分以内に撮った写真の場所に入れます。それもない写真はここに残ります。</p>
      <div class="xlist">${r.unplaced.map(x => xRow(x.photo, x.reason, '', '')).join('')}</div></section>`;
  }

  const rad = t.settings.radiusM || 200;
  html += `<section class="sec"><h3>そのほか</h3>
    <div class="row"><div class="row-label"><b>写真を追加</b><small>同じ旅の写真をあとから足せます</small></div><label class="btn small" for="pickMore">選ぶ</label></div>
    <div class="row"><div class="row-label"><b>場所のまとめ方</b><small>近くで撮った写真を1か所にまとめる範囲</small></div>${seg('radius', [[100, '狭い'], [200, '標準'], [400, '広い']], rad)}</div>
    <div class="row"><div class="row-label"><b class="danger-text">この旅を削除</b><small>写真アプリの元の写真は消えません</small></div><button type="button" class="btn small quiet danger-text" data-act="delete">削除</button></div>
  </section>`;

  $('editorBody').innerHTML = html;
}

function xRow(p, reason, tag, action) {
  const when = p.time ? `${dotDate(p.time, p.off)} ${clock(p.time, p.off)}` : '日時なし';
  return `<div class="x">${p.thumb ? `<img src="${url(p.thumb)}" alt="" loading="lazy">` : '<span class="noimg"></span>'}
    <div class="x-text"><b>${esc(reason)}</b><small>${esc(when)}${tag ? ` · ${esc(tag)}` : ''}</small></div>${action}</div>`;
}

async function onClick(e) {
  const t = M.trip;
  const set = e.target.closest('[data-set]');
  if (set) {
    const name = set.dataset.set, v = set.dataset.v;
    if (name === 'per') t.settings.perPlace = Number(v);
    else if (name === 'radius') t.settings.radiusM = Number(v);
    else if (name.startsWith('mode:')) {
      const key = name.slice(5);
      const mv = M.r.moves.find(m => m.key === key);
      if (mv && v === mv.auto) delete t.modes[key]; else t.modes[key] = v;
    }
    model.recompute();
    model.saveSoon();
    render();
    const changed = M.r.moves.find(m => name === `mode:${m.key}`);
    if (changed) model.routeMove(changed);
    if (name === 'radius') model.enrich();
    return;
  }
  const restore = e.target.closest('[data-restore]');
  if (restore) {
    const id = restore.dataset.restore;
    if (restore.dataset.auto === '1') t.exclusions[id] = 'in'; else delete t.exclusions[id];
    model.recompute();
    model.saveSoon();
    render();
    model.enrich();
    toast('旅に戻しました');
    return;
  }
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (act === 'rename') {
    const name = await prompt({ title: '旅の名前', value: t.title });
    if (name) { t.title = name; t.titleAuto = false; await model.save(); render(); hooks.renamed?.(); }
  }
  if (act === 'music') $('pickMusic').click();
  if (act === 'music-off') { await db.saveMusic(t.id, null); t.music = null; await model.save(); render(); }
  if (act === 'delete') {
    const ok = await confirm({ title: `「${t.title}」を削除しますか？`, body: 'この旅の写真と編集内容がこの端末から消えます。写真アプリの元の写真は消えません。', ok: '削除', danger: true });
    if (!ok) return;
    const id = t.id;
    show($('editor'), false);
    await hooks.deleted(id);
  }
}
