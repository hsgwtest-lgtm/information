// Trip Trace — a generated sample day trip (Kamakura → Enoshima) for trying the app without photos.
const SPOTS = [
  { name: '鎌倉駅', t: '09:30', lat: 35.3190, lon: 139.5503, hue: 200 },
  { name: '小町通り', t: '09:52', lat: 35.3215, lon: 139.5513, hue: 25 },
  { name: '鶴岡八幡宮', t: '10:30', lat: 35.3259, lon: 139.5565, hue: 355 },
  { name: '鶴岡八幡宮', t: '10:44', lat: 35.3262, lon: 139.5569, hue: 345 },
  { name: '鎌倉大仏', t: '12:40', lat: 35.3167, lon: 139.5359, hue: 150 },
  { name: '長谷寺', t: '13:30', lat: 35.3125, lon: 139.5332, hue: 120 },
  { name: '長谷寺', t: '13:41', lat: 35.3127, lon: 139.5329, hue: 95 },
  { name: '江の島', t: '15:30', lat: 35.3045, lon: 139.4835, hue: 190 },
  { name: '江の島 夕食', t: '17:40', lat: 35.3000, lon: 139.4800, hue: 30 },
  { name: 'デザート（位置なし）', t: '18:05', lat: null, lon: null, hue: 320 },
];

function draw(s, i) {
  const c = document.createElement('canvas');
  c.width = 960; c.height = 720;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 960, 720);
  grd.addColorStop(0, `hsl(${s.hue} 70% 55%)`);
  grd.addColorStop(1, `hsl(${(s.hue + 50) % 360} 60% 22%)`);
  g.fillStyle = grd; g.fillRect(0, 0, 960, 720);
  // simple "scenery": sun + hills
  g.fillStyle = 'rgba(255,255,255,.85)';
  g.beginPath(); g.arc(720, 200, 70, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(0,0,0,.25)';
  g.beginPath(); g.moveTo(0, 560);
  for (let x = 0; x <= 960; x += 40) g.lineTo(x, 520 + Math.sin(x / 90 + i) * 40);
  g.lineTo(960, 720); g.lineTo(0, 720); g.fill();
  g.fillStyle = '#fff';
  g.font = 'bold 64px -apple-system, "Hiragino Sans", sans-serif';
  g.fillText(s.name, 56, 640);
  g.font = '36px -apple-system, sans-serif';
  g.fillText(`SAMPLE · ${s.t}`, 56, 110);
  return new Promise(r => c.toBlob(r, 'image/jpeg', 0.82));
}

export async function makeSamplePhotos() {
  const out = [];
  for (let i = 0; i < SPOTS.length; i++) {
    const s = SPOTS[i];
    const time = Date.parse(`2026-10-24T${s.t}:00+09:00`);
    out.push({ id: `sample-${i}`, name: `SAMPLE_${i}.jpg`, time, off: '+09:00', lat: s.lat, lon: s.lon, blob: await draw(s, i) });
  }
  return out;
}
