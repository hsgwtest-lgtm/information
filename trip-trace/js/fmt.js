// Formatting. Times are epoch ms; `off` is the camera's UTC offset ("+09:00") or null (use device zone).
const pad = n => String(n).padStart(2, '0');
const WEEK = ['日', '月', '火', '水', '木', '金', '土'];
const KANJI = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

export function offMin(off, ms = Date.now()) {
  const m = off && /^([+-])(\d\d):?(\d\d)$/.exec(off);
  if (m) return (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3]));
  return -new Date(ms).getTimezoneOffset();
}
/** Date whose UTC fields read as wall-clock time where the photo was taken. */
export const wall = (ms, off) => new Date(ms + offMin(off, ms) * 60000);

export function clock(ms, off) {
  if (ms == null || Number.isNaN(ms)) return '--:--';
  const d = wall(ms, off);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}
export function hourOf(ms, off) {
  const d = wall(ms, off);
  return d.getUTCHours() + d.getUTCMinutes() / 60;
}
export function dayKey(ms, off) {
  const d = wall(ms, off);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}
/** 10月24日（土） */
export function jpDate(ms, off) {
  const d = wall(ms, off);
  return `${d.getUTCMonth() + 1}月${d.getUTCDate()}日（${WEEK[d.getUTCDay()]}）`;
}
/** 2026.10.24 */
export function dotDate(ms, off) {
  const d = wall(ms, off);
  return `${d.getUTCFullYear()}.${pad(d.getUTCMonth() + 1)}.${pad(d.getUTCDate())}`;
}
/** 2026.10.24 — 10.25 */
export function dotRange(a, b, off) {
  const A = wall(a, off), B = wall(b, off);
  const head = dotDate(a, off);
  if (dayKey(a, off) === dayKey(b, off)) return head;
  if (A.getUTCFullYear() !== B.getUTCFullYear()) return `${head} — ${dotDate(b, off)}`;
  return `${head} — ${pad(B.getUTCMonth() + 1)}.${pad(B.getUTCDate())}`;
}
/** 日帰り / 1泊2日 */
export function stayLabel(days) {
  if (!days) return '';
  return days === 1 ? '日帰り' : `${days - 1}泊${days}日`;
}
export const kanjiNum = n => (n <= 10 ? KANJI[n] : String(n));
export const dayTitle = i => `${kanjiNum(i + 1)}日目`;

export function km(v) {
  if (v == null || !Number.isFinite(v)) return '';
  if (v < 1) return `${Math.max(10, Math.round(v * 100) * 10)} m`;
  if (v < 10) return `${v.toFixed(1)} km`;
  return `${Math.round(v).toLocaleString('ja-JP')} km`;
}
export function dur(h) {
  if (h == null || !Number.isFinite(h)) return '';
  const m = Math.max(1, Math.round(h * 60));
  if (m < 60) return `${m}分`;
  const hh = Math.floor(m / 60), mm = m % 60;
  return mm ? `${hh}時間${mm}分` : `${hh}時間`;
}
export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
/** "鎌倉市" → "鎌倉", "ソウル特別市" → "ソウル"; keeps short names intact. */
export function shortCity(name) {
  if (!name) return name;
  const s = name.replace(/(特別市|広域市|特別自治市|特別区)$/, '');
  if (s !== name) return s;
  const t = name.replace(/[市町村区]$/, '');
  return t.length >= 2 ? t : name;
}
