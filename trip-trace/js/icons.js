// Line icons drawn for this app (24×24, stroke = currentColor).
const P = {
  walk: '<circle cx="13" cy="4.6" r="1.8"/><path d="M10.8 21l2-6.2 2.6 2.6V21"/><path d="M12.8 14.8l-1-5.3 4 3.1 2.4.6"/><path d="M11.8 9.5l-3 2.1-1.1 3.2"/>',
  train: '<rect x="5" y="3" width="14" height="14" rx="3.2"/><path d="M5 10h14"/><path d="M9 13.6h.01M15 13.6h.01"/><path d="M8.2 21l2-4M15.8 21l-2-4"/>',
  car: '<path d="M4 16.2v-3.4l2-4.6A2 2 0 0 1 7.8 7h8.4a2 2 0 0 1 1.8 1.2l2 4.6v3.4z"/><path d="M4 12.8h16"/><circle cx="7.6" cy="16.6" r="1.7"/><circle cx="16.4" cy="16.6" r="1.7"/>',
  boat: '<path d="M3.5 15.6h17l-2.6 4.4H6.1z"/><path d="M7 15.6v-4h10v4"/><path d="M10 11.6V8h4v3.6"/><path d="M12 8V4.5"/>',
  plane: '<path d="M12 2.8c.9 0 1.5.9 1.5 2v5.1l7.5 4.3v2l-7.5-2.2v4.4l2.3 1.7v1.6L12 20.8l-3.8 1V20.1l2.3-1.7V14l-7.5 2.2v-2l7.5-4.3V4.8c0-1.1.6-2 1.5-2z"/>',
  play: '<path d="M8 5.2v13.6L19 12z" fill="currentColor" stroke="none"/>',
  pause: '<rect x="6.5" y="5" width="3.6" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="13.9" y="5" width="3.6" height="14" rx="1" fill="currentColor" stroke="none"/>',
  skip: '<path d="M5.5 5.5L15 12l-9.5 6.5z" fill="currentColor" stroke="none"/><path d="M18.5 5.5v13"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  back: '<path d="M15 4.5L7.5 12l7.5 7.5"/>',
  next: '<path d="M9 4.5l7.5 7.5L9 19.5"/>',
  edit: '<path d="M4 20h4.2L19.4 8.8a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L4 15.8z"/><path d="M13.6 6.2l4.2 4.2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  star: '<path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
  starOn: '<path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill="currentColor"/>',
  music: '<path d="M9 18V6.2l10-2.2v11.8"/><circle cx="6.8" cy="18" r="2.2"/><circle cx="16.8" cy="15.8" r="2.2"/>',
  trash: '<path d="M4.5 7h15M9.5 7V4.8h5V7M6.8 7l.9 13h8.6l.9-13"/>',
  photo: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M3.5 16l5-5 4 4 2.5-2.5 5.5 5.5"/><circle cx="15.5" cy="9.5" r="1.4"/>',
  eyeOff: '<path d="M3 3l18 18"/><path d="M10.6 5.2A9.7 9.7 0 0 1 12 5c5 0 8.6 4.5 9.5 7a12 12 0 0 1-2.6 3.8M6.6 6.7A12.5 12.5 0 0 0 2.5 12c.9 2.5 4.5 7 9.5 7a9.4 9.4 0 0 0 4.3-1"/><path d="M9.9 10a3 3 0 0 0 4.1 4.2"/>',
  undo: '<path d="M8.5 6L4 10.5 8.5 15"/><path d="M4 10.5h10a6 6 0 0 1 0 12h-3"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5S9.4 5.9 12 3.5z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  dots: '<circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18.5" cy="12" r="1.3" fill="currentColor"/>',
  pin: '<path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
};

export function icon(name, cls = '') {
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}
