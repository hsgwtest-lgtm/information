'use strict';

/* ═══════════════════════════════════════════════════════════════
   TILE / GEO CONFIGURATION
   国土地理院（GSI）タイル  zoom=12, 4×4グリッド
   カバー範囲: 富士山周辺 約 32km × 29km
═══════════════════════════════════════════════════════════════ */

const Z       = 12;
const GRID_W  = 4;           // タイル列数
const GRID_H  = 4;           // タイル行数
const TILE_X0 = 3624;        // 左端列  (富士山頂 ≈ 3625)
const TILE_Y0 = 1616;        // 上端行  (富士山頂 ≈ 1617)
const TS      = 256;         // タイル一辺のサンプル数
const DW      = GRID_W * TS; // 1024 – ハイトマップ幅
const DH      = GRID_H * TS; // 1024 – ハイトマップ高さ
const WORLD   = 20.0;        // ワールド単位のテレイン一辺
const HSCALE  = 0.00095;     // メートル→ワールド単位 (約1.5倍強調)
const SEG     = 511;         // PlaneGeometry セグメント数 → 512×512頂点

/* ═══════════════════════════════════════════════════════════════
   GEO-MATH  (Mercator projection)
═══════════════════════════════════════════════════════════════ */

function _t2lon(x, z) { return x / (1 << z) * 360 - 180; }
function _t2lat(y, z) {
  const n = Math.PI * (1 - 2 * y / (1 << z));
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}
function _mercY(d) {
  const r = d * Math.PI / 180;
  return Math.log(Math.tan(r) + 1 / Math.cos(r));
}

const lonMin  = _t2lon(TILE_X0,          Z);
const lonMax  = _t2lon(TILE_X0 + GRID_W, Z);
const latMax  = _t2lat(TILE_Y0,          Z);
const latMin  = _t2lat(TILE_Y0 + GRID_H, Z);
const mercMax = _mercY(latMax);
const mercMin = _mercY(latMin);

// 経緯度 → ワールドXZ座標 (Y=標高は別途)
function lon2wx(lon) { return (lon - lonMin) / (lonMax - lonMin) * WORLD - WORLD * 0.5; }
function lat2wz(lat) {
  const py = (mercMax - _mercY(lat)) / (mercMax - mercMin) * DH;
  return py / DH * WORLD - WORLD * 0.5;
}

// 経緯度 → ハイトマップピクセル座標
function lon2px(lon) { return (lon - lonMin) / (lonMax - lonMin) * DW; }
function lat2py(lat) { return (mercMax - _mercY(lat)) / (mercMax - mercMin) * DH; }

/* ═══════════════════════════════════════════════════════════════
   ROUTE DATA  (経緯度座標による登山ルート定義)
═══════════════════════════════════════════════════════════════ */

const SUMMIT = { lat: 35.3606, lon: 138.7274 };

// 各ルートのウェイポイントは緯度・経度で指定
// 座標は国土地理院地形図・GPS実測データに基づく精細値
// (登山道の地形への投影はDEMロード後にgeo3()で行う)
const ROUTES = [
  {
    id: 'yoshida', name: '吉田ルート',
    color: 0x44bbff, css: '#44bbff',
    trailLat: 35.3760, trailLon: 138.7243,
    diff: '★★★☆☆', up: '5〜7時間', down: '3〜4時間',
    access: '河口湖駅・富士山駅からシャトルバス（約50分）',
    note: '最も登山者が多いルート。山小屋・トイレが充実し初心者にも安心。8合目から須走ルートと合流。',
    wps: [
      { lat: 35.3760, lon: 138.7243, name: '5合目', sub: '2,305m' },
      { lat: 35.3739, lon: 138.7248, name: '6合目', sub: '2,390m' },
      { lat: 35.3718, lon: 138.7253, name: '6合目 安全指導センター', sub: '2,450m' },
      { lat: 35.3693, lon: 138.7258, name: '7合目 花小屋', sub: '2,700m' },
      { lat: 35.3671, lon: 138.7262, name: '7合目5', sub: '2,900m' },
      { lat: 35.3651, lon: 138.7265, name: '8合目 太子館', sub: '3,100m' },
      { lat: 35.3636, lon: 138.7267, name: '8合目5 御来光館', sub: '3,400m' },
      { lat: 35.3623, lon: 138.7269, name: '9合目', sub: '3,600m' },
      { lat: 35.3613, lon: 138.7271, name: '9合目5', sub: '3,700m' },
      { lat: SUMMIT.lat, lon: SUMMIT.lon, name: '山頂 久須志神社', sub: '3,776m' },
    ],
  },
  {
    id: 'subashiri', name: '須走ルート',
    color: 0x22dd88, css: '#22dd88',
    trailLat: 35.3168, trailLon: 138.7785,
    diff: '★★★☆☆', up: '5〜8時間', down: '3〜4時間',
    access: '御殿場駅からシャトルバス（約45分）',
    note: '樹林帯が長く自然豊か。8合目から吉田ルートと合流。砂走りが爽快。',
    wps: [
      { lat: 35.3168, lon: 138.7785, name: '5合目', sub: '1,970m' },
      { lat: 35.3237, lon: 138.7742, name: '6合目 長田山荘', sub: '2,420m' },
      { lat: 35.3322, lon: 138.7679, name: '7合目 大陽館', sub: '2,700m' },
      { lat: 35.3406, lon: 138.7580, name: '7合目5 見晴館', sub: '2,900m' },
      { lat: 35.3466, lon: 138.7479, name: '8合目 江戸屋', sub: '3,100m' },
      { lat: 35.3544, lon: 138.7382, name: '合流点(8合目)', sub: '3,200m' },
      { lat: 35.3577, lon: 138.7344, name: '9合目', sub: '3,400m' },
      { lat: 35.3594, lon: 138.7308, name: '9合目5', sub: '3,560m' },
      { lat: SUMMIT.lat, lon: SUMMIT.lon, name: '山頂 久須志神社', sub: '3,776m' },
    ],
  },
  {
    id: 'gotemba', name: '御殿場ルート',
    color: 0xffaa22, css: '#ffaa22',
    trailLat: 35.2943, trailLon: 138.7610,
    diff: '★★★★★', up: '7〜10時間', down: '3〜4時間',
    access: '御殿場駅からシャトルバス（約40分）',
    note: '最も標高差が大きく難易度高め。静かで空いている穴場ルート。大砂走りが名物。',
    wps: [
      { lat: 35.2943, lon: 138.7610, name: '新5合目', sub: '1,440m' },
      { lat: 35.3003, lon: 138.7575, name: '大石茶屋', sub: '1,510m' },
      { lat: 35.3078, lon: 138.7527, name: '6合目', sub: '2,000m' },
      { lat: 35.3163, lon: 138.7469, name: '7合目 日の出館', sub: '2,590m' },
      { lat: 35.3266, lon: 138.7405, name: '8合目 赤岩八合館', sub: '3,000m' },
      { lat: 35.3371, lon: 138.7354, name: '8合目5', sub: '3,440m' },
      { lat: 35.3461, lon: 138.7316, name: '9合目', sub: '3,600m' },
      { lat: 35.3533, lon: 138.7294, name: '9合目5', sub: '3,700m' },
      { lat: SUMMIT.lat, lon: SUMMIT.lon, name: '山頂 剣ヶ峰', sub: '3,776m' },
    ],
  },
  {
    id: 'fujinomiya', name: '富士宮ルート',
    color: 0xff4488, css: '#ff4488',
    trailLat: 35.3296, trailLon: 138.7204,
    diff: '★★★★☆', up: '4〜6時間', down: '2〜3時間',
    access: '新富士駅・富士宮駅からシャトルバス（約75分）',
    note: '5合目の標高が最も高く最短ルート。富士山本宮浅間大社奥宮を経由する。',
    wps: [
      { lat: 35.3296, lon: 138.7204, name: '5合目', sub: '2,380m' },
      { lat: 35.3323, lon: 138.7218, name: '6合目', sub: '2,490m' },
      { lat: 35.3342, lon: 138.7225, name: '6合目5 雲海荘', sub: '2,600m' },
      { lat: 35.3373, lon: 138.7236, name: '7合目 御来光山荘', sub: '2,900m' },
      { lat: 35.3403, lon: 138.7244, name: '7合目5 山口山荘', sub: '3,010m' },
      { lat: 35.3431, lon: 138.7251, name: '8合目 池田館', sub: '3,250m' },
      { lat: 35.3460, lon: 138.7256, name: '8合目5', sub: '3,360m' },
      { lat: 35.3496, lon: 138.7263, name: '9合目 万年雪山荘', sub: '3,460m' },
      { lat: 35.3551, lon: 138.7269, name: '9合目5 胸突山荘', sub: '3,590m' },
      { lat: 35.3580, lon: 138.7272, name: '浅間大社奥宮', sub: '3,720m' },
      { lat: SUMMIT.lat, lon: SUMMIT.lon, name: '山頂 剣ヶ峰', sub: '3,776m' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */

function lerp(a, b, t)    { return a + (b - a) * t; }
function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

// ハイトマップ（DEMロード後にセット）
let hmap = null;

// ハイトマップのバイリニア補間サンプリング
function bilinear(px, py) {
  if (!hmap) return 0;
  const x0 = clamp(px | 0, 0, DW - 1), y0 = clamp(py | 0, 0, DH - 1);
  const x1 = Math.min(x0 + 1, DW - 1),  y1 = Math.min(y0 + 1, DH - 1);
  const fx = px - x0, fy = py - y0;
  return (hmap[y0 * DW + x0] * (1 - fx) + hmap[y0 * DW + x1] * fx) * (1 - fy)
       + (hmap[y1 * DW + x0] * (1 - fx) + hmap[y1 * DW + x1] * fx) * fy;
}

// 経緯度 → 地表高さ（ワールド単位）
function geoH(lat, lon) { return bilinear(lon2px(lon), lat2py(lat)) * HSCALE; }

// 経緯度 → THREE.Vector3（地表面上の3D座標）
function geo3(lat, lon, dy) {
  return new THREE.Vector3(lon2wx(lon), geoH(lat, lon) + (dy || 0.028), lat2wz(lat));
}

// 0xRRGGBB → 'rgba(r,g,b,a)'
function hexToRgba(hex, a) {
  return 'rgba(' + ((hex >> 16) & 0xff) + ',' + ((hex >> 8) & 0xff) + ',' + (hex & 0xff) + ',' + a + ')';
}

/* ═══════════════════════════════════════════════════════════════
   LOADING PROGRESS
═══════════════════════════════════════════════════════════════ */

function setProgress(pct, msg) {
  const fill = document.getElementById('ld-fill');
  const text = document.getElementById('ld-text');
  if (fill) fill.style.width = clamp(pct, 0, 100) + '%';
  if (msg && text) text.textContent = msg;
}

/* ═══════════════════════════════════════════════════════════════
   DATA LOADERS  (国土地理院 GSI タイル)
═══════════════════════════════════════════════════════════════ */

// DEM（数値標高モデル）タイルを取得してFloat32Arrayに格納
async function loadDEM() {
  const buf  = new Float32Array(DW * DH);
  let   done = 0;
  const n    = GRID_W * GRID_H;

  await Promise.all(
    Array.from({ length: n }, (_, i) => {
      const tx = i % GRID_W, ty = (i / GRID_W) | 0;
      const url = `https://cyberjapandata.gsi.go.jp/xyz/dem/${Z}/${TILE_X0 + tx}/${TILE_Y0 + ty}.txt`;
      return fetch(url)
        .then(r => r.ok ? r.text() : '')
        .then(txt => {
          done++;
          setProgress(done / n * 48, `標高データ読込中… ${done}/${n}`);
          if (!txt) return;
          txt.split('\n').forEach((row, r) => {
            if (r >= TS) return;
            row.split(',').forEach((cell, c) => {
              if (c >= TS) return;
              const v = parseFloat(cell);
              if (isFinite(v) && cell.trim() !== 'e') { // 'e' は GSI DEM の無効値（陸地データなし）
                buf[(ty * TS + r) * DW + (tx * TS + c)] = Math.max(0, v);
              }
            });
          });
        })
        .catch(() => { done++; });
    })
  );
  return buf;
}

// 空中写真タイルを取得してCanvasに合成
async function loadPhotoCanvas() {
  const cv  = document.createElement('canvas');
  cv.width  = DW;
  cv.height = DH;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#1e2e14';
  ctx.fillRect(0, 0, DW, DH);

  let   done = 0;
  const n    = GRID_W * GRID_H;

  await Promise.all(
    Array.from({ length: n }, (_, i) => {
      const tx = i % GRID_W, ty = (i / GRID_W) | 0;
      const url = `https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/${Z}/${TILE_X0 + tx}/${TILE_Y0 + ty}.jpg`;
      return new Promise(res => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          ctx.drawImage(img, tx * TS, ty * TS, TS, TS);
          done++;
          setProgress(48 + done / n * 47, `空中写真読込中… ${done}/${n}`);
          res();
        };
        img.onerror = () => { done++; res(); };
        img.src = url;
      });
    })
  );
  return cv;
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS STATE
═══════════════════════════════════════════════════════════════ */

let renderer, scene, camera, clock;
const routeObjects = {};   // id → { allMats: THREE.Material[] }

// カメラオービット（起動後にDEMロード完了後に山頂基準で更新）
let orbitTheta  =  0.45;
let orbitPhi    =  0.82;
let orbitRadius = 11.0;
const orbitTarget = new THREE.Vector3(lon2wx(SUMMIT.lon), 1.8, lat2wz(SUMMIT.lat));
let targetTheta = null;
let autoRotate  = true;

function applyOrbit() {
  const sp = Math.sin(orbitPhi);
  camera.position.set(
    orbitTarget.x + orbitRadius * sp * Math.sin(orbitTheta),
    orbitTarget.y + orbitRadius * Math.cos(orbitPhi),
    orbitTarget.z + orbitRadius * sp * Math.cos(orbitTheta)
  );
  camera.lookAt(orbitTarget);
}

/* ═══════════════════════════════════════════════════════════════
   SCENE BUILDERS
═══════════════════════════════════════════════════════════════ */

function buildSky() {
  // グラデーション空球 (内側に描画)
  const geo    = new THREE.SphereGeometry(400, 24, 12);
  const pos    = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = clamp((pos.getY(i) + 400) / 800, 0, 1);
    colors[i * 3]     = lerp(0.62, 0.05, t);   // R
    colors[i * 3 + 1] = lerp(0.76, 0.15, t);   // G
    colors[i * 3 + 2] = lerp(0.92, 0.32, t);   // B
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  scene.add(new THREE.Mesh(geo,
    new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));

  // 星
  const N  = 700;
  const sp = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(1 - Math.random() * 1.05);
    sp[i * 3]     = 380 * Math.sin(ph) * Math.cos(th);
    sp[i * 3 + 1] = Math.abs(380 * Math.cos(ph));
    sp[i * 3 + 2] = 380 * Math.sin(ph) * Math.sin(th);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  scene.add(new THREE.Points(sg,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, sizeAttenuation: true })));
}

// DEMハイトマップ + 空中写真テクスチャで地形メッシュを構築
function buildTerrain(heights, photoCanvas) {
  // PlaneGeometry を XY 平面に作成
  const geo = new THREE.PlaneGeometry(WORLD, WORLD, SEG, SEG);
  const pos = geo.attributes.position;

  // 各頂点のZ値（回転前）に標高をセット
  // PlaneGeometry 頂点順: xi=i%(SEG+1), yi=floor(i/(SEG+1))
  // rotateX(-π/2) 後: Z値 → Y座標(高さ), Y値 → -Z座標(南北)
  for (let i = 0; i < pos.count; i++) {
    const xi = i % (SEG + 1);
    const yi = (i / (SEG + 1)) | 0;
    const px = xi / SEG * (DW - 1);
    const py = yi / SEG * (DH - 1);
    pos.setZ(i, bilinear(px, py) * HSCALE);
  }
  pos.needsUpdate = true;

  geo.rotateX(-Math.PI / 2);
  geo.computeVertexNormals();

  // 空中写真テクスチャ
  // PlaneGeometry の UV: v=0 が南辺 → flipY=true でキャンバス南 (y=DH) と一致 ✓
  const texture = new THREE.CanvasTexture(photoCanvas);
  texture.minFilter = THREE.LinearFilter; // ミップマップなし（Canvas テクスチャはPOT不要）

  const mat = new THREE.MeshStandardMaterial({
    map:       texture,
    roughness: 0.88,
    metalness: 0.0,
  });

  scene.add(new THREE.Mesh(geo, mat));
}

// DEMからルートを地表面に投影して描画（ウェイポイント経由の精細パス）
function buildRoutes() {
  ROUTES.forEach(route => {
    const group = new THREE.Group();

    // ウェイポイント間を密に補間して地表面に投影（各セグメント24点）
    const pts3D = [];
    const STEPS = 24;
    for (let wi = 0; wi < route.wps.length - 1; wi++) {
      const from = route.wps[wi];
      const to   = route.wps[wi + 1];
      for (let i = 0; i < STEPS; i++) {
        const t   = i / STEPS;
        const lat = lerp(from.lat, to.lat, t);
        const lon = lerp(from.lon, to.lon, t);
        pts3D.push(geo3(lat, lon));
      }
    }
    const last = route.wps[route.wps.length - 1];
    pts3D.push(geo3(last.lat, last.lon));

    const curve   = new THREE.CatmullRomCurve3(pts3D);
    const tubeGeo = new THREE.TubeGeometry(curve, pts3D.length * 2, 0.009, 5, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: route.color, transparent: true, opacity: 1 });
    group.add(new THREE.Mesh(tubeGeo, tubeMat));

    // ウェイポイントマーカー
    const sphereMats = [];
    route.wps.forEach((wp, wi) => {
      const isEndpoint = wi === 0 || wi === route.wps.length - 1;
      const pt  = geo3(wp.lat, wp.lon, 0.05);
      const rad = isEndpoint ? 0.030 : 0.018;
      const mat = new THREE.MeshBasicMaterial({ color: route.color, transparent: true, opacity: 1 });
      const s   = new THREE.Mesh(new THREE.SphereGeometry(rad, 8, 8), mat);
      s.position.copy(pt);
      group.add(s);
      sphereMats.push(mat);
    });

    routeObjects[route.id] = { allMats: [tubeMat, ...sphereMats] };
    scene.add(group);
  });
}

// XYZ軸ヘルパー（X=赤=東, Y=緑=上, Z=青=南）
function buildAxes() {
  const ax = new THREE.AxesHelper(2.0);
  // 地形の南東端付近（目立つ位置）に配置
  const axLon = lonMin + (lonMax - lonMin) * 0.88;
  const axLat = latMin + (latMax - latMin) * 0.10;
  ax.position.set(lon2wx(axLon), geoH(axLat, axLon) + 0.12, lat2wz(axLat));
  scene.add(ax);
}

function buildSummitMarker() {
  const summitPos = geo3(SUMMIT.lat, SUMMIT.lon, 0.06);

  // 金色球マーカー
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.040, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffd700 })
  );
  sphere.position.copy(summitPos);
  scene.add(sphere);

  // 金色リング
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.10, 0.007, 6, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.55 })
  );
  ring.position.copy(summitPos);
  scene.add(ring);
}

/* ═══════════════════════════════════════════════════════════════
   ORBIT CONTROLS  (mouse + touch — no external dependency)
═══════════════════════════════════════════════════════════════ */

let pointerDown = false;
let pointerX = 0, pointerY = 0;
let pinchDist0 = 0, pinchRad0 = 0;

function setupControls() {
  const el = renderer.domElement;

  // Mouse
  el.addEventListener('mousedown', e => {
    pointerDown  = true;
    autoRotate   = false;
    targetTheta  = null;
    pointerX = e.clientX; pointerY = e.clientY;
  });
  window.addEventListener('mousemove', e => {
    if (!pointerDown) return;
    orbitTheta -= (e.clientX - pointerX) * 0.004;
    orbitPhi    = clamp(orbitPhi - (e.clientY - pointerY) * 0.004, 0.15, Math.PI * 0.47);
    pointerX = e.clientX; pointerY = e.clientY;
    applyOrbit();
  });
  window.addEventListener('mouseup', () => { pointerDown = false; });
  el.addEventListener('wheel', e => {
    orbitRadius = clamp(orbitRadius + e.deltaY * 0.008, 3, 22);
    applyOrbit();
  }, { passive: true });

  // Touch
  el.addEventListener('touchstart', e => {
    e.preventDefault();
    autoRotate  = false;
    targetTheta = null;
    if (e.touches.length === 1) {
      pointerDown = true;
      pointerX = e.touches[0].clientX; pointerY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      pointerDown = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchDist0 = Math.hypot(dx, dy);
      pinchRad0  = orbitRadius;
    }
  }, { passive: false });

  el.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && pointerDown) {
      orbitTheta -= (e.touches[0].clientX - pointerX) * 0.004;
      orbitPhi    = clamp(orbitPhi - (e.touches[0].clientY - pointerY) * 0.004, 0.15, Math.PI * 0.47);
      pointerX = e.touches[0].clientX; pointerY = e.touches[0].clientY;
      applyOrbit();
    } else if (e.touches.length === 2) {
      const dx   = e.touches[0].clientX - e.touches[1].clientX;
      const dy   = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      orbitRadius = clamp(pinchRad0 * (pinchDist0 / dist), 3, 22);
      applyOrbit();
    }
  }, { passive: false });

  el.addEventListener('touchend', e => {
    if (e.touches.length === 0) pointerDown = false;
  });
}

/* ═══════════════════════════════════════════════════════════════
   UI
═══════════════════════════════════════════════════════════════ */

let activeRoute = 'all';

function selectRoute(id) {
  activeRoute = id;

  // Update button styles
  document.querySelectorAll('.route-btn').forEach(btn => {
    const active = btn.dataset.id === id;
    btn.classList.toggle('active', active);
    btn.style.background   = '';
    btn.style.borderColor  = '';
    if (active && id !== 'all') {
      const route = ROUTES.find(r => r.id === id);
      btn.style.background  = hexToRgba(route.color, 0.28);
      btn.style.borderColor = route.css;
    }
  });

  // Show/hide info panel & adjust route opacities
  const panel = document.getElementById('info-panel');
  if (id === 'all') {
    panel.classList.add('hidden');
    Object.values(routeObjects).forEach(o =>
      o.allMats.forEach(m => { m.opacity = 1; })
    );
    orbitRadius = 11;
  } else {
    const route = ROUTES.find(r => r.id === id);
    fillInfoPanel(route);
    panel.classList.remove('hidden');
    Object.entries(routeObjects).forEach(([rid, o]) => {
      const on = rid === id;
      o.allMats.forEach(m => { m.opacity = on ? 1 : 0.10; });
    });
    // カメラをトレイルヘッド方向に向ける
    const dx = lon2wx(route.trailLon) - orbitTarget.x;
    const dz = lat2wz(route.trailLat) - orbitTarget.z;
    targetTheta = Math.atan2(dx, dz);
    orbitRadius = 7;
  }
  applyOrbit();
}

function fillInfoPanel(route) {
  document.getElementById('info-dot').style.background = route.css;
  document.getElementById('info-name').textContent     = route.name;
  document.getElementById('info-diff').textContent     = route.diff;
  document.getElementById('info-up').textContent       = route.up;
  document.getElementById('info-down').textContent     = route.down;
  document.getElementById('info-access').textContent   = route.access;
  document.getElementById('info-note').textContent     = route.note;

  document.getElementById('info-wps').innerHTML = route.wps
    .map(w => '<div class="wp-chip" style="border-color:' + route.css + '44">' +
               w.name + '<span>' + w.sub + '</span></div>')
    .join('');
}

/* ═══════════════════════════════════════════════════════════════
   3D LABELS  (project trailhead positions to screen space)
═══════════════════════════════════════════════════════════════ */

// DEMロード後に geo3() で更新される（起動時は仮値）
const labelPts = {};
ROUTES.forEach(r => { labelPts[r.id] = new THREE.Vector3(lon2wx(r.trailLon), 0, lat2wz(r.trailLat)); });

const _proj = new THREE.Vector3(); // reusable temp

function updateLabels() {
  ROUTES.forEach(r => {
    const el = document.getElementById('label-' + r.id);
    if (!el) return;

    const vis = activeRoute === 'all' || activeRoute === r.id;
    if (!vis) { el.style.display = 'none'; return; }

    _proj.copy(labelPts[r.id]).project(camera);

    const x = ( _proj.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-_proj.y * 0.5 + 0.5) * window.innerHeight;

    // Hide if behind camera or off-screen
    if (_proj.z >= 1 || x < -60 || x > window.innerWidth + 60 || y < -40 || y > window.innerHeight + 40) {
      el.style.display = 'none';
      return;
    }

    el.style.display   = 'block';
    el.style.left      = x + 'px';
    el.style.top       = y + 'px';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.opacity   = (activeRoute === 'all' || activeRoute === r.id) ? '1' : '0.15';
  });
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATION LOOP
═══════════════════════════════════════════════════════════════ */

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  if (targetTheta !== null) {
    // Smooth rotation toward selected route
    let diff = targetTheta - orbitTheta;
    // Normalise to [-π, π] — handles negative values correctly
    diff = ((diff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    orbitTheta += diff * Math.min(dt * 2.8, 0.9);
    applyOrbit();
    if (Math.abs(diff) < 0.015) {
      orbitTheta = targetTheta;
      targetTheta = null;
      applyOrbit();
    }
  } else if (autoRotate) {
    orbitTheta += dt * 0.07;
    applyOrbit();
  }

  renderer.render(scene, camera);
  updateLabels();
}

/* ═══════════════════════════════════════════════════════════════
   RESIZE
═══════════════════════════════════════════════════════════════ */

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */

async function init() {
  // レンダラー
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // シーン & クロック
  scene = new THREE.Scene();
  clock = new THREE.Clock();

  // カメラ
  camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 600);

  // ライト
  scene.add(new THREE.HemisphereLight(0xb4d8f0, 0x204010, 0.7));
  const sun = new THREE.DirectionalLight(0xfff5e0, 1.2);
  sun.position.set(8, 14, 5);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xc0d8ff, 0.35);
  fill.position.set(-6, 3, -5);
  scene.add(fill);

  // 大気ヘイズ
  scene.fog = new THREE.Fog(0xb4cfe0, 28, 120);

  applyOrbit();
  setupControls();
  window.addEventListener('resize', onResize);
  animate(); // ローディング中もアニメーション

  // --- 非同期データ読み込み ---
  setProgress(0, '富士山データを読込中…');
  const [heights, photoCanvas] = await Promise.all([
    loadDEM(),
    loadPhotoCanvas(),
  ]);

  // ハイトマップを設定
  hmap = heights;

  // オービットターゲットを山頂の実高さの60%に設定（山腹を注視点として適切な俯瞰角が得られる）
  orbitTarget.y = geoH(SUMMIT.lat, SUMMIT.lon) * 0.6;

  // シーン構築
  setProgress(96, 'シーンを構築中…');
  buildSky();
  buildTerrain(heights, photoCanvas);
  buildRoutes();
  buildSummitMarker();
  buildAxes();

  // ラベル位置をDEMロード後に更新
  ROUTES.forEach(r => {
    labelPts[r.id] = geo3(r.trailLat, r.trailLon, 0.20);
  });

  setProgress(100, '完了');

  // ローディング画面を非表示
  setTimeout(() => {
    const ld = document.getElementById('loading');
    ld.style.opacity = '0';
    setTimeout(() => { ld.style.display = 'none'; }, 520);
  }, 200);

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(function() {});
  }
}

window.addEventListener('DOMContentLoaded', init);
