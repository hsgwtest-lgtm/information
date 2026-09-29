// Small DOM helpers: element builder, dialogs, toasts, numeric fields.

export function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (k === 'html') e.innerHTML = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat()) if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c));
  return e;
}

export function icon(name) {
  const ns = 'http://www.w3.org/2000/svg';
  const s = document.createElementNS(ns, 'svg');
  const u = document.createElementNS(ns, 'use');
  u.setAttribute('href', '#i-' + name);
  s.append(u);
  return s;
}

let toastTimer;
export function toast(msg, ms = 1800) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms);
}

const dlg = () => document.getElementById('dlg');
let current = null; // resolver of the dialog currently shown

function settle(value) {
  const r = current;
  current = null;
  r?.(value || null);
}

// Opens the shared bottom-sheet dialog. Resolves with the pressed button's value
// (or null when dismissed). `body` may be a node or an array of nodes.
// Opening a new dialog while one is shown replaces it (the old one resolves null).
export function openDialog({ title, body, buttons = [], onOpen }) {
  const d = dlg();
  if (!d.dataset.bound) {
    d.dataset.bound = '1';
    // Form submit / Escape close the dialog; the event arrives asynchronously.
    d.addEventListener('close', () => { if (!d.open) settle(d.returnValue); });
  }
  if (d.open) { settle(null); d.close(); }
  const form = document.getElementById('dlg-body');
  form.replaceChildren();
  const close = el('button', { type: 'button', class: 'icon-btn', 'aria-label': '閉じる', onclick: () => closeDialog('') }, icon('close'));
  form.append(el('div', { class: 'dlg-h' }, el('h2', {}, title), close));
  form.append(el('div', { class: 'dlg-c' }, body));
  if (buttons.length) {
    form.append(el('div', { class: 'dlg-f' }, buttons.map((b) =>
      el('button', { type: 'submit', value: b.value, class: 'btn ' + (b.cls || '') }, b.label))));
  }
  return new Promise((resolve) => {
    current = resolve;
    d.returnValue = '';
    d.showModal();
    // Keep the keyboard from popping up immediately on iOS.
    document.activeElement?.blur();
    onOpen?.();
  });
}
export function closeDialog(value = '') {
  const d = dlg();
  if (d.open) d.close(value);
  settle(value);
}

export async function confirmDialog(title, message, okLabel = 'OK', danger = false) {
  const v = await openDialog({
    title, body: el('p', {}, message),
    buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: okLabel, value: 'ok', cls: danger ? 'danger' : 'accent' }],
  });
  return v === 'ok';
}

export async function promptDialog(title, value, label = '') {
  const input = el('input', { class: 'txt', value, enterkeyhint: 'done' });
  const v = await openDialog({
    title, body: el('label', { class: 'field' }, el('span', {}, label), input),
    buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: 'OK', value: 'ok', cls: 'accent' }],
    onOpen: () => setTimeout(() => input.focus(), 50),
  });
  return v === 'ok' ? input.value : null;
}

const fmt = (v) => {
  const r = Math.round(v * 1000) / 1000;
  return Object.is(r, -0) ? '0' : String(r);
};
export { fmt };

// Numeric field with -/+ steppers. onChange(newValue) fires on commit.
export function numField({ label, value, step = 1, min = -Infinity, max = Infinity, axis = '', onChange, integer = false }) {
  const input = el('input', { type: 'text', inputmode: 'decimal', enterkeyhint: 'done', value: fmt(value), 'aria-label': label });
  const clamp = (v) => {
    v = Math.min(max, Math.max(min, v));
    return integer ? Math.round(v) : v;
  };
  const commit = (v) => {
    if (!Number.isFinite(v)) { input.value = fmt(value); return; }
    v = clamp(v);
    value = v;
    input.value = fmt(v);
    onChange(v);
  };
  input.addEventListener('change', () => commit(evalExpr(input.value)));
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') input.blur(); });
  input.addEventListener('focus', () => setTimeout(() => input.select(), 0));
  const stepBy = (dir) => commit(Math.round((value + dir * step) / step) * step);
  return el('div', { class: 'num ' + axis },
    el('button', { type: 'button', 'aria-label': label + ' を減らす', onclick: () => stepBy(-1) }, '−'),
    el('label', {}, label),
    input,
    el('button', { type: 'button', 'aria-label': label + ' を増やす', onclick: () => stepBy(1) }, '+'),
  );
}

// Allows simple arithmetic like "20+3.5" or "40/2" in numeric fields.
export function evalExpr(s) {
  s = String(s).replace(/,/g, '.').replace(/[×x＊]/g, '*').replace(/[÷／]/g, '/').replace(/[−ー]/g, '-').trim();
  if (!/^[\d+\-*/().\s]+$/.test(s)) return NaN;
  try {
    // eslint-disable-next-line no-new-func
    const v = Function('"use strict";return (' + s + ')')();
    return typeof v === 'number' ? v : NaN;
  } catch { return NaN; }
}

export function segmented(options, current, onPick) {
  const wrap = el('div', { class: 'seg' });
  for (const [value, label] of options) {
    wrap.append(el('button', {
      type: 'button', class: value === current ? 'on' : '',
      onclick: () => { for (const b of wrap.children) b.classList.remove('on'); wrap.children[options.findIndex((o) => o[0] === value)].classList.add('on'); onPick(value); },
    }, label));
  }
  return wrap;
}

// Save a file: Web Share (iOS share sheet → "ファイルに保存") when possible, else download.
export async function saveFile(blob, filename, preferShare = true) {
  const types = [blob.type, 'application/octet-stream'];
  for (const type of preferShare ? types : []) {
    try {
      const file = new File([blob], filename, { type });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: filename });
        return 'shared';
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return 'cancelled';
    }
  }
  const url = URL.createObjectURL(blob);
  const a = el('a', { href: url, download: filename });
  document.body.append(a);
  a.click();
  setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 10000);
  return 'downloaded';
}
