// A generated 2-day sample trip (Kamakura → Enoshima → Hakone) with a few deliberate outliers,
// so every feature can be tried without real photos.
import * as db from './db.js';
import { newTrip } from './trips.js';
import { progress } from './ui.js';

// [day, time, lat, lon, label, hue]
const SHOTS = [
  [1, '09:30', 35.3190, 139.5503, '鎌倉駅', 205],
  [1, '09:52', 35.3215, 139.5513, '小町通り', 25], [1, '10:05', 35.3216, 139.5512, '食べ歩き', 35],
  [1, '10:30', 35.3259, 139.5565, '鶴岡八幡宮', 355], [1, '10:36', 35.3260, 139.5566, '大石段', 5],
  [1, '10:41', 35.3262, 139.5568, '本宮', 345], [1, '10:47', 35.3258, 139.5563, '舞殿', 15],
  [1, '12:40', 35.3167, 139.5359, '鎌倉大仏', 150], [1, '12:50', 35.3168, 139.5360, '大仏の横顔', 140], [1, '13:00', 35.3166, 139.5358, '御朱印', 160],
  [1, '13:30', 35.3125, 139.5332, '長谷寺', 110], [1, '13:37', 35.3126, 139.5331, '見晴台から海', 195],
  [1, '13:44', 35.3127, 139.5333, '紫陽花の道', 280], [1, '13:51', 35.3124, 139.5330, '観音堂', 95],
  [1, '13:58', 35.3125, 139.5334, '弁天窟', 60], [1, '14:05', 35.3126, 139.5332, 'お団子', 30],
  [1, '14:20', 34.6937, 135.5023, '（外れ値）GPSの誤り', 0],
  [1, '15:30', 35.3045, 139.4835, '江の島', 190], [1, '15:45', 35.3046, 139.4836, '弁天橋', 200], [1, '16:20', 35.3005, 139.4790, '展望灯台', 220],
  [1, '17:40', 35.3080, 139.4880, '夕食・しらす丼', 40], [1, '17:55', 35.3081, 139.4881, '夕日', 18],
  [1, '18:05', null, null, 'デザート（位置なし）', 320],
  [2, '09:10', 35.3095, 139.4850, 'ホテルの朝', 50],
  [2, '11:00', 35.2326, 139.1053, '箱根湯本', 170], [2, '11:15', 35.2327, 139.1054, '温泉まんじゅう', 32],
  [2, '12:30', 35.2440, 139.0200, '大涌谷', 75], [2, '12:40', 35.2441, 139.0201, '黒たまご', 260],
  [2, '13:40', 35.2486, 139.0035, '桃源台港', 210],
  [2, '14:20', 35.2010, 139.0250, '元箱根港', 215], [2, '14:50', 35.2052, 139.0254, '箱根神社', 0], [2, '15:00', 35.2050, 139.0258, '平和の鳥居', 8],
  [0, '12:00', 35.6812, 139.7671, '（外れ値）去年の写真', 270],
];

function paint(label, hue, time, i, w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const s = w / 1200;
  const sky = g.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, `hsl(${hue} 70% 62%)`);
  sky.addColorStop(1, `hsl(${(hue + 40) % 360} 55% 30%)`);
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(255,255,255,.85)';
  g.beginPath(); g.arc(w * 0.76, h * 0.26, 70 * s, 0, Math.PI * 2); g.fill();
  for (let k = 0; k < 2; k++) {
    g.fillStyle = `rgba(0,0,0,${0.18 + k * 0.14})`;
    g.beginPath();
    g.moveTo(0, h);
    for (let x = 0; x <= w; x += 20 * s) g.lineTo(x, h * (0.66 + k * 0.1) + Math.sin(x / (110 * s) + i * 1.7 + k) * 34 * s);
    g.lineTo(w, h);
    g.fill();
  }
  g.fillStyle = '#fff';
  g.shadowColor = 'rgba(0,0,0,.35)';
  g.shadowBlur = 12 * s;
  g.font = `700 ${Math.round(76 * s)}px -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif`;
  g.fillText(label, 60 * s, h - 80 * s);
  g.font = `500 ${Math.round(34 * s)}px -apple-system, sans-serif`;
  g.fillText(`SAMPLE  ${time}`, 60 * s, 90 * s);
  return new Promise(r => c.toBlob(r, 'image/jpeg', 0.84));
}

export async function createSampleTrip() {
  const trip = newTrip('鎌倉・箱根（サンプル）');
  trip.titleAuto = false;
  trip.sample = true;
  const photos = [];
  progress('サンプルを作成中…', 0);
  for (let i = 0; i < SHOTS.length; i++) {
    const [day, t, lat, lon, label, hue] = SHOTS[i];
    const date = day === 0 ? '2025-03-02' : day === 1 ? '2026-10-24' : '2026-10-25';
    const time = Date.parse(`${date}T${t}:00+09:00`);
    photos.push({
      id: `${trip.id}:sample-${String(i).padStart(2, '0')}`, tripId: trip.id, name: `${label}.jpg`,
      time, off: '+09:00', lat, lon, acc: lat != null ? 12 : null, w: 1200, h: 900,
      full: await paint(label, hue, t, i, 1200, 900), thumb: await paint(label, hue, t, i, 360, 270),
    });
    progress('サンプルを作成中…', (i + 1) / SHOTS.length);
  }
  // The lake crossing at Hakone was by sightseeing boat: preset it to show a corrected move.
  const key = (n) => `${trip.id}:sample-${String(n).padStart(2, '0')}`;
  trip.modes[`${key(28)}>${key(29)}`] = 'boat';
  await db.putPhotos(photos);
  await db.putTrip(trip);
  progress(null);
  return trip.id;
}
