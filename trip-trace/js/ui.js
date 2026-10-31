// Small UI toolkit: toast, dialogs, action sheets, full-screen panels, progress, object URLs.
import { esc } from './fmt.js';

const layer = document.getElementById('layer');

let toastTimer = 0;
export function toast(msg, ms = 3200) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.hidden = false;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.classList.remove('show'); setTimeout(() => { el.hidden = true; }, 250); }, ms);
}

function mount(html, cls) {
  const wrap = document.createElement('div');
  wrap.className = `ov ${cls}`;
  wrap.innerHTML = html;
  layer.appendChild(wrap);
  requestAnimationFrame(() => wrap.classList.add('in'));
  const close = () => {
    wrap.classList.remove('in');
    setTimeout(() => wrap.remove(), 220);
  };
  return { el: wrap, close };
}

/** Bottom action sheet. options: [{label, value, sub?, danger?, checked?}]. Resolves with value or null. */
export function actionSheet({ title, message, options }) {
  return new Promise(resolve => {
    const { el, close } = mount(`
      <div class="ov-scrim" data-x></div>
      <div class="as" role="dialog" aria-label="${esc(title || 'メニュー')}">
        ${title ? `<div class="as-title">${esc(title)}</div>` : ''}
        ${message ? `<div class="as-msg">${esc(message)}</div>` : ''}
        <div class="as-list">${options.map((o, i) => `
          <button type="button" class="as-opt${o.danger ? ' danger' : ''}${o.checked ? ' checked' : ''}" data-i="${i}">
            <span class="as-label">${esc(o.label)}${o.sub ? `<small>${esc(o.sub)}</small>` : ''}</span>
            ${o.checked ? '<span class="as-check" aria-hidden="true">✓</span>' : ''}
          </button>`).join('')}
        </div>
        <button type="button" class="as-cancel" data-x>キャンセル</button>
      </div>`, 'ov-sheet');
    el.addEventListener('click', e => {
      const opt = e.target.closest('[data-i]');
      if (opt) { close(); resolve(options[Number(opt.dataset.i)].value); return; }
      if (e.target.closest('[data-x]')) { close(); resolve(null); }
    });
  });
}

export function confirmDialog({ title, message, ok = 'OK', danger = false }) {
  return new Promise(resolve => {
    const { el, close } = mount(`
      <div class="ov-scrim"></div>
      <div class="dlg" role="alertdialog" aria-label="${esc(title)}">
        <div class="dlg-title">${esc(title)}</div>
        ${message ? `<div class="dlg-msg">${esc(message)}</div>` : ''}
        <div class="dlg-btns">
          <button type="button" class="btn ghost" data-v="0">キャンセル</button>
          <button type="button" class="btn ${danger ? 'danger' : 'primary'}" data-v="1">${esc(ok)}</button>
        </div>
      </div>`, 'ov-dialog');
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-v]');
      if (b) { close(); resolve(b.dataset.v === '1'); }
    });
  });
}

export function promptDialog({ title, value = '', placeholder = '', ok = '保存' }) {
  return new Promise(resolve => {
    const { el, close } = mount(`
      <div class="ov-scrim"></div>
      <form class="dlg" role="dialog" aria-label="${esc(title)}">
        <label class="dlg-title" for="dlgInput">${esc(title)}</label>
        <input id="dlgInput" class="dlg-input" type="text" value="${esc(value)}" placeholder="${esc(placeholder)}" maxlength="60" autocomplete="off">
        <div class="dlg-btns">
          <button type="button" class="btn ghost" data-v="0">キャンセル</button>
          <button type="submit" class="btn primary">${esc(ok)}</button>
        </div>
      </form>`, 'ov-dialog');
    const input = el.querySelector('input');
    setTimeout(() => { input.focus(); input.select(); }, 60);
    el.querySelector('form').addEventListener('submit', e => { e.preventDefault(); close(); resolve(input.value.trim()); });
    el.querySelector('[data-v="0"]').addEventListener('click', () => { close(); resolve(null); });
  });
}

/** Full-screen panel. Returns {el, body, close}. */
export function openPanel({ title, sub = '', actionsHtml = '', onClose }) {
  const { el, close } = mount(`
    <div class="panel" role="dialog" aria-label="${esc(title)}">
      <header class="panel-head">
        <button type="button" class="icon-btn" data-close aria-label="閉じる"><span aria-hidden="true">‹</span></button>
        <div class="panel-titles"><div class="panel-title">${esc(title)}</div><div class="panel-sub">${esc(sub)}</div></div>
        <div class="panel-actions">${actionsHtml}</div>
      </header>
      <div class="panel-body"></div>
    </div>`, 'ov-panel');
  const doClose = () => { close(); onClose?.(); };
  el.querySelector('[data-close]').addEventListener('click', doClose);
  return {
    el, body: el.querySelector('.panel-body'), close: doClose,
    setTitle(t, s) { el.querySelector('.panel-title').textContent = t; if (s != null) el.querySelector('.panel-sub').textContent = s; },
  };
}

let prog = null;
export function progress(text, frac = null, thumb = null) {
  if (text == null) { prog?.close(); prog = null; return; }
  if (!prog) {
    prog = mount(`
      <div class="ov-scrim solid"></div>
      <div class="prog" role="status">
        <div class="prog-thumb"></div>
        <div class="prog-text"></div>
        <div class="prog-bar"><i></i></div>
      </div>`, 'ov-progress');
  }
  prog.el.querySelector('.prog-text').textContent = text;
  prog.el.querySelector('.prog-bar').hidden = frac == null;
  prog.el.querySelector('.prog-bar i').style.width = `${Math.round((frac || 0) * 100)}%`;
  const th = prog.el.querySelector('.prog-thumb');
  th.style.backgroundImage = thumb ? `url("${thumb}")` : '';
  th.hidden = !thumb;
}

const urls = new Map();
export function urlOf(blob) {
  if (!blob) return '';
  let u = urls.get(blob);
  if (!u) { u = URL.createObjectURL(blob); urls.set(blob, u); }
  return u;
}
export function revokeUrls(keep = new Set()) {
  for (const [b, u] of urls) if (!keep.has(b)) { URL.revokeObjectURL(u); urls.delete(b); }
}
