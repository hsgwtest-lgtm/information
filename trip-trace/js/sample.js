// Sample trip: Kamakura → Enoshima → Hakone over two days, with flat travel-poster "photos" drawn on the device
// and two deliberate outliers (a GPS glitch and a photo from last year) to show how they are set aside.
import * as db from './db.js';
import { blankTrip } from './model.js';

// [day, time, lat, lon, scene]
const SHOTS = [
  [1, '09:30', 35.3190, 139.5503, 'station'],
  [1, '09:52', 35.3215, 139.5513, 'street'], [1, '10:05', 35.3216, 139.5512, 'food'],
  [1, '10:30', 35.3259, 139.5565, 'shrine'], [1, '10:41', 35.3262, 139.5568, 'steps'], [1, '10:47', 35.3258, 139.5563, 'lantern'],
  [1, '12:40', 35.3167, 139.5359, 'buddha'], [1, '12:52', 35.3168, 139.5361, 'buddha2'],
  [1, '13:30', 35.3125, 139.5332, 'temple'], [1, '13:44', 35.3127, 139.5333, 'hydrangea'], [1, '13:58', 35.3125, 139.5334, 'seaview'],
  [1, '14:20', 34.6937, 135.5023, 'glitch'],
  [1, '15:30', 35.3045, 139.4835, 'island'], [1, '15:45', 35.3046, 139.4836, 'bridge'], [1, '16:40', 35.2995, 139.4785, 'lighthouse'],
  [1, '17:40', 35.3080, 139.4880, 'sunset'], [1, '18:05', 35.3081, 139.4881, 'food2'],
  [1, '18:30', null, null, 'dessert'],
  [2, '08:50', 35.3095, 139.4850, 'morning'],
  [2, '10:50', 35.2326, 139.1053, 'onsen'], [2, '11:05', 35.2327, 139.1054, 'manju'],
  [2, '12:30', 35.2440, 139.0200, 'volcano'], [2, '12:42', 35.2441, 139.0201, 'egg'],
  [2, '13:40', 35.2486, 139.0035, 'pier'],
  [2, '14:20', 35.2010, 139.0250, 'boat'], [2, '14:50', 35.2052, 139.0254, 'torii'], [2, '15:05', 35.2049, 139.0258, 'lake'],
  [0, '12:00', 35.6812, 139.7671, 'city'],
];

/* ---------- A tiny flat-poster painter ---------- */
function skyFor(h) {
  if (h < 7) return ['#9fb7e6', '#f4cdb9'];
  if (h < 15.5) return ['#6fa7e0', '#d9ecf7'];
  if (h < 17.2) return ['#7f9fd6', '#f6d39a'];
  if (h < 18.4) return ['#3e4f8e', '#f08f5f'];
  return ['#121a3a', '#3b3f72'];
}
function rnd(seed) { let s = seed * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); }

function paint(scene, hour, i, W, H) {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const R = rnd(i + 3);
  const u = W / 1200;
  const [top, bot] = skyFor(hour);
  const sky = g.createLinearGradient(0, 0, 0, H * 0.75);
  sky.addColorStop(0, top); sky.addColorStop(1, bot);
  g.fillStyle = sky; g.fillRect(0, 0, W, H);
  const night = hour >= 18.4;
  const ground = H * 0.68;

  const sun = (x, y, r, col) => { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };
  const hills = (y, amp, col, seed) => {
    g.fillStyle = col; g.beginPath(); g.moveTo(0, H);
    for (let x = 0; x <= W; x += 12 * u) g.lineTo(x, y + Math.sin(x / (170 * u) + seed) * amp + Math.sin(x / (61 * u) + seed * 2) * amp * 0.3);
    g.lineTo(W, H); g.fill();
  };
  const sea = (y, col) => {
    g.fillStyle = col; g.fillRect(0, y, W, H - y);
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 3 * u;
    for (let k = 0; k < 9; k++) { const yy = y + 20 * u + k * 26 * u; const x0 = R() * W * 0.6; g.beginPath(); g.moveTo(x0, yy); g.lineTo(x0 + (80 + R() * 160) * u, yy); g.stroke(); }
  };
  const rect = (x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
  const torii = (cx, base, s, col) => {
    rect(cx - 150 * s, base - 300 * s, 26 * s, 300 * s, col); rect(cx + 124 * s, base - 300 * s, 26 * s, 300 * s, col);
    g.fillStyle = col; g.beginPath(); g.moveTo(cx - 210 * s, base - 330 * s); g.quadraticCurveTo(cx, base - 300 * s, cx + 210 * s, base - 330 * s);
    g.lineTo(cx + 200 * s, base - 300 * s); g.quadraticCurveTo(cx, base - 280 * s, cx - 200 * s, base - 300 * s); g.fill();
    rect(cx - 170 * s, base - 255 * s, 340 * s, 20 * s, col);
  };
  const roof = (cx, y, w, h, col) => { g.fillStyle = col; g.beginPath(); g.moveTo(cx - w / 2, y + h); g.quadraticCurveTo(cx - w * 0.3, y + h * 0.2, cx, y); g.quadraticCurveTo(cx + w * 0.3, y + h * 0.2, cx + w / 2, y + h); g.fill(); };

  sun(W * 0.78, H * 0.22, 64 * u, night ? '#f4f1dc' : hour > 17 ? '#ffd9a0' : '#fff6e0');
  if (night) for (let k = 0; k < 40; k++) sun(R() * W, R() * H * 0.5, (1 + R() * 1.6) * u, 'rgba(255,255,255,0.8)');

  switch (scene) {
    case 'station':
      hills(ground - 40 * u, 30 * u, '#5f7d6b', 1);
      rect(0, ground, W, H - ground, '#c9c2b4');
      rect(W * 0.16, ground - 210 * u, W * 0.68, 210 * u, '#efe6d6'); roof(W / 2, ground - 300 * u, W * 0.8, 100 * u, '#5b3a2e');
      for (let k = 0; k < 6; k++) rect(W * 0.2 + k * W * 0.105, ground - 160 * u, W * 0.07, 90 * u, '#7aa3c4');
      rect(W * 0.44, ground - 120 * u, W * 0.12, 120 * u, '#6b4b3a'); break;
    case 'street': case 'lantern':
      rect(0, ground, W, H - ground, '#b9a993');
      for (let k = 0; k < 5; k++) { const x = k * W * 0.22 - 40 * u; rect(x, ground - (260 + R() * 90) * u, W * 0.2, 400 * u, k % 2 ? '#7a5a44' : '#8c6a50'); roof(x + W * 0.1, ground - (330 + R() * 40) * u, W * 0.24, 70 * u, '#3f2d26'); }
      for (let k = 0; k < (scene === 'lantern' ? 7 : 4); k++) { const x = W * (0.12 + k * 0.13); sun(x, ground - 200 * u, 22 * u, '#e8483b'); rect(x - 3 * u, ground - 236 * u, 6 * u, 18 * u, '#2a1d17'); } break;
    case 'food': case 'food2': case 'manju': case 'dessert': {
      rect(0, 0, W, H, scene === 'dessert' ? '#f3d8d0' : '#d9c3a2');
      rect(0, H * 0.6, W, H * 0.4, '#8a5a3c');
      const col = scene === 'manju' ? '#c98d5a' : scene === 'dessert' ? '#f7f2ea' : '#f4ecdf';
      g.fillStyle = '#2b2b33'; g.beginPath(); g.ellipse(W / 2, H * 0.62, 330 * u, 70 * u, 0, 0, 7); g.fill();
      g.fillStyle = col; g.beginPath(); g.ellipse(W / 2, H * 0.58, 280 * u, 120 * u, 0, Math.PI, 0); g.fill();
      if (scene === 'food2') { g.fillStyle = '#f7f1e6'; for (let k = 0; k < 120; k++) { g.fillRect(W / 2 - 230 * u + R() * 460 * u, H * 0.5 + R() * 60 * u, 10 * u, 3 * u); } }
      g.strokeStyle = 'rgba(255,255,255,0.7)'; g.lineWidth = 6 * u;
      for (let k = 0; k < 3; k++) { const x = W * (0.42 + k * 0.08); g.beginPath(); g.moveTo(x, H * 0.42); g.bezierCurveTo(x - 30 * u, H * 0.34, x + 30 * u, H * 0.28, x, H * 0.2); g.stroke(); }
      break;
    }
    case 'shrine': case 'steps':
      hills(ground - 120 * u, 40 * u, '#2f5a43', 2);
      rect(0, ground, W, H - ground, '#cfc5b3');
      if (scene === 'steps') for (let k = 0; k < 8; k++) rect(W * (0.3 - k * 0.02), ground + k * 30 * u, W * (0.4 + k * 0.04), 18 * u, '#a69a86');
      roof(W / 2, ground - 330 * u, W * 0.62, 110 * u, '#2f2a2a');
      rect(W * 0.28, ground - 220 * u, W * 0.44, 220 * u, '#d1453b');
      torii(W / 2, H * 0.98, 0.9 * u, '#e04a35'); break;
    case 'buddha': case 'buddha2':
      hills(ground - 90 * u, 50 * u, '#3f6650', 3);
      rect(0, ground, W, H - ground, '#bdb3a0');
      g.fillStyle = '#5f7f72';
      g.beginPath(); g.ellipse(W / 2, ground - 70 * u, 260 * u, 200 * u, 0, Math.PI, 0); g.fill();
      sun(W / 2, ground - 330 * u, 110 * u, '#5f7f72');
      sun(W / 2, ground - 420 * u, 70 * u, '#56766a');
      if (scene === 'buddha2') { g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(0, 0, W * 0.35, H); }
      break;
    case 'temple':
      hills(ground - 60 * u, 40 * u, '#406a52', 4);
      rect(0, ground, W, H - ground, '#c6b9a3');
      for (let k = 0; k < 3; k++) roof(W / 2, ground - (360 - k * 110) * u, W * (0.36 + k * 0.12), 70 * u, '#2e2b2b');
      rect(W * 0.36, ground - 140 * u, W * 0.28, 140 * u, '#8a3b2f'); break;
    case 'hydrangea':
      rect(0, 0, W, H, '#5c7d5e');
      for (let k = 0; k < 26; k++) { const x = R() * W, y = H * 0.35 + R() * H * 0.6; sun(x, y, (50 + R() * 50) * u, ['#8d7fd6', '#6f8ee6', '#c48ad8', '#a9b8f2'][k % 4]); }
      break;
    case 'seaview': case 'island': case 'bridge': case 'lighthouse': case 'sunset': case 'morning':
      sea(ground - 40 * u, scene === 'sunset' ? '#5c5e8e' : '#3f7fb3');
      if (scene === 'sunset') { sun(W * 0.5, ground - 70 * u, 110 * u, '#ff9a5a'); g.fillStyle = 'rgba(255,170,100,0.35)'; g.fillRect(W * 0.4, ground - 40 * u, W * 0.2, H); }
      if (scene !== 'morning' && scene !== 'seaview') { g.fillStyle = '#2f5b45'; g.beginPath(); g.ellipse(W * 0.62, ground - 30 * u, 300 * u, 130 * u, 0, Math.PI, 0); g.fill(); }
      if (scene === 'bridge') { rect(0, ground + 40 * u, W * 0.62, 18 * u, '#d9d2c3'); for (let k = 0; k < 10; k++) rect(k * W * 0.06, ground + 58 * u, 8 * u, 60 * u, '#b8b0a1'); }
      if (scene === 'lighthouse' || scene === 'island') { g.fillStyle = '#f2efe7'; g.beginPath(); g.moveTo(W * 0.6, ground - 330 * u); g.lineTo(W * 0.63, ground - 330 * u); g.lineTo(W * 0.65, ground - 120 * u); g.lineTo(W * 0.58, ground - 120 * u); g.fill(); sun(W * 0.615, ground - 345 * u, 18 * u, '#ffe7a0'); }
      if (scene === 'morning') { rect(0, ground + 60 * u, W, H, '#e8dfcf'); rect(W * 0.1, H * 0.12, W * 0.8, 10 * u, '#f6f2ea'); }
      break;
    case 'onsen':
      hills(ground - 150 * u, 60 * u, '#355b45', 5); hills(ground - 50 * u, 40 * u, '#2b4b39', 6);
      rect(0, ground + 40 * u, W, H, '#7f9da8');
      g.strokeStyle = 'rgba(255,255,255,0.75)'; g.lineWidth = 8 * u;
      for (let k = 0; k < 4; k++) { const x = W * (0.3 + k * 0.13); g.beginPath(); g.moveTo(x, ground + 20 * u); g.bezierCurveTo(x - 40 * u, ground - 60 * u, x + 40 * u, ground - 120 * u, x, ground - 200 * u); g.stroke(); }
      break;
    case 'volcano': case 'egg':
      g.fillStyle = '#8a7c66'; g.beginPath(); g.moveTo(0, H); g.lineTo(W * 0.35, ground - 260 * u); g.lineTo(W * 0.55, ground - 280 * u); g.lineTo(W, H); g.fill();
      for (let k = 0; k < 6; k++) sun(W * (0.4 + R() * 0.2), ground - (300 + k * 60) * u, (50 + k * 14) * u, 'rgba(255,255,255,0.55)');
      if (scene === 'egg') { for (let k = 0; k < 4; k++) { g.fillStyle = '#1d1b1c'; g.beginPath(); g.ellipse(W * (0.3 + k * 0.13), H * 0.82, 60 * u, 78 * u, 0, 0, 7); g.fill(); } }
      break;
    case 'pier': case 'boat': case 'lake': case 'torii':
      hills(ground - 170 * u, 60 * u, '#43695a', 7); hills(ground - 90 * u, 30 * u, '#2f5546', 8);
      sea(ground - 30 * u, '#3a6f8f');
      if (scene === 'boat' || scene === 'pier') { g.fillStyle = '#c0392b'; g.beginPath(); g.moveTo(W * 0.25, ground + 40 * u); g.lineTo(W * 0.75, ground + 40 * u); g.lineTo(W * 0.68, ground + 110 * u); g.lineTo(W * 0.32, ground + 110 * u); g.fill(); rect(W * 0.38, ground - 60 * u, W * 0.24, 100 * u, '#f0e6cf'); rect(W * 0.49, ground - 200 * u, 10 * u, 140 * u, '#5a3b2b'); }
      if (scene === 'torii') { torii(W / 2, ground + 30 * u, 0.85 * u, '#e04a35'); g.globalAlpha = 0.35; g.save(); g.translate(0, (ground + 30 * u) * 2); g.scale(1, -1); torii(W / 2, ground + 30 * u, 0.85 * u, '#e04a35'); g.restore(); g.globalAlpha = 1; }
      break;
    default:
      hills(ground - 60 * u, 50 * u, '#506a7a', 9); rect(0, ground, W, H, '#8a8f99');
  }
  g.fillStyle = 'rgba(255,255,255,0.55)';
  g.font = `600 ${Math.round(22 * u)}px "Avenir Next", "Josefin Sans", sans-serif`;
  g.fillText('SAMPLE', 34 * u, H - 30 * u);
  // a little film grain
  const grain = g.getImageData(0, 0, W, H), d = grain.data;
  for (let k = 0; k < d.length; k += 4) { const n = (R() - 0.5) * 14; d[k] += n; d[k + 1] += n; d[k + 2] += n; }
  g.putImageData(grain, 0, 0);
  return new Promise(r => c.toBlob(r, 'image/jpeg', 0.86));
}

export async function createSample(onProgress) {
  const trip = blankTrip();
  trip.title = '鎌倉・箱根（サンプル）';
  trip.titleAuto = false;
  trip.sample = true;
  const photos = [];
  for (let i = 0; i < SHOTS.length; i++) {
    const [day, t, lat, lon, scene] = SHOTS[i];
    const date = day === 0 ? '2025-03-02' : day === 1 ? '2026-10-24' : '2026-10-25';
    const time = Date.parse(`${date}T${t}:00+09:00`);
    const hour = Number(t.slice(0, 2)) + Number(t.slice(3)) / 60;
    const portrait = ['lantern', 'steps', 'buddha2', 'hydrangea', 'lighthouse', 'torii'].includes(scene);
    const [W, H] = portrait ? [1080, 1440] : [1440, 1080];
    const full = await paint(scene, hour, i, W, H);
    const thumb = await paint(scene, hour, i, Math.round(W / 3), Math.round(H / 3));
    photos.push({ id: `${trip.id}:s${String(i).padStart(2, '0')}`, tripId: trip.id, name: `${scene}.jpg`, time, off: '+09:00', lat, lon, acc: lat != null ? 10 : null, w: W, h: H, full, thumb });
    onProgress?.((i + 1) / SHOTS.length, thumb);
  }
  // The crossing of Lake Ashi was on the sightseeing boat: preset it, as a user would.
  trip.modes[`${trip.id}:s23>${trip.id}:s24`] = 'boat';
  await db.savePhotos(photos);
  await db.saveTrip(trip);
  return trip.id;
}
