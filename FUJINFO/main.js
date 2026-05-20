'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA  (planning info from FUJI)
   ═══════════════════════════════════════════════════════════════ */

const PLANS = {
  A: {
    icon: '☀️', title: 'Plan A — 昼間登山バージョン',
    desc: '朝5:00出発 → 山頂 · お鉢巡り',
    steps: [
      { day:'7/26', time:'12:00', h:12.0, icon:'🚌', loc:'富士山駅 / 河口湖駅', temp:null,   note:'シャトルバスで五合目へ（約50分）', t:0.00 },
      { day:'7/26', time:'13:00', h:13.0, icon:'🏔', loc:'五合目着（2,305m）',   temp:'16℃', note:'⚠️ 30分以上 高所順応（必須）',       t:0.06, hl:true },
      { day:'7/26', time:'14:00', h:14.0, icon:'🏠', loc:'星観荘 チェックイン', temp:'15℃', note:'六合目 · 荷物整理 · 軽装に切替',    t:0.09, hl:true },
      { day:'7/26', time:'18:00', h:18.0, icon:'😴', loc:'夕食・就寝',           temp:'12℃', note:'アラームを朝4:30にセット',          t:0.09 },
      { day:'7/27', time:'05:00', h: 5.0, icon:'☀️', loc:'星観荘 出発',          temp:'12℃', note:'明るくなってから · 視界良好',       t:0.09, hl:true },
      { day:'7/27', time:'07:00', h: 7.0, icon:'⛰', loc:'七合目（2,700m）',     temp:'9℃',  note:'休憩 · 行動食 · 水分補給',          t:0.38 },
      { day:'7/27', time:'08:30', h: 8.5, icon:'⛰', loc:'八合目（3,100m）',     temp:'7℃',  note:'休憩 · 防寒調整',                   t:0.62 },
      { day:'7/27', time:'09:30', h: 9.5, icon:'🏔', loc:'山頂着（3,776m）',     temp:'6℃',  note:'日差しあり · 景色良好',             t:1.00, hl:true },
      { day:'7/27', time:'10:00', h:10.0, icon:'🔵', loc:'お鉢巡り',             temp:'6℃',  note:'混雑少なめ',                        t:1.00 },
      { day:'7/27', time:'11:30', h:11.5, icon:'⬇️', loc:'下山開始',             temp:'↑',   note:'吉田ルート下山道（砂礫）',          t:0.55 },
      { day:'7/27', time:'14:30', h:14.5, icon:'✅', loc:'五合目 下山完了',      temp:'16℃', note:'シャトルバスで麓へ',                t:0.00, hl:true },
    ],
  },
  B: {
    icon: '🌄', title: 'Plan B — ご来光バージョン',
    desc: '深夜1:00出発 → 山頂でご来光を鑑賞',
    steps: [
      { day:'7/26', time:'12:00', h:12.0, icon:'🚌', loc:'富士山駅 / 河口湖駅', temp:null,   note:'シャトルバスで五合目へ（約50分）', t:0.00 },
      { day:'7/26', time:'13:00', h:13.0, icon:'🏔', loc:'五合目着（2,305m）',   temp:'16℃', note:'⚠️ 30分以上 高所順応（必須）',       t:0.06, hl:true },
      { day:'7/26', time:'14:00', h:14.0, icon:'🏠', loc:'星観荘 チェックイン', temp:'15℃', note:'六合目 · 荷物整理 · 軽装に切替',    t:0.09, hl:true },
      { day:'7/26', time:'18:00', h:18.0, icon:'🍽', loc:'夕食',                 temp:'12℃', note:'名物 爆弾ハンバーグ御膳',           t:0.09 },
      { day:'7/26', time:'20:00', h:20.0, icon:'😴', loc:'就寝',                 temp:null,   note:'アラームを深夜0:30にセット',       t:0.09 },
      { day:'7/27', time:'01:00', h: 1.0, icon:'🔦', loc:'星観荘 出発',          temp:'8℃',  note:'ヘッドライト装着 · 防寒フル装備',   t:0.09, hl:true },
      { day:'7/27', time:'02:30', h: 2.5, icon:'⛰', loc:'七合目（2,700m）',     temp:'5℃',  note:'休憩 · 行動食 · 水分補給',          t:0.38 },
      { day:'7/27', time:'04:00', h: 4.0, icon:'⛰', loc:'八合目（3,100m）',     temp:'2℃',  note:'休憩 · 防寒再確認',                 t:0.62 },
      { day:'7/27', time:'04:30', h: 4.5, icon:'🌄', loc:'山頂 ご来光（3,776m）',temp:'1℃',  note:'体感 −5℃以下も · 風強い',          t:1.00, hl:true },
      { day:'7/27', time:'05:30', h: 5.5, icon:'🔵', loc:'お鉢巡り',             temp:'2℃',  note:'時計回り 約3.5km',                  t:1.00 },
      { day:'7/27', time:'07:00', h: 7.0, icon:'⬇️', loc:'下山開始',             temp:'↑',   note:'吉田ルート下山道（砂礫）',          t:0.55 },
      { day:'7/27', time:'10:00', h:10.0, icon:'✅', loc:'五合目 下山完了',      temp:'16℃', note:'シャトルバスで麓へ',                t:0.00, hl:true },
    ],
  },
};

const TEMPS = [
  { alt:'2,305m', place:'五合目・六合目（星観荘）', day:'約15℃', night:'約8〜10℃' },
  { alt:'2,700m', place:'七合目',                   day:'約13℃', night:'約5〜7℃'  },
  { alt:'3,100m', place:'八合目',                   day:'約10℃', night:'約2〜4℃'  },
  { alt:'3,450m', place:'八合五勺',                 day:'約8℃',  night:'約0〜2℃'  },
  { alt:'3,776m', place:'山頂',                     day:'約5〜7℃', night:'約0〜3℃（体感−5℃以下も）' },
];

const GEAR = [
  { cat:'👕 服装・ウェア', items:[
    { name:'吸湿速乾インナー（長袖）', note:'綿はNG、汗冷えで低体温症リスク', req:true },
    { name:'長袖シャツ', note:'行動中のベースレイヤー', req:true },
    { name:'フリース / 中綿ジャケット', note:'七合目以上から必要', req:true },
    { name:'レインウェア 上下', note:'防寒・防風を兼ねる。ゴアテックス推奨', req:true },
    { name:'登山パンツ', note:'ジーンズ厳禁（重い・乾かない）', req:true },
    { name:'厚手の手袋', note:'山頂は指先が悴む', req:true },
    { name:'ニット帽・ネックウォーマー', note:'深夜の寒さ対策', pb:true },
    { name:'日差し用帽子（つば付き）', note:'紫外線対策', pa:true },
    { name:'トレッキングシューズ（ハイカット）', note:'スニーカー不可', req:true },
    { name:'厚手の登山用靴下＋替え', req:true },
  ]},
  { cat:'🔦 装備・道具', items:[
    { name:'ヘッドライト＋予備電池', note:'スマホライト不可', pb:true },
    { name:'登山用ストック', note:'下山の膝負担を大幅軽減' },
    { name:'ヘルメット', note:'六合目で貸出可（2,000円デポジット）' },
    { name:'リュック（20〜30L）', req:true },
    { name:'ゴミ袋・ジップロック', note:'山内ゴミ捨て不可', req:true },
    { name:'モバイルバッテリー', note:'寒さで電池消耗が激しい', req:true },
  ]},
  { cat:'🍙 食料・飲料', items:[
    { name:'水 1.5〜2L / 人', note:'山小屋でも買えるが高額（500円〜）', req:true },
    { name:'行動食（チョコ・ゼリー・おにぎり）', note:'こまめにエネルギー補給', req:true },
    { name:'温かい飲み物（魔法瓶）', note:'深夜の寒さに効果大', pb:true },
    { name:'塩分補給タブレット', note:'電解質補給' },
  ]},
  { cat:'💊 薬・衛生用品', items:[
    { name:'高山病薬（ダイアモックス）', note:'要医師処方・前日から服用', req:true },
    { name:'頭痛薬', note:'高山病の頭痛に', req:true },
    { name:'胃腸薬', req:true },
    { name:'絆創膏・テーピング', note:'靴擦れ対策', req:true },
    { name:'日焼け止め SPF50以上', note:'標高が上がるほど紫外線が強い', req:true },
    { name:'サングラス（スポーツタイプ）', note:'隙間から光が入らないものを', req:true },
    { name:'リップクリーム' },
  ]},
  { cat:'💴 お金・書類', items:[
    { name:'通行料 4,000円 / 人', note:'事前オンラインor当日窓口', req:true },
    { name:'トイレ代の小銭（200〜300円 × 複数回）', req:true },
    { name:'健康保険証', req:true },
    { name:'スマホ（フル充電）', req:true },
  ]},
];

/* ═══════════════════════════════════════════════════════════════
   GEO CONFIGURATION  (国土地理院タイル, from FUJI3D)
   ═══════════════════════════════════════════════════════════════ */

const Z       = 12;
const GRID_W  = 4;
const GRID_H  = 4;
const TILE_X0 = 3624;
const TILE_Y0 = 1616;
const TS      = 256;
const DW      = GRID_W * TS;   // 1024
const DH      = GRID_H * TS;   // 1024
const WORLD   = 20.0;
const HSCALE  = 0.00095;
const SEG     = 511;

/* ═══════════════════════════════════════════════════════════════
   GEO-MATH  (Mercator projection, from FUJI3D)
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

function lon2wx(lon) { return (lon - lonMin) / (lonMax - lonMin) * WORLD - WORLD * 0.5; }
function lat2wz(lat) {
  const py = (mercMax - _mercY(lat)) / (mercMax - mercMin) * DH;
  return py / DH * WORLD - WORLD * 0.5;
}
function lon2px(lon) { return (lon - lonMin) / (lonMax - lonMin) * DW; }
function lat2py(lat) { return (mercMax - _mercY(lat)) / (mercMax - mercMin) * DH; }

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function lerp(a, b, t)    { return a + (b - a) * t; }
function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

let hmap = null;

function bilinear(px, py) {
  if (!hmap) return 0;
  const x0 = clamp(px | 0, 0, DW - 1), y0 = clamp(py | 0, 0, DH - 1);
  const x1 = Math.min(x0 + 1, DW - 1),  y1 = Math.min(y0 + 1, DH - 1);
  const fx  = px - x0, fy = py - y0;
  return (hmap[y0 * DW + x0] * (1 - fx) + hmap[y0 * DW + x1] * fx) * (1 - fy)
       + (hmap[y1 * DW + x0] * (1 - fx) + hmap[y1 * DW + x1] * fx) * fy;
}

function geoH(lat, lon)     { return bilinear(lon2px(lon), lat2py(lat)) * HSCALE; }
function geo3(lat, lon, dy) { return new THREE.Vector3(lon2wx(lon), geoH(lat, lon) + (dy || 0.03), lat2wz(lat)); }

/* ═══════════════════════════════════════════════════════════════
   YOSHIDA ROUTE  (waypoints for real-terrain marker positioning)
   t=0 → trailhead 2,305m  /  t=1 → summit 3,710m
   ═══════════════════════════════════════════════════════════════ */

const YOSHIDA_WPS = [
  { t:0.00, lat:35.3971, lon:138.7232, alt:2305 },
  { t:0.07, lat:35.3935, lon:138.7236, alt:2380 },
  { t:0.09, lat:35.3897, lon:138.7241, alt:2390 },
  { t:0.16, lat:35.3862, lon:138.7246, alt:2490 },
  { t:0.20, lat:35.3829, lon:138.7250, alt:2540 },
  { t:0.38, lat:35.3797, lon:138.7254, alt:2700 },
  { t:0.40, lat:35.3769, lon:138.7257, alt:2720 },
  { t:0.52, lat:35.3742, lon:138.7260, alt:2920 },
  { t:0.62, lat:35.3716, lon:138.7263, alt:3100 },
  { t:0.72, lat:35.3691, lon:138.7266, alt:3250 },
  { t:0.82, lat:35.3667, lon:138.7268, alt:3400 },
  { t:0.86, lat:35.3649, lon:138.7270, alt:3450 },
  { t:0.90, lat:35.3636, lon:138.7275, alt:3600 },
  { t:0.96, lat:35.3628, lon:138.7288, alt:3700 },
  { t:1.00, lat:35.3634, lon:138.7308, alt:3710 },
];

const SUMMIT    = { lat:35.3606, lon:138.7274 };
const TRAILHEAD = { lat:35.3971, lon:138.7232 };

// Interpolate a geo position + elevation from t (0–1)
function tToPos(t) {
  if (t <= 0) return { ...YOSHIDA_WPS[0] };
  if (t >= 1) return { ...YOSHIDA_WPS[YOSHIDA_WPS.length - 1] };
  for (let i = 1; i < YOSHIDA_WPS.length; i++) {
    if (t <= YOSHIDA_WPS[i].t) {
      const a = YOSHIDA_WPS[i - 1], b = YOSHIDA_WPS[i];
      const f = (t - a.t) / (b.t - a.t);
      return { t, lat: lerp(a.lat, b.lat, f), lon: lerp(a.lon, b.lon, f), alt: Math.round(lerp(a.alt, b.alt, f)) };
    }
  }
  return { ...YOSHIDA_WPS[YOSHIDA_WPS.length - 1] };
}

/* ═══════════════════════════════════════════════════════════════
   APP STATE
   ═══════════════════════════════════════════════════════════════ */

let currentPlan    = 'A';
let selectedStep   = -1;
let checkedGear    = loadGearState();
let isPlaying      = false;
let playbackIdx    = 0;
let playbackTimeout = null;
let viewMode       = false;

function loadGearState() {
  try { const s = localStorage.getItem('fujinfo-gear-2026'); return s ? new Set(JSON.parse(s)) : new Set(); }
  catch(e) { return new Set(); }
}
function saveGearState() {
  try { localStorage.setItem('fujinfo-gear-2026', JSON.stringify([...checkedGear])); } catch(e) {}
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS STATE
   ═══════════════════════════════════════════════════════════════ */

let renderer, scene, camera, clock;
let terrainMesh  = null;
let markerMesh   = null, markerMat = null;
let summitRing   = null;
let routeTube    = null;

// Sky / atmosphere
let ambient, sunLightDir, fillLight;
let stars, moon, moonMat;
let sunMesh, sunCoreMat;
const sunGlowMats = [];
let dawnGlowMesh, dawnGlowMat;
const clouds = [];

// Sun position interpolation targets
let sunAltCurrent = -1.0, sunAzCurrent = 1.1;
let sunAltTarget  = -1.0, sunAzTarget  = 1.1;

// Marker position on route
let markerT       = 0.00;
let markerTargetT = 0.00;

// Camera orbit
let orbitTheta  =  0.45;
let orbitPhi    =  0.72;
let orbitRadius = 11.0;
const orbitTarget = new THREE.Vector3(0, 2.0, 0);
let targetTheta  = null;
let autoRotate   = true;

// Pre-allocated temporaries
const _skyCfg = {
  bg: new THREE.Color(), ambient: new THREE.Color(),
  dir: new THREE.Color(), sunSphere: new THREE.Color(), sunGlow: new THREE.Color(),
};
const _rc   = new THREE.Color();
const _proj = new THREE.Vector3();

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
   SUN / SKY SYSTEM  (from FUJI — fully dynamic, timeline-driven)
   ═══════════════════════════════════════════════════════════════ */

// Astronomical solar position for Mt. Fuji (35.36°N) on July 27
function calcSunPos(hourJST) {
  const DEG       = Math.PI / 180;
  const lat       = 35.36 * DEG;
  const decl      = 19.2  * DEG;    // declination July 27
  const solarNoon = 11.78;           // JST solar noon at 138.73°E
  const H         = (hourJST - solarNoon) * 15 * DEG;
  const sinAlt    = Math.sin(lat) * Math.sin(decl) + Math.cos(lat) * Math.cos(decl) * Math.cos(H);
  const altitude  = Math.asin(clamp(sinAlt, -1, 1));
  const cosAlt    = Math.cos(altitude);
  const cosAz     = cosAlt > 0.001
    ? (Math.sin(decl) - Math.sin(lat) * sinAlt) / (Math.cos(lat) * cosAlt) : 0;
  let azimuth = Math.acos(clamp(cosAz, -1, 1));
  if (hourJST > solarNoon) azimuth = 2 * Math.PI - azimuth;
  return { altitude, azimuth };
}

function getSunWorldPos(alt, az, r) {
  return new THREE.Vector3(
     r * Math.cos(alt) * Math.sin(az),
     r * Math.sin(alt),
    -r * Math.cos(alt) * Math.cos(az)
  );
}

// Key sky colour presets keyed by sun altitude
const SKY = {
  N:  { bg:0x010508, amb:0x06101e, ambI:0.30, dirI:0.04, sunI:0.0,  sS:0xfff5e0, gO1:0.00, gO2:0.00, dgO:0.00, stars:1.00 },
  PD: { bg:0x0d0610, amb:0x14081c, ambI:0.35, dirI:0.08, sunI:0.0,  sS:0xff9944, gO1:0.00, gO2:0.00, dgO:0.15, stars:0.85 },
  SR: { bg:0x220b06, amb:0x3d1408, ambI:0.44, dirI:0.55, sunI:1.0,  sS:0xff8833, gO1:0.28, gO2:0.12, dgO:0.55, stars:0.25 },
  GH: { bg:0x2e2030, amb:0x503040, ambI:0.55, dirI:0.85, sunI:1.4,  sS:0xffdd88, gO1:0.22, gO2:0.09, dgO:0.18, stars:0.05 },
  MO: { bg:0x284870, amb:0x507890, ambI:0.68, dirI:1.05, sunI:1.8,  sS:0xfff0cc, gO1:0.18, gO2:0.07, dgO:0.00, stars:0.00 },
  MD: { bg:0x1a6090, amb:0x7aaabb, ambI:0.80, dirI:1.60, sunI:2.2,  sS:0xffffff, gO1:0.14, gO2:0.06, dgO:0.00, stars:0.00 },
};

function _lerpSkyNum(a, b, t, k)      { return a[k] + (b[k] - a[k]) * t; }
function _lerpSkyColor(out, hA, hB, t) { out.setHex(hA).lerp(_rc.setHex(hB), t); }

function updateSunScene(alt, az) {
  // Position sun sphere and directional light
  const sp = getSunWorldPos(alt, az, 22);
  sunMesh.position.copy(sp);
  sunLightDir.position.copy(sp);
  sunMesh.visible = alt > -0.28;

  // Dawn glow plane faces the sun at the horizon
  if (alt > -0.30 && alt < 0.35) {
    const hx = Math.sin(az), hz = -Math.cos(az);
    dawnGlowMesh.position.set(hx * 11, 0.35, hz * 11);
    dawnGlowMesh.lookAt(0, 0.35, 0);
  }

  // Interpolate between sky presets based on altitude
  let a, b, t;
  if      (alt < -0.12) { a = SKY.N;  b = SKY.PD; t = clamp((alt + 0.50) / 0.38, 0, 1); }
  else if (alt <  0.00) { a = SKY.PD; b = SKY.SR; t = (alt + 0.12) / 0.12; }
  else if (alt <  0.20) { a = SKY.SR; b = SKY.GH; t = alt / 0.20; }
  else if (alt <  0.45) { a = SKY.GH; b = SKY.MO; t = (alt - 0.20) / 0.25; }
  else                  { a = SKY.MO; b = SKY.MD; t = clamp((alt - 0.45) / 0.35, 0, 1); }

  _lerpSkyColor(_skyCfg.bg,        a.bg,  b.bg,  t);
  _lerpSkyColor(_skyCfg.ambient,   a.amb, b.amb, t);
  _lerpSkyColor(_skyCfg.sunSphere, a.sS,  b.sS,  t);

  scene.background.copy(_skyCfg.bg);
  scene.fog.color.copy(_skyCfg.bg);
  ambient.color.copy(_skyCfg.ambient);
  ambient.intensity = _lerpSkyNum(a, b, t, 'ambI');

  sunLightDir.intensity = _lerpSkyNum(a, b, t, 'sunI');
  _lerpSkyColor(_skyCfg.dir, 0xff6622, 0xffe8d0, clamp(alt / 0.80, 0, 1));
  sunLightDir.color.copy(_skyCfg.dir);

  fillLight.intensity = clamp(0.5 - alt * 2.0, 0, 0.5) * 0.5;

  sunCoreMat.color.copy(_skyCfg.sunSphere);
  sunGlowMats[0].opacity = _lerpSkyNum(a, b, t, 'gO1');
  sunGlowMats[1].opacity = _lerpSkyNum(a, b, t, 'gO2');

  dawnGlowMat.opacity = _lerpSkyNum(a, b, t, 'dgO');
  _lerpSkyColor(_skyCfg.sunGlow, 0xff3300, 0xffaa44, clamp(alt / 0.20, 0, 1));
  dawnGlowMat.color.copy(_skyCfg.sunGlow);

  const stOp = _lerpSkyNum(a, b, t, 'stars');
  stars.material.opacity = stOp;
  stars.visible = stOp > 0.01;
  moon.visible  = stOp > 0.20;
  moonMat.emissiveIntensity = 1.2 * Math.min(stOp, 1);
}

/* ═══════════════════════════════════════════════════════════════
   DATA LOADERS  (GSI タイル, from FUJI3D)
   ═══════════════════════════════════════════════════════════════ */

async function loadDEM() {
  const buf  = new Float32Array(DW * DH);
  let   done = 0;
  const n    = GRID_W * GRID_H;
  await Promise.all(
    Array.from({ length: n }, (_, i) => {
      const tx = i % GRID_W, ty = (i / GRID_W) | 0;
      const url = `https://cyberjapandata.gsi.go.jp/xyz/dem/${Z}/${TILE_X0+tx}/${TILE_Y0+ty}.txt`;
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
              if (isFinite(v) && cell.trim() !== 'e') {
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

async function loadPhotoCanvas() {
  const cv  = document.createElement('canvas');
  cv.width  = DW; cv.height = DH;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#1e2e14';
  ctx.fillRect(0, 0, DW, DH);
  let   done = 0;
  const n    = GRID_W * GRID_H;
  await Promise.all(
    Array.from({ length: n }, (_, i) => {
      const tx = i % GRID_W, ty = (i / GRID_W) | 0;
      const url = `https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/${Z}/${TILE_X0+tx}/${TILE_Y0+ty}.jpg`;
      return new Promise(res => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload  = () => { ctx.drawImage(img, tx*TS, ty*TS, TS, TS); done++; setProgress(48 + done/n*47, `空中写真読込中… ${done}/${n}`); res(); };
        img.onerror = () => { done++; res(); };
        img.src = url;
      });
    })
  );
  return cv;
}

/* ═══════════════════════════════════════════════════════════════
   SCENE BUILDERS
   ═══════════════════════════════════════════════════════════════ */

function buildLights() {
  ambient = new THREE.AmbientLight(0x06101e, 0.30);
  scene.add(ambient);

  sunLightDir = new THREE.DirectionalLight(0xffe8c0, 0.0);
  scene.add(sunLightDir);

  // Warm horizon fill — intensity driven by sky system
  fillLight = new THREE.PointLight(0xff6633, 0.3, 35);
  fillLight.position.set(5, 1, 5);
  scene.add(fillLight);
}

function buildSun() {
  sunCoreMat = new THREE.MeshBasicMaterial({ color: 0xfffae8, fog: false });
  sunMesh    = new THREE.Mesh(new THREE.SphereGeometry(1.0, 24, 24), sunCoreMat);

  const g1Mat = new THREE.MeshBasicMaterial({
    color: 0xffe066, transparent: true, opacity: 0.22,
    side: THREE.BackSide, fog: false, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  sunMesh.add(new THREE.Mesh(new THREE.SphereGeometry(1.9, 16, 16), g1Mat));
  sunGlowMats.push(g1Mat);

  const g2Mat = new THREE.MeshBasicMaterial({
    color: 0xff8800, transparent: true, opacity: 0.09,
    side: THREE.BackSide, fog: false, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  sunMesh.add(new THREE.Mesh(new THREE.SphereGeometry(3.2, 16, 16), g2Mat));
  sunGlowMats.push(g2Mat);

  sunMesh.position.set(18, -2, -8);
  scene.add(sunMesh);
}

function buildMoon() {
  moonMat = new THREE.MeshStandardMaterial({ color: 0xfff5e0, emissive: 0xfff5e0, emissiveIntensity: 1.2, roughness: 0.85 });
  moon    = new THREE.Mesh(new THREE.SphereGeometry(0.38, 20, 20), moonMat);
  moon.position.set(-7, 13, -15);
  moon.add(new THREE.Mesh(
    new THREE.SphereGeometry(0.65, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xfff5e0, transparent: true, opacity: 0.06, side: THREE.BackSide })
  ));
  scene.add(moon);
}

function buildStars() {
  const N = 1800;
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    const r  = 23 + Math.random() * 4;
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
    pos[i*3+2] = r * Math.cos(ph);
    const w = Math.random();
    col[i*3] = 0.80 + w * 0.20; col[i*3+1] = 0.86 + w * 0.12; col[i*3+2] = 1.00;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  stars = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.11, vertexColors: true, transparent: true, opacity: 1.0, sizeAttenuation: true }));
  scene.add(stars);
}

function buildDawnGlow() {
  dawnGlowMat  = new THREE.MeshBasicMaterial({
    color: 0xff4400, transparent: true, opacity: 0,
    side: THREE.DoubleSide, fog: false, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  dawnGlowMesh = new THREE.Mesh(new THREE.PlaneGeometry(20, 5), dawnGlowMat);
  dawnGlowMesh.position.set(0, 0.2, 0);
  scene.add(dawnGlowMesh);
}

function buildClouds() {
  const blobs = [[0,0,0,1],[0.4,0.08,0,0.72],[-0.35,0.05,0,0.68],[0.12,0.22,0,0.55],[-0.08,0.26,0,0.45]];
  const configs = [
    { x:-2.5, y:2.4, z: 2.2, s:0.30 }, { x: 3.0, y:2.6, z: 1.6, s:0.24 },
    { x:-3.5, y:2.9, z: 0.8, s:0.22 }, { x: 2.0, y:2.2, z: 3.0, s:0.26 },
    { x:-1.8, y:3.3, z: 2.0, s:0.20 }, { x: 3.4, y:2.5, z: 0.3, s:0.22 },
  ];
  const baseMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.45, roughness: 1.0, depthWrite: false });
  configs.forEach(cfg => {
    const g = new THREE.Group();
    blobs.forEach(([cx, cy, cz, sc]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.32 * sc, 7, 7), baseMat.clone());
      m.position.set(cx * cfg.s * 3, cy * cfg.s * 3, cz * cfg.s * 3);
      g.add(m);
    });
    g.position.set(cfg.x, cfg.y, cfg.z);
    g.scale.setScalar(cfg.s * 3.5);
    g.userData.base = { x: cfg.x, y: cfg.y };
    scene.add(g);
    clouds.push(g);
  });
}

// Real DEM terrain with aerial photo texture (from FUJI3D)
function buildTerrain(heights, photoCanvas) {
  const geo = new THREE.PlaneGeometry(WORLD, WORLD, SEG, SEG);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const xi = i % (SEG + 1), yi = (i / (SEG + 1)) | 0;
    pos.setZ(i, bilinear(xi / SEG * (DW - 1), yi / SEG * (DH - 1)) * HSCALE);
  }
  pos.needsUpdate = true;
  geo.rotateX(-Math.PI / 2);
  geo.computeVertexNormals();

  const tex = new THREE.CanvasTexture(photoCanvas);
  tex.minFilter = THREE.LinearFilter;
  terrainMesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88, metalness: 0.0 }));
  scene.add(terrainMesh);
}

// Yoshida route rendered on real terrain surface
function buildRouteOnTerrain() {
  const STEPS = 20;
  const pts = [];
  for (let wi = 0; wi < YOSHIDA_WPS.length - 1; wi++) {
    const from = YOSHIDA_WPS[wi], to = YOSHIDA_WPS[wi + 1];
    for (let i = 0; i < STEPS; i++) {
      const f = i / STEPS;
      pts.push(geo3(lerp(from.lat, to.lat, f), lerp(from.lon, to.lon, f)));
    }
  }
  pts.push(geo3(YOSHIDA_WPS[YOSHIDA_WPS.length - 1].lat, YOSHIDA_WPS[YOSHIDA_WPS.length - 1].lon));

  const curve   = new THREE.CatmullRomCurve3(pts);
  routeTube     = new THREE.Mesh(
    new THREE.TubeGeometry(curve, pts.length * 2, 0.010, 5, false),
    new THREE.MeshBasicMaterial({ color: 0x44bbff, transparent: true, opacity: 0.90 })
  );
  scene.add(routeTube);

  // Waypoint dots
  YOSHIDA_WPS.forEach((wp, wi) => {
    const r = (wi === 0 || wi === YOSHIDA_WPS.length - 1) ? 0.028 : 0.016;
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x44bbff })
    );
    m.position.copy(geo3(wp.lat, wp.lon, 0.04));
    scene.add(m);
  });
}

// Climber marker — animated sphere on real terrain
function buildMarker() {
  markerMat  = new THREE.MeshStandardMaterial({ color: 0x00ffee, emissive: 0x00ffee, emissiveIntensity: 3.5 });
  markerMesh = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 16), markerMat);
  markerMesh.add(new THREE.Mesh(
    new THREE.SphereGeometry(0.11, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00ffee, transparent: true, opacity: 0.12, side: THREE.BackSide })
  ));
  markerMesh.position.copy(geo3(TRAILHEAD.lat, TRAILHEAD.lon, 0.10));
  scene.add(markerMesh);
}

// Gold summit marker + spinning ring
function buildSummitMarker() {
  const sPos = geo3(SUMMIT.lat, SUMMIT.lon, 0.06);
  const s    = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffd700 }));
  s.position.copy(sPos);
  scene.add(s);

  summitRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.10, 0.006, 6, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.60 })
  );
  summitRing.position.copy(sPos);
  scene.add(summitRing);
}

/* ═══════════════════════════════════════════════════════════════
   ORBIT CONTROLS  (drag / pinch-zoom / wheel, from FUJI3D)
   ═══════════════════════════════════════════════════════════════ */

let pointerDown = false, pointerX = 0, pointerY = 0;
let pinchDist0  = 0,     pinchRad0 = 0;

function setupControls() {
  const el = renderer.domElement;

  el.addEventListener('mousedown', e => {
    pointerDown = true; autoRotate = false; targetTheta = null;
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
    orbitRadius = clamp(orbitRadius + e.deltaY * 0.008, 2.5, 22);
    applyOrbit();
  }, { passive: true });

  el.addEventListener('touchstart', e => {
    e.preventDefault(); autoRotate = false; targetTheta = null;
    if (e.touches.length === 1) {
      pointerDown = true;
      pointerX = e.touches[0].clientX; pointerY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      pointerDown = false;
      pinchDist0  = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      pinchRad0   = orbitRadius;
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
      const dist  = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      orbitRadius = clamp(pinchRad0 * (pinchDist0 / dist), 2.5, 22);
      applyOrbit();
    }
  }, { passive: false });

  el.addEventListener('touchend', e => { if (e.touches.length === 0) pointerDown = false; });
}

/* ═══════════════════════════════════════════════════════════════
   VIEW PRESETS  (quick camera positions)
   ═══════════════════════════════════════════════════════════════ */

function setView(preset) {
  autoRotate  = false;
  targetTheta = null;

  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('vbtn-' + preset);
  if (btn) btn.classList.add('active');

  if (preset === 'full') {
    orbitRadius = 13; orbitPhi = 0.70; orbitTheta = 0.45;
    orbitTarget.set(
      lon2wx(SUMMIT.lon),
      hmap ? geoH(SUMMIT.lat, SUMMIT.lon) * 0.50 : 2.0,
      lat2wz(SUMMIT.lat)
    );
  } else if (preset === 'mid') {
    const wp = YOSHIDA_WPS[5]; // 七合目
    orbitRadius = 5.5; orbitPhi = 0.88; orbitTheta = -0.45;
    orbitTarget.set(
      lon2wx(wp.lon),
      hmap ? geoH(wp.lat, wp.lon) + 0.3 : 2.7,
      lat2wz(wp.lat)
    );
  } else if (preset === 'summit') {
    orbitRadius = 3.0; orbitPhi = 0.52; orbitTheta = 0.20;
    orbitTarget.set(
      lon2wx(SUMMIT.lon),
      hmap ? geoH(SUMMIT.lat, SUMMIT.lon) + 0.15 : 3.6,
      lat2wz(SUMMIT.lat)
    );
  }
  applyOrbit();
}

/* ═══════════════════════════════════════════════════════════════
   3D LABELS  (project geo-positions to screen space)
   ═══════════════════════════════════════════════════════════════ */

const labelDefs = [
  { id: 'label-trail',  lat: TRAILHEAD.lat, lon: TRAILHEAD.lon, dy: 0.30 },
  { id: 'label-summit', lat: SUMMIT.lat,    lon: SUMMIT.lon,    dy: 0.32 },
];

const labelPts = {};
labelDefs.forEach(d => { labelPts[d.id] = new THREE.Vector3(lon2wx(d.lon), 0, lat2wz(d.lat)); });

function updateLabels() {
  labelDefs.forEach(d => {
    const el = document.getElementById(d.id);
    if (!el) return;
    _proj.copy(labelPts[d.id]).project(camera);
    const x = ( _proj.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-_proj.y * 0.5 + 0.5) * window.innerHeight;
    if (_proj.z >= 1 || x < -80 || x > window.innerWidth + 80 || y < -50 || y > window.innerHeight + 50) {
      el.style.display = 'none';
    } else {
      el.style.display   = 'block';
      el.style.left      = x + 'px';
      el.style.top       = y + 'px';
      el.style.transform = 'translate(-50%, -50%)';
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   HUD  →  Step info strip
   ═══════════════════════════════════════════════════════════════ */

function updateHUD(step) {
  const strip = document.getElementById('step-strip');
  if (!strip) return;

  if (!step) {
    strip.classList.add('hidden');
    return;
  }

  const pos   = tToPos(step.t);
  const altM  = pos.alt;
  const tempC = (step.temp && step.temp !== '↑')
    ? step.temp
    : `約${Math.round(15 - (altM - 2305) * 0.0065)}℃`;

  const windBase = 5 + (altM - 2305) / 300;
  const windMin  = Math.round(windBase);
  const windMax  = Math.round(windBase + 5 + (sunAltCurrent < 0 ? 3 : 0));

  document.getElementById('ss-time').textContent = step.time;
  document.getElementById('ss-loc').textContent  = step.loc;
  document.getElementById('ss-alt').textContent  = `📍${altM.toLocaleString()}m`;
  document.getElementById('ss-temp').textContent = `🌡${tempC}`;
  document.getElementById('ss-wind').textContent = `💨${windMin}〜${windMax}m/s`;

  strip.classList.remove('hidden');
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATION LOOP
   ═══════════════════════════════════════════════════════════════ */

let _time = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  _time += dt;

  // Smooth camera orbit toward target angle
  if (targetTheta !== null) {
    let diff = ((targetTheta - orbitTheta + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    orbitTheta += diff * Math.min(dt * 2.8, 0.9);
    applyOrbit();
    if (Math.abs(diff) < 0.015) { orbitTheta = targetTheta; targetTheta = null; applyOrbit(); }
  } else if (autoRotate) {
    orbitTheta += dt * 0.055;
    applyOrbit();
  }

  // Marker t-value lerp
  markerT += (markerTargetT - markerT) * Math.min(dt * 2.0, 0.10);

  // Move marker to interpolated position on real terrain
  if (hmap && markerMesh) {
    const pos = tToPos(markerT);
    const wp3 = geo3(pos.lat, pos.lon, 0.10);
    markerMesh.position.lerp(wp3, 0.15);
  }

  // Marker pulse animation
  if (markerMesh) markerMesh.scale.setScalar(1 + 0.20 * Math.sin(_time * 4.0));

  // Marker glow breathe
  if (markerMat) markerMat.emissiveIntensity = 3.0 + 0.7 * Math.sin(_time * 1.8);

  // Summit ring slow spin
  if (summitRing) summitRing.rotation.y += dt * 0.5;

  // Star field slow drift
  if (stars) stars.rotation.y += dt * 0.006;

  // Cloud drift
  clouds.forEach((c, i) => {
    c.position.x = c.userData.base.x + Math.sin(_time * 0.16 + i * 1.1) * 0.26;
    c.position.y = c.userData.base.y + Math.sin(_time * 0.11 + i * 0.7) * 0.09;
    const dayF = clamp(sunAltCurrent / 0.5, 0, 1);
    c.children.forEach(ch => { if (ch.material) ch.material.opacity = 0.20 + dayF * 0.30; });
  });

  // Sun altitude / azimuth lerp
  const sl = dt * 1.5;
  sunAltCurrent += (sunAltTarget - sunAltCurrent) * sl;
  let daz = sunAzTarget - sunAzCurrent;
  if (daz >  Math.PI) daz -= 2 * Math.PI;
  if (daz < -Math.PI) daz += 2 * Math.PI;
  sunAzCurrent += daz * sl;

  updateSunScene(sunAltCurrent, sunAzCurrent);
  updateLabels();

  renderer.render(scene, camera);
}

/* ═══════════════════════════════════════════════════════════════
   TAB NAVIGATION
   ═══════════════════════════════════════════════════════════════ */

function showTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const active = btn.dataset.tab === tabName;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  document.querySelectorAll('.pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === 'pane-' + tabName);
  });
}

/* ═══════════════════════════════════════════════════════════════
   PROGRESS / LOADING
   ═══════════════════════════════════════════════════════════════ */

function setProgress(pct, msg) {
  const fill = document.getElementById('load-fill');
  const text = document.getElementById('load-msg');
  if (fill) fill.style.width = clamp(pct, 0, 100) + '%';
  if (msg && text) text.textContent = msg;
}

/* ═══════════════════════════════════════════════════════════════
   UI BUILDERS
   ═══════════════════════════════════════════════════════════════ */

function _fmtDay(d) {
  const [m, dd] = d.split('/').map(Number);
  const dow = ['日','月','火','水','木','金','土'][new Date(2026, m - 1, dd).getDay()];
  return `${m}月${dd}日（${dow}）`;
}

function buildTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = '';
  const steps = PLANS[currentPlan].steps;
  let lastDay  = null;

  steps.forEach((s, i) => {
    if (s.day !== lastDay) {
      const sep = document.createElement('div');
      sep.className   = 'day-sep';
      sep.textContent = _fmtDay(s.day);
      el.appendChild(sep);
      lastDay = s.day;
    }

    const isFirst = i === 0, isLast = i === steps.length - 1;
    const div = document.createElement('div');
    div.className  = 't-step' + (s.hl ? ' hl' : '');
    div.dataset.idx = i;
    div.setAttribute('role', 'listitem');
    div.innerHTML = `
      <div class="t-conn">
        <div class="t-line${isFirst ? ' invisible' : ''}"></div>
        <div class="t-dot"></div>
        <div class="t-line${isLast ? ' invisible' : ''}"></div>
      </div>
      <div class="t-card">
        <div class="t-top">
          <span class="t-time">${s.time}</span>
          <span class="t-icon">${s.icon}</span>
          <span class="t-loc">${s.loc}</span>
        </div>
        ${(s.note || s.temp) ? `<div class="t-bottom">
          ${s.note ? `<span class="t-note">${s.note}</span>` : ''}
          ${s.temp ? `<span class="t-temp-badge">${s.temp}</span>` : ''}
        </div>` : ''}
      </div>`;
    div.addEventListener('click', () => onStepSelect(i, s.t));
    el.appendChild(div);
  });
}

function buildTemps() {
  const plan = currentPlan;
  document.getElementById('temp-list').innerHTML = TEMPS.map(t => `
    <div class="temp-item" role="listitem">
      <span class="temp-alt-badge">${t.alt}</span>
      <span class="temp-place">${t.place}</span>
      <div class="temp-vals">
        <span class="temp-day-v">${t.day}</span>
        <span class="temp-night-v">${plan === 'B' ? t.night : t.day}</span>
      </div>
    </div>`).join('');
}

function buildGear() {
  const el = document.getElementById('gear-list');
  el.innerHTML = '';
  let total = 0, done = 0;

  GEAR.forEach(cat => {
    const group = document.createElement('div');
    group.className = 'gear-group';
    group.setAttribute('role', 'listitem');

    const head = document.createElement('div');
    head.className   = 'gear-group-header';
    head.textContent = cat.cat;
    group.appendChild(head);

    cat.items.forEach(item => {
      total++;
      const key     = item.name;
      const checked = checkedGear.has(key);
      if (checked) done++;

      let tag = '';
      if      (item.req) tag = '<span class="g-tag g-tag-req">必須</span>';
      else if (item.pa)  tag = '<span class="g-tag g-tag-a">Plan A</span>';
      else if (item.pb)  tag = '<span class="g-tag g-tag-b">Plan B</span>';

      const row = document.createElement('div');
      row.className = 'gear-item' + (checked ? ' done' : '');
      row.innerHTML = `
        <div class="g-check">${checked ? '✓' : ''}</div>
        <div class="g-body">
          <div class="g-name">${item.name}</div>
          ${item.note ? `<div class="g-note">${item.note}</div>` : ''}
        </div>
        ${tag}`;
      row.addEventListener('click', () => toggleGear(key, row));
      group.appendChild(row);
    });
    el.appendChild(group);
  });

  document.getElementById('gear-progress').textContent = `${done} / ${total} 完了`;
  updateGearBadge(done);
}

function updateGearBadge(count) {
  const badge = document.getElementById('gear-badge');
  if (!badge) return;
  if (count > 0) {
    badge.textContent = count;
    badge.classList.add('show');
  } else {
    badge.classList.remove('show');
  }
}

function toggleGear(key, row) {
  if (checkedGear.has(key)) {
    checkedGear.delete(key);
    row.classList.remove('done');
    row.querySelector('.g-check').textContent = '';
  } else {
    checkedGear.add(key);
    row.classList.add('done');
    row.querySelector('.g-check').textContent = '✓';
  }
  saveGearState();
  const all  = document.querySelectorAll('.gear-item').length;
  const done = document.querySelectorAll('.gear-item.done').length;
  document.getElementById('gear-progress').textContent = `${done} / ${all} 完了`;
  updateGearBadge(done);
}

function resetGear() {
  checkedGear.clear();
  saveGearState();
  buildGear();
}

/* ═══════════════════════════════════════════════════════════════
   STEP SELECTION & PLAN SWITCHING
   ═══════════════════════════════════════════════════════════════ */

function onStepSelect(idx, t) {
  selectedStep  = idx;
  markerTargetT = t;

  const step = PLANS[currentPlan].steps[idx];
  if (step && step.h !== undefined) {
    const sp = calcSunPos(step.h);
    sunAltTarget = sp.altitude;
    sunAzTarget  = sp.azimuth;
    updateHUD(step);
  }

  // Smoothly face the marker position and adjust zoom by elevation
  if (hmap) {
    const pos = tToPos(t);
    const wx  = lon2wx(pos.lon), wz = lat2wz(pos.lat);
    const dx  = wx - orbitTarget.x, dz = wz - orbitTarget.z;
    targetTheta = Math.atan2(dx, dz) + Math.PI * 0.25;
    orbitRadius = t >= 0.90 ? 3.5 : t >= 0.60 ? 5.5 : t >= 0.30 ? 7.5 : 9.0;
  }

  document.querySelectorAll('.t-step').forEach((el, i) => el.classList.toggle('sel', i === idx));

  // Scroll selected step into view within the pane
  const stepEls = document.querySelectorAll('.t-step');
  if (stepEls[idx]) {
    stepEls[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function switchPlan(plan) {
  if (currentPlan === plan) return;
  currentPlan = plan;
  document.body.classList.remove('plan-a', 'plan-b');
  document.body.classList.add('plan-' + plan.toLowerCase());

  document.getElementById('btn-a').classList.toggle('active', plan === 'A');
  document.getElementById('btn-b').classList.toggle('active', plan === 'B');

  const p = PLANS[plan];
  document.getElementById('ps-ico').textContent   = p.icon;
  document.getElementById('ps-title').textContent = p.title;
  document.getElementById('ps-desc').textContent  = p.desc;

  selectedStep  = -1;
  markerTargetT = 0.00;
  pauseTimeline();
  playbackIdx = 0;
  _setDefaultSun(plan);
  updateHUD(null);
  buildTimeline();
  buildTemps();
  // Switch to timeline tab for the new plan
  showTab('timeline');
}

function _setDefaultSun(plan) {
  const sp = calcSunPos(plan === 'A' ? 9.5 : 1.0);
  sunAltTarget = sp.altitude;
  sunAzTarget  = sp.azimuth;
}

/* ═══════════════════════════════════════════════════════════════
   VIEWING MODE  (collapse panel to see Mt. Fuji)
   ═══════════════════════════════════════════════════════════════ */

function toggleViewMode() {
  viewMode = !viewMode;
  document.body.classList.toggle('view-mode', viewMode);
  const label = document.getElementById('grip-label');
  if (label) label.textContent = viewMode ? '📋 パネルを開く' : '🗻 鑑賞モード';
}

/* ═══════════════════════════════════════════════════════════════
   TIMELINE PLAYBACK
   ═══════════════════════════════════════════════════════════════ */

function togglePlayback() { isPlaying ? pauseTimeline() : playTimeline(); }

function playTimeline() {
  isPlaying = true;
  const btn = document.getElementById('btn-play');
  if (btn) btn.textContent = '⏸';
  _advancePlayback();
}

function pauseTimeline() {
  isPlaying = false;
  clearTimeout(playbackTimeout);
  const btn = document.getElementById('btn-play');
  if (btn) btn.textContent = '▶';
}

function _advancePlayback() {
  if (!isPlaying) return;
  const steps = PLANS[currentPlan].steps;
  playbackIdx = (playbackIdx + 1) % steps.length;
  onStepSelect(playbackIdx, steps[playbackIdx].t);
  playbackTimeout = setTimeout(_advancePlayback, 2500);
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
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x010508);
  scene.fog = new THREE.Fog(0x010508, 16, 55);

  camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 600);
  clock  = new THREE.Clock();

  buildLights();
  buildSun();
  buildMoon();
  buildStars();
  buildDawnGlow();
  buildClouds();

  applyOrbit();
  setupControls();
  window.addEventListener('resize', onResize);
  animate();

  _setDefaultSun(currentPlan);
  sunAltCurrent = sunAltTarget;
  sunAzCurrent  = sunAzTarget;
  updateSunScene(sunAltCurrent, sunAzCurrent);

  setProgress(0, 'データを読み込み中…');
  const [heights, photoCanvas] = await Promise.all([loadDEM(), loadPhotoCanvas()]);
  hmap = heights;

  orbitTarget.set(
    lon2wx(SUMMIT.lon),
    geoH(SUMMIT.lat, SUMMIT.lon) * 0.55,
    lat2wz(SUMMIT.lat)
  );
  applyOrbit();

  labelDefs.forEach(d => {
    labelPts[d.id] = new THREE.Vector3(lon2wx(d.lon), geoH(d.lat, d.lon) + d.dy, lat2wz(d.lat));
  });

  setProgress(96, 'シーンを構築中…');
  buildTerrain(heights, photoCanvas);
  buildRouteOnTerrain();
  buildMarker();
  buildSummitMarker();

  markerMesh.position.copy(geo3(TRAILHEAD.lat, TRAILHEAD.lon, 0.10));

  setProgress(100, '完了');
  setTimeout(() => { document.getElementById('loading').classList.add('hide'); }, 350);

  buildTimeline();
  buildTemps();
  buildGear();
  showTab('timeline');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
