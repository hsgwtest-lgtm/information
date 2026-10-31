// Formatting helpers. Times are epoch ms; `off` is the camera's UTC offset like "+09:00" (or null = device zone).
const pad = n => String(n).padStart(2, '0');
const WEEK = ['日', '月', '火', '水', '木', '金', '土'];

export function offMinutes(off, ms = Date.now()) {
  const m = off && /^([+-])(\d\d):?(\d\d)$/.exec(off);
  if (m) return (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3]));
  return -new Date(ms).getTimezoneOffset();
}
/** A Date whose UTC fields show the wall-clock time at the photo's location. */
export function wall(ms, off) { return new Date(ms + offMinutes(off, ms) * 60000); }

export function fmtClock(ms, off) {
  if (ms == null || Number.isNaN(ms)) return '--:--';
  const d = wall(ms, off);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}
export function fmtDate(ms, off, withYear = false) {
  const d = wall(ms, off);
  return `${withYear ? d.getUTCFullYear() + '/' : ''}${d.getUTCMonth() + 1}/${d.getUTCDate()}（${WEEK[d.getUTCDay()]}）`;
}
export function dayKey(ms, off) {
  const d = wall(ms, off);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}
export function fmtRange(start, end, off) {
  const a = wall(start, off), b = wall(end, off);
  const y = a.getUTCFullYear() !== new Date().getFullYear() ? `${a.getUTCFullYear()}/` : '';
  const sameDay = dayKey(start, off) === dayKey(end, off);
  if (sameDay) return `${y}${a.getUTCMonth() + 1}/${a.getUTCDate()}（${WEEK[a.getUTCDay()]}）`;
  const sameMonth = a.getUTCMonth() === b.getUTCMonth();
  return `${y}${a.getUTCMonth() + 1}/${a.getUTCDate()} – ${sameMonth ? '' : (b.getUTCMonth() + 1) + '/'}${b.getUTCDate()}`;
}
export function fmtKm(km) {
  if (km == null) return '';
  if (km < 1) return `${Math.max(10, Math.round(km * 100) * 10)}m`;
  return `${km < 10 ? km.toFixed(1) : Math.round(km).toLocaleString()}km`;
}
export function fmtDur(h) {
  if (h == null || !Number.isFinite(h)) return '';
  const m = Math.round(h * 60);
  if (m < 60) return `${Math.max(1, m)}分`;
  const hh = Math.floor(m / 60), mm = m % 60;
  return mm ? `${hh}時間${mm}分` : `${hh}時間`;
}
export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
