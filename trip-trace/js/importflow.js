// Import: read photos one by one; each located photo lights up on the globe as it is read.
import * as db from './db.js';
import * as E from './engine.js';
import { readPhoto } from './exif.js';
import { analyze } from './analyze.js';
import { blankTrip } from './model.js';
import { bounds } from './geo.js';
import { show, sleep, confirm } from './ui.js';
import { esc } from './fmt.js';

const $ = id => document.getElementById(id);

/** Returns the trip id, or null when nothing usable was read. */
export async function run(fileList, existingId = null) {
  const files = [...fileList].filter(f => !f.type || f.type.startsWith('image/') || /\.(heic|heif|jpe?g|png)$/i.test(f.name));
  if (!files.length) return null;
  const el = $('import');
  E.setScreen('import');
  E.setDots([]);
  $('impStack').innerHTML = '';
  $('impCount').textContent = `0 / ${files.length}`;
  $('impLabel').textContent = '写真を読み込んでいます';
  $('impNote').textContent = '写真はこの端末の外へは送られません';
  show(el, true);

  const trip = existingId ? await db.trip(existingId) : blankTrip();
  if (!existingId) await db.saveTrip(trip);
  const known = new Set(existingId ? (await db.photos(trip.id)).map(p => p.id) : []);
  const dots = [];
  const batch = [];
  let added = 0, located = 0, lastFit = 0;
  const urls = [];

  for (let i = 0; i < files.length; i++) {
    let p = null;
    try { p = await readPhoto(files[i], trip.id); } catch { /* unreadable file */ }
    $('impCount').textContent = `${i + 1} / ${files.length}`;
    if (!p || known.has(p.id)) continue;
    known.add(p.id);
    batch.push(p);
    added++;
    if (p.thumb) addPrint(p.thumb, urls);
    if (p.lat != null) {
      located++;
      dots.push({ lat: p.lat, lon: p.lon });
      E.setDots(dots);
      if (dots.length - lastFit >= 4 || dots.length === 1) { lastFit = dots.length; fitDots(dots, 900); }
    }
    if (batch.length >= 6) await db.savePhotos(batch.splice(0));
  }
  if (batch.length) await db.savePhotos(batch);
  try { await navigator.storage?.persist?.(); } catch { /* optional */ }

  if (!added || (!existingId && !located)) {
    if (!existingId) await db.removeTrip(trip.id);
    show(el, false);
    urls.forEach(u => URL.revokeObjectURL(u));
    if (added && !located) {
      await confirm({
        title: '位置情報のある写真がありませんでした',
        body: 'iPhoneでは、写真を選ぶ画面の上にある「オプション」で「位置情報」をオンにしてから選んでください。カメラの設定で位置情報が切れていた写真は使えません。',
        ok: 'わかりました',
      });
    }
    return null;
  }

  const all = await db.photos(trip.id);
  const r = analyze(all, trip);
  if (dots.length) fitDots(dots, 1200, 30);
  $('impLabel').innerHTML = `${esc(r.places.length)}か所 · ${esc(r.days.length)}日間の旅`;
  $('impCount').textContent = existingId ? `+${added}` : `${r.used}`;
  const skipped = r.excluded.length + r.unplaced.length;
  $('impNote').textContent = skipped ? `位置がわからない・外れていた写真 ${skipped}枚は地図に置きません` : '';
  await sleep(1700);
  show(el, false);
  setTimeout(() => urls.forEach(u => URL.revokeObjectURL(u)), 1500);
  return trip.id;
}

function addPrint(blob, urls) {
  const u = URL.createObjectURL(blob);
  urls.push(u);
  const stack = $('impStack');
  const d = document.createElement('div');
  d.className = 'imp-print';
  d.style.setProperty('--r', `${(Math.random() * 10 - 5).toFixed(1)}deg`);
  d.innerHTML = `<img src="${u}" alt="">`;
  stack.appendChild(d);
  while (stack.children.length > 4) stack.firstElementChild.remove();
}

function fitDots(dots, duration, pitch = 0) {
  const b = bounds(dots);
  const pad = { top: 120, bottom: Math.round(window.innerHeight * 0.45), left: 50, right: 50 };
  const cam = E.frame(b, { padding: pad, pitch, maxZoom: 9 });
  if (cam) E.map.easeTo({ ...cam, duration, essential: true });
}
