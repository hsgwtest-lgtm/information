// Small UI pieces: toast, dialogs, object URLs.
import { esc } from './fmt.js';

const layer = () => document.getElementById('overlay');

let toastTimer = 0;
export function toast(text, { action, onAction, ms = 3400 } = {}) {
  const el = document.getElementById('toast');
  el.innerHTML = `<span>${esc(text)}</span>${action ? `<button type="button">${esc(action)}</button>` : ''}`;
  el.hidden = false;
  el.classList.remove('on');
  void el.offsetWidth;
  el.classList.add('on');
  if (action) el.querySelector('button').onclick = () => { hide(); onAction?.(); };
  const hide = () => { el.classList.remove('on'); setTimeout(() => { el.hidden = true; }, 300); };
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hide, ms);
}

function mount(html) {
  const el = document.createElement('div');
  el.className = 'dlg-wrap';
  el.innerHTML = `<div class="dlg-scrim"></div>${html}`;
  layer().appendChild(el);
  requestAnimationFrame(() => el.classList.add('in'));
  return { el, close: () => { el.classList.remove('in'); setTimeout(() => el.remove(), 260); } };
}

export function confirm({ title, body = '', ok = 'OK', danger = false }) {
  return new Promise(resolve => {
    const { el, close } = mount(`
      <div class="dlg" role="alertdialog" aria-labelledby="dlgT">
        <h2 id="dlgT" class="dlg-title">${esc(title)}</h2>
        ${body ? `<p class="dlg-body">${esc(body)}</p>` : ''}
        <div class="dlg-row">
          <button type="button" class="btn quiet" data-v="0">キャンセル</button>
          <button type="button" class="btn ${danger ? 'danger' : 'gold'}" data-v="1">${esc(ok)}</button>
        </div>
      </div>`);
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-v]');
      if (b) { close(); resolve(b.dataset.v === '1'); }
    });
  });
}

export function prompt({ title, value = '', placeholder = '', ok = '保存' }) {
  return new Promise(resolve => {
    const { el, close } = mount(`
      <form class="dlg" role="dialog" aria-labelledby="dlgT">
        <label id="dlgT" class="dlg-title" for="dlgIn">${esc(title)}</label>
        <input id="dlgIn" class="dlg-input" type="text" maxlength="48" autocomplete="off" value="${esc(value)}" placeholder="${esc(placeholder)}">
        <div class="dlg-row">
          <button type="button" class="btn quiet" data-v="0">キャンセル</button>
          <button type="submit" class="btn gold">${esc(ok)}</button>
        </div>
      </form>`);
    const input = el.querySelector('input');
    setTimeout(() => { input.focus(); input.select(); }, 80);
    el.querySelector('form').addEventListener('submit', e => { e.preventDefault(); close(); resolve(input.value.trim()); });
    el.querySelector('[data-v="0"]').addEventListener('click', () => { close(); resolve(null); });
  });
}

/** A short list of choices. options: [{label, value, danger?}] → resolves with value or null. */
export function choose({ title, options }) {
  return new Promise(resolve => {
    const { el, close } = mount(`
      <div class="dlg" role="dialog" aria-labelledby="dlgT">
        <h2 id="dlgT" class="dlg-title">${esc(title)}</h2>
        ${options.map((o, i) => `<button type="button" class="btn ${o.danger ? 'quiet danger-text' : ''}" data-i="${i}">${esc(o.label)}</button>`).join('')}
        <button type="button" class="btn quiet" data-x>キャンセル</button>
      </div>`);
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-i]');
      if (b) { close(); resolve(options[Number(b.dataset.i)].value); return; }
      if (e.target.closest('[data-x]') || e.target.classList.contains('dlg-scrim')) { close(); resolve(null); }
    });
  });
}

const urls = new Map();
export function url(blob) {
  if (!blob) return '';
  let u = urls.get(blob);
  if (!u) { u = URL.createObjectURL(blob); urls.set(blob, u); }
  return u;
}
export function releaseUrls(keep = []) {
  const k = new Set(keep);
  for (const [b, u] of urls) if (!k.has(b)) { URL.revokeObjectURL(u); urls.delete(b); }
}

/** Fade a screen in/out. */
export function show(el, on) {
  if (on) {
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add('in'));
  } else {
    el.classList.remove('in');
    setTimeout(() => { if (!el.classList.contains('in')) el.hidden = true; }, 420);
  }
}

export const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));
export const sleep = ms => new Promise(r => setTimeout(r, ms));
