// ═══════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════

const PLANS = {
  A: {
    icon: '🌄', title: 'Plan A — ご来光バージョン',
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
    ]
  },
  B: {
    icon: '☀️', title: 'Plan B — 昼間登山バージョン',
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
    ]
  }
};

const TEMPS = [
  { alt:'2,305m', place:'五合目・六合目（星観荘）', day:'約15℃', night:'約8〜10℃' },
  { alt:'2,700m', place:'七合目',                   day:'約13℃', night:'約5〜7℃'  },
  { alt:'3,100m', place:'八合目',                   day:'約10℃', night:'約2〜4℃'  },
  { alt:'3,450m', place:'八合五勺',                 day:'約8℃',  night:'約0〜2℃'  },
  { alt:'3,776m', place:'山頂',                     day:'約5〜7℃',night:'約0〜3℃（体感−5℃以下も）' },
];

const GEAR = [
  { cat:'👕 服装・ウェア', items:[
    { name:'吸湿速乾インナー（長袖）', note:'綿はNG、汗冷えで低体温症リスク', req:true },
    { name:'長袖シャツ', note:'行動中のベースレイヤー', req:true },
    { name:'フリース / 中綿ジャケット', note:'七合目以上から必要', req:true },
    { name:'レインウェア 上下', note:'防寒・防風を兼ねる。ゴアテックス推奨', req:true },
    { name:'登山パンツ', note:'ジーンズ厳禁（重い・乾かない）', req:true },
    { name:'厚手の手袋', note:'山頂は指先が悴む', req:true },
    { name:'ニット帽・ネックウォーマー', note:'深夜の寒さ対策', pa:true },
    { name:'日差し用帽子（つば付き）', note:'紫外線対策', pb:true },
    { name:'トレッキングシューズ（ハイカット）', note:'スニーカー不可', req:true },
    { name:'厚手の登山用靴下＋替え', req:true },
  ]},
  { cat:'🔦 装備・道具', items:[
    { name:'ヘッドライト＋予備電池', note:'スマホライト不可', pa:true },
    { name:'登山用ストック', note:'下山の膝負担を大幅軽減' },
    { name:'ヘルメット', note:'六合目で貸出可（2,000円デポジット）' },
    { name:'リュック（20〜30L）', req:true },
    { name:'ゴミ袋・ジップロック', note:'山内ゴミ捨て不可', req:true },
    { name:'モバイルバッテリー', note:'寒さで電池消耗が激しい', req:true },
  ]},
  { cat:'🍙 食料・飲料', items:[
    { name:'水 1.5〜2L / 人', note:'山小屋でも買えるが高額（500円〜）', req:true },
    { name:'行動食（チョコ・ゼリー・おにぎり）', note:'こまめにエネルギー補給', req:true },
    { name:'温かい飲み物（魔法瓶）', note:'深夜の寒さに効果大', pa:true },
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

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════

let currentPlan = 'A';
let selectedStep = -1;
let checkedGear = loadGearState();

function loadGearState() {
  try { const s = localStorage.getItem('fuji-gear-2026'); return s ? new Set(JSON.parse(s)) : new Set(); }
  catch(e) { return new Set(); }
}
function saveGearState() {
  try { localStorage.setItem('fuji-gear-2026', JSON.stringify([...checkedGear])); } catch(e) {}
}

// ═══════════════════════════════════════════
//  THREE.JS SCENE
// ═══════════════════════════════════════════

let renderer, scene, camera, clock;
let fujiGroup, routeMesh, routeMat, markerMesh, markerMat;
let stars, moon, moonMat;
let routeCurve;
let ambient, dirLight, fillLight;
let clouds = [];

// Sun / sky
let sunMesh, sunCoreMat, sunGlowMats = [], sunLightDir;
let dawnGlowMesh, dawnGlowMat;
let sunAltCurrent = -1.0, sunAzCurrent = 1.1; // radians
let sunAltTarget  = -1.0, sunAzTarget  = 1.1;

// Timeline playback
let isPlaying = false, playbackIdx = 0, playbackTimeout = null;

// Pre-allocated temporaries (avoid GC each frame)
const _skyCfg = {
  bg:       new THREE.Color(),
  ambient:  new THREE.Color(),
  dir:      new THREE.Color(),
  sunSphere:new THREE.Color(),
  sunGlow:  new THREE.Color(),
};
const _rc = new THREE.Color();

// Lerp targets
let planProg = 0;         // 0 = Plan A (night), 1 = Plan B (day)
let markerT  = 0.09;
let markerTargetT = 0.09;
let camLookY = 1.8;
let camLookYTarget = 1.8;

// Colours for plan transition
const C = {
  bgA:    new THREE.Color(0x040c1c),
  bgB:    new THREE.Color(0x1a6090),
  ambA:   new THREE.Color(0x0a1830),
  ambB:   new THREE.Color(0x7aaabb),
  dirA:   new THREE.Color(0x6688bb),
  dirB:   new THREE.Color(0xffe8c0),
  routeA: new THREE.Color(0x00ffee),
  routeB: new THREE.Color(0xffcc44),
  snowA:  new THREE.Color(0xbbd4f0),
  snowB:  new THREE.Color(0xffffff),
};

function initThree() {
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();
  scene.background = C.bgA.clone();
  scene.fog = new THREE.Fog(0x040c1c, 14, 32);

  camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 2.5, 7.5);

  clock = new THREE.Clock();

  buildLights();
  buildMountain();
  buildRoute();
  buildMarker();
  buildStars();
  buildMoon();
  buildClouds();
  buildSun();
  buildDawnGlow();
  buildGround();

  window.addEventListener('resize', onResize);
  animate();
}

// ── Lights ─────────────────────────────────
function buildLights() {
  ambient = new THREE.AmbientLight(C.ambA, 0.5);
  scene.add(ambient);

  // Weak fill – will be overridden by sunLightDir
  dirLight = new THREE.DirectionalLight(C.dirA, 0.2);
  dirLight.position.set(-5, 12, -12);
  scene.add(dirLight);

  fillLight = new THREE.PointLight(0xff6633, 0.3, 25);
  fillLight.position.set(4, -0.5, 7);
  scene.add(fillLight);

  // Primary sun directional light (repositioned every frame)
  sunLightDir = new THREE.DirectionalLight(0xffe8c0, 0.0);
  scene.add(sunLightDir);
}

// ── Mt. Fuji body ───────────────────────────
function buildMountain() {
  fujiGroup = new THREE.Group();
  scene.add(fujiGroup);

  // Main volcanic body – profile matches real Fuji with summit crater
  const profile = [
    // Crater floor then rim (creates the bowl at the summit)
    new THREE.Vector2(0.01,  3.92),
    new THREE.Vector2(0.18,  3.96),
    new THREE.Vector2(0.38,  4.04),  // crater rim (highest point)
    new THREE.Vector2(0.44,  4.00),  // slight drop on outer rim
    // Main slopes
    new THREE.Vector2(0.58,  3.50),
    new THREE.Vector2(0.76,  2.88),
    new THREE.Vector2(0.95,  2.26),
    new THREE.Vector2(1.12,  1.68),
    new THREE.Vector2(1.28,  1.16),
    new THREE.Vector2(1.44,  0.68),
    new THREE.Vector2(1.60,  0.30),
    new THREE.Vector2(1.80,  0.06),
    new THREE.Vector2(2.20,  0.00),  // wide flat base
  ];
  const fujiGeo = new THREE.LatheGeometry(profile, 80);
  const fujiMat = new THREE.MeshStandardMaterial({
    color: 0x1a110a,
    roughness: 0.96,
    metalness: 0.0,
  });
  fujiGroup.add(new THREE.Mesh(fujiGeo, fujiMat));

  // Snow cap covering crater interior and upper slopes
  const snowProfile = [
    new THREE.Vector2(0.01,  3.92),
    new THREE.Vector2(0.18,  3.96),
    new THREE.Vector2(0.38,  4.04),
    new THREE.Vector2(0.44,  4.00),
    new THREE.Vector2(0.58,  3.75),
    new THREE.Vector2(0.50,  3.52),
  ];
  const snowGeo = new THREE.LatheGeometry(snowProfile, 80);
  const snowMat = new THREE.MeshStandardMaterial({
    color: C.snowA.clone(),
    roughness: 0.28,
    metalness: 0.02,
    emissive: 0x889bcc,
    emissiveIntensity: 0.25,
  });
  snowMat.userData.snow = true;
  fujiGroup.add(new THREE.Mesh(snowGeo, snowMat));
  fujiGroup.userData.snowMat = snowMat;

  // Subtle mid-mountain scoria band
  const bandProfile = [
    new THREE.Vector2(0.58, 3.52),
    new THREE.Vector2(0.76, 2.90),
    new THREE.Vector2(0.94, 2.28),
  ];
  const bandGeo = new THREE.LatheGeometry(bandProfile, 80);
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x2a1e14, roughness: 0.98 });
  fujiGroup.add(new THREE.Mesh(bandGeo, bandMat));
}

// ── Climbing route ──────────────────────────
function buildRoute() {
  // Points on Yoshida route surface [theta_rad, radius, y]
  const raw = [
    [ 0.00, 1.29, 0.50],  // 五合目 / 星観荘
    [ 0.10, 1.10, 0.88],  // 6.5合目
    [ 0.05, 0.95, 1.28],  // 七合目
    [-0.06, 0.78, 1.72],  // 七合目上
    [ 0.09, 0.65, 2.18],  // 八合目
    [-0.02, 0.50, 2.58],  // 八合目上
    [ 0.06, 0.38, 3.00],  // 八合五勺
    [-0.03, 0.25, 3.40],  // 九合目
    [ 0.02, 0.10, 3.78],  // 山頂直下
    [ 0.00, 0.02, 3.97],  // 山頂
  ];

  const pts = raw.map(([th, r, y]) =>
    new THREE.Vector3(r * Math.sin(th), y, r * Math.cos(th))
  );

  routeCurve = new THREE.CatmullRomCurve3(pts);

  const tubeGeo = new THREE.TubeGeometry(routeCurve, 120, 0.024, 7, false);
  routeMat = new THREE.MeshStandardMaterial({
    color: C.routeA.clone(),
    emissive: C.routeA.clone(),
    emissiveIntensity: 2.8,
    transparent: true,
    opacity: 0.88,
  });
  routeMesh = new THREE.Mesh(tubeGeo, routeMat);
  fujiGroup.add(routeMesh);
}

// ── Climber marker ──────────────────────────
function buildMarker() {
  const geo = new THREE.SphereGeometry(0.065, 16, 16);
  markerMat = new THREE.MeshStandardMaterial({
    color: C.routeA.clone(),
    emissive: C.routeA.clone(),
    emissiveIntensity: 3.5,
  });
  markerMesh = new THREE.Mesh(geo, markerMat);

  // Outer halo sphere
  const haloGeo = new THREE.SphereGeometry(0.13, 16, 16);
  const haloMat = new THREE.MeshBasicMaterial({
    color: C.routeA.clone(),
    transparent: true,
    opacity: 0.12,
    side: THREE.BackSide,
  });
  markerMesh.add(new THREE.Mesh(haloGeo, haloMat));
  markerMesh.userData.haloMat = haloMat;

  fujiGroup.add(markerMesh);

  const startPt = routeCurve.getPoint(0.09);
  markerMesh.position.copy(startPt);
}

// ── Starfield ───────────────────────────────
function buildStars() {
  const N = 1800;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);

  for (let i = 0; i < N; i++) {
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    const r  = 23 + Math.random() * 4;
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
    pos[i*3+2] = r * Math.cos(ph);
    // Slight warm/cool tint
    const w = Math.random();
    col[i*3]   = 0.80 + w * 0.20;
    col[i*3+1] = 0.86 + w * 0.12;
    col[i*3+2] = 1.00;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.11,
    vertexColors: true,
    transparent: true,
    opacity: 1.0,
    sizeAttenuation: true,
  });

  stars = new THREE.Points(geo, mat);
  scene.add(stars);
}

// ── Moon ────────────────────────────────────
function buildMoon() {
  const geo = new THREE.SphereGeometry(0.38, 20, 20);
  moonMat = new THREE.MeshStandardMaterial({
    color: 0xfff5e0,
    emissive: 0xfff5e0,
    emissiveIntensity: 1.2,
    roughness: 0.85,
  });
  moon = new THREE.Mesh(geo, moonMat);
  moon.position.set(-7, 13, -15);
  scene.add(moon);

  // Soft halo
  const hGeo = new THREE.SphereGeometry(0.65, 16, 16);
  const hMat = new THREE.MeshBasicMaterial({ color: 0xfff5e0, transparent: true, opacity: 0.06, side: THREE.BackSide });
  moon.add(new THREE.Mesh(hGeo, hMat));
}

// ── Clouds ──────────────────────────────────
function buildClouds() {
  const cloudMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.55,
    roughness: 1.0,
    depthWrite: false,
  });

  const configs = [
    { x:-1.8, y:1.2, z: 2.0, s:0.28 },
    { x: 2.2, y:1.4, z: 1.5, s:0.22 },
    { x:-2.5, y:1.8, z: 1.2, s:0.20 },
    { x: 1.6, y:0.9, z: 2.3, s:0.25 },
    { x:-1.2, y:2.2, z: 1.8, s:0.18 },
    { x: 2.8, y:1.6, z: 0.8, s:0.20 },
  ];

  const blobs = [[0,0,0,1],[0.4,0.08,0,0.72],[-0.35,0.05,0,0.68],[0.12,0.22,0,0.55],[-0.08,0.26,0,0.45]];

  configs.forEach(cfg => {
    const g = new THREE.Group();
    blobs.forEach(([cx, cy, cz, sc]) => {
      const geo = new THREE.SphereGeometry(0.32 * sc, 7, 7);
      const m = new THREE.Mesh(geo, cloudMat.clone());
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

// ── Sun sphere ──────────────────────────────
function buildSun() {
  // Core — always opaque, no fog
  const coreGeo = new THREE.SphereGeometry(1.0, 24, 24);
  sunCoreMat = new THREE.MeshBasicMaterial({ color: 0xfffae8, fog: false });
  sunMesh = new THREE.Mesh(coreGeo, sunCoreMat);

  // Inner glow
  const g1Geo = new THREE.SphereGeometry(1.9, 16, 16);
  const g1Mat = new THREE.MeshBasicMaterial({
    color: 0xffe066, transparent: true, opacity: 0.22,
    side: THREE.BackSide, fog: false, depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  sunMesh.add(new THREE.Mesh(g1Geo, g1Mat));
  sunGlowMats.push(g1Mat);

  // Outer corona
  const g2Geo = new THREE.SphereGeometry(3.2, 16, 16);
  const g2Mat = new THREE.MeshBasicMaterial({
    color: 0xff8800, transparent: true, opacity: 0.09,
    side: THREE.BackSide, fog: false, depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  sunMesh.add(new THREE.Mesh(g2Geo, g2Mat));
  sunGlowMats.push(g2Mat);

  sunMesh.position.set(18, -2, -8);
  scene.add(sunMesh);
}

// ── Dawn / dusk horizon glow ────────────────
function buildDawnGlow() {
  const geo = new THREE.PlaneGeometry(20, 5, 1, 1);
  dawnGlowMat = new THREE.MeshBasicMaterial({
    color: 0xff4400, transparent: true, opacity: 0,
    side: THREE.DoubleSide, fog: false, depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  dawnGlowMesh = new THREE.Mesh(geo, dawnGlowMat);
  dawnGlowMesh.position.set(0, 0.1, 0);
  scene.add(dawnGlowMesh);
}

// ── Ground plane ────────────────────────────
function buildGround() {
  const geo = new THREE.PlaneGeometry(40, 40);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({ color: 0x0c0a08, roughness: 1.0, metalness: 0 });
  scene.add(new THREE.Mesh(geo, mat));
}

// ── Solar position (Mt. Fuji 35.36°N, July 27) ──
function calcSunPos(hourJST) {
  const DEG  = Math.PI / 180;
  const lat  = 35.36 * DEG;
  // Declination for July 27 ≈ 19.2° (23.45° × sin(360/365 × (284+208)))
  const decl = 19.2  * DEG;
  // Approximate solar noon at Fuji longitude 138.73°E for JST (UTC+9, 135°E):
  //   longitudinal correction  = (138.73-135)/15 h ≈ +0.25 h
  //   equation of time July 27 ≈ −0.11 h  →  noon ≈ 12.00 − 0.25 + 0.11 = 11.86 → ~11.78 h
  const solarNoon = 11.78;
  const H = (hourJST - solarNoon) * 15 * DEG; // hour angle

  const sinAlt = Math.sin(lat) * Math.sin(decl) +
                 Math.cos(lat) * Math.cos(decl) * Math.cos(H);
  const altitude = Math.asin(Math.max(-1, Math.min(1, sinAlt)));

  const cosAlt = Math.cos(altitude);
  const cosAz  = cosAlt > 0.001
    ? (Math.sin(decl) - Math.sin(lat) * sinAlt) / (Math.cos(lat) * cosAlt)
    : 0;
  let azimuth = Math.acos(Math.max(-1, Math.min(1, cosAz)));
  if (hourJST > solarNoon) azimuth = 2 * Math.PI - azimuth; // PM → west half

  return { altitude, azimuth };
}

// Returns 3D scene position for the sun (East=+X, Up=+Y, North=−Z)
function getSunWorldPos(alt, az, r) {
  return new THREE.Vector3(
     r * Math.cos(alt) * Math.sin(az),
     r * Math.sin(alt),
    -r * Math.cos(alt) * Math.cos(az)
  );
}

// ── Sky / atmosphere update ─────────────────
// Key colour stops (altitude in radians):
const SKY = {
  // night  deep-dark
  N:  { bg:0x010508, amb:0x06101e, ambI:0.30, dirI:0.04, sunI:0.0,
        sS:0xfff5e0, gO1:0.0,  gO2:0.0,  dgO:0.0, stars:1.00 },
  // pre-dawn (-0.12 rad)
  PD: { bg:0x0d0610, amb:0x14081c, ambI:0.35, dirI:0.08, sunI:0.0,
        sS:0xff9944, gO1:0.0,  gO2:0.0,  dgO:0.15, stars:0.85 },
  // sunrise (alt≈0)
  SR: { bg:0x220b06, amb:0x3d1408, ambI:0.44, dirI:0.55, sunI:1.0,
        sS:0xff8833, gO1:0.28, gO2:0.12, dgO:0.55, stars:0.25 },
  // golden hour (0.20 rad)
  GH: { bg:0x2e2030, amb:0x503040, ambI:0.55, dirI:0.85, sunI:1.4,
        sS:0xffdd88, gO1:0.22, gO2:0.09, dgO:0.18, stars:0.05 },
  // morning (0.45 rad)
  MO: { bg:0x284870, amb:0x507890, ambI:0.68, dirI:1.05, sunI:1.8,
        sS:0xfff0cc, gO1:0.18, gO2:0.07, dgO:0.0,  stars:0.0  },
  // midday (0.80 rad +)
  MD: { bg:0x1a6090, amb:0x7aaabb, ambI:0.80, dirI:1.60, sunI:2.2,
        sS:0xffffff, gO1:0.14, gO2:0.06, dgO:0.0,  stars:0.0  },
};

function _lerpSkyNum(a, b, t, k) { return a[k] + (b[k] - a[k]) * t; }

function _lerpSkyColor(out, hexA, hexB, t) {
  out.setHex(hexA).lerp(_rc.setHex(hexB), t);
}

function updateSunScene(alt, az) {
  // --- Sun world position ---
  const R = 22;
  const sp = getSunWorldPos(alt, az, R);
  sunMesh.position.copy(sp);
  sunLightDir.position.copy(sp);
  sunMesh.visible = (alt > -0.28);

  // --- Dawn glow plane faces the sun direction at horizon ---
  if (alt > -0.30 && alt < 0.35) {
    const hx = Math.sin(az), hz = -Math.cos(az);
    dawnGlowMesh.position.set(hx * 11, 0.3, hz * 11);
    dawnGlowMesh.lookAt(0, 0.3, 0);
  }

  // --- Pick and interpolate sky preset ---
  let a, b, t;
  if      (alt < -0.12) { a = SKY.N;  b = SKY.PD; t = Math.max(0, (alt + 0.50) / 0.38); }
  else if (alt <  0.00) { a = SKY.PD; b = SKY.SR; t = (alt + 0.12) / 0.12; }
  else if (alt <  0.20) { a = SKY.SR; b = SKY.GH; t = alt / 0.20; }
  else if (alt <  0.45) { a = SKY.GH; b = SKY.MO; t = (alt - 0.20) / 0.25; }
  else                  { a = SKY.MO; b = SKY.MD; t = Math.min((alt - 0.45) / 0.35, 1); }

  const ambI  = _lerpSkyNum(a, b, t, 'ambI');
  const dirI  = _lerpSkyNum(a, b, t, 'dirI');
  const sunI  = _lerpSkyNum(a, b, t, 'sunI');
  const gO1   = _lerpSkyNum(a, b, t, 'gO1');
  const gO2   = _lerpSkyNum(a, b, t, 'gO2');
  const dgO   = _lerpSkyNum(a, b, t, 'dgO');
  const stOp  = _lerpSkyNum(a, b, t, 'stars');

  _lerpSkyColor(_skyCfg.bg,       a.bg,  b.bg,  t);
  _lerpSkyColor(_skyCfg.ambient,  a.amb, b.amb, t);
  _lerpSkyColor(_skyCfg.sunSphere,a.sS,  b.sS,  t);

  // Apply
  scene.background.copy(_skyCfg.bg);
  scene.fog.color.copy(_skyCfg.bg);

  ambient.color.copy(_skyCfg.ambient);
  ambient.intensity = ambI;

  dirLight.intensity = dirI * 0.18; // keep dim fill
  sunLightDir.intensity = sunI;
  // Sun light colour: warm at sunrise, white at midday
  _lerpSkyColor(_skyCfg.dir, 0xff6622, 0xffe8d0, Math.max(0, alt / 0.80));
  sunLightDir.color.copy(_skyCfg.dir);

  // Sun sphere appearance
  sunCoreMat.color.copy(_skyCfg.sunSphere);
  sunGlowMats[0].opacity = gO1;
  sunGlowMats[1].opacity = gO2;

  // Dawn glow
  dawnGlowMat.opacity = dgO;
  _lerpSkyColor(_skyCfg.sunGlow, 0xff3300, 0xffaa44, Math.max(0, alt / 0.20));
  dawnGlowMat.color.copy(_skyCfg.sunGlow);

  // Stars / moon
  stars.material.opacity = stOp;
  stars.visible = stOp > 0.01;
  moon.visible  = stOp > 0.2;
  moonMat.emissiveIntensity = 1.2 * Math.min(stOp, 1);

  // Horizon fill-light glow during dusk/dawn
  fillLight.intensity = Math.max(0, 0.5 - alt * 2.0) * 0.6;
}

// ─── Animation loop ─────────────────────────
let time = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  time += dt;

  // Plan colour progress lerp (route/marker/snow tint only)
  const targetProg = (currentPlan === 'B') ? 1 : 0;
  planProg += (targetProg - planProg) * dt * 1.8;

  applyPlanColors();

  // Gentle mountain oscillation (shows 3D depth)
  fujiGroup.rotation.y = Math.sin(time * 0.08) * 0.12;

  // Marker position lerp
  markerT += (markerTargetT - markerT) * Math.min(dt * 2.8, 0.12);
  const mp = routeCurve.getPoint(Math.max(0.001, Math.min(0.999, markerT)));
  markerMesh.position.copy(mp);

  // Marker pulse
  const pulse = 1 + 0.18 * Math.sin(time * 4.2);
  markerMesh.scale.setScalar(pulse);

  // Route glow breathe
  routeMat.emissiveIntensity = 2.4 + 0.55 * Math.sin(time * 1.8);

  // Camera Y target lerp
  camLookY += (camLookYTarget - camLookY) * dt * 1.5;
  camera.lookAt(0, camLookY, 0);

  // Stars slow rotation (visibility handled in updateSunScene)
  stars.rotation.y += dt * 0.008;

  // Cloud drift
  clouds.forEach((c, i) => {
    c.position.x = c.userData.base.x + Math.sin(time * 0.18 + i * 1.1) * 0.22;
    c.position.y = c.userData.base.y + Math.sin(time * 0.13 + i * 0.7) * 0.06;
    c.children.forEach(ch => {
      // Clouds become more opaque as sun rises (0 = full night, 1 = midday)
      const dayFactor = Math.max(0, Math.min(1, sunAltCurrent / 0.5));
      if (ch.material) ch.material.opacity = 0.28 + dayFactor * 0.30;
    });
  });

  // Sun altitude / azimuth lerp toward target
  const sunLerpSpeed = dt * 1.6;
  sunAltCurrent += (sunAltTarget - sunAltCurrent) * sunLerpSpeed;
  // Lerp azimuth via shortest angular path
  let daz = sunAzTarget - sunAzCurrent;
  if (daz >  Math.PI) daz -= 2 * Math.PI;
  if (daz < -Math.PI) daz += 2 * Math.PI;
  sunAzCurrent += daz * sunLerpSpeed;

  updateSunScene(sunAltCurrent, sunAzCurrent);

  renderer.render(scene, camera);
}

function applyPlanColors() {
  const p = planProg;

  // Route colour (cyan for night/Plan A, gold for day/Plan B)
  _rc.copy(C.routeA).lerp(C.routeB, p);
  routeMat.color.copy(_rc);
  routeMat.emissive.copy(_rc);

  markerMat.color.copy(_rc);
  markerMat.emissive.copy(_rc);
  if (markerMesh.userData.haloMat) markerMesh.children[0].material.color.copy(_rc);

  // Snow colour
  const snowMat = fujiGroup.userData.snowMat;
  if (snowMat) {
    snowMat.color.copy(C.snowA).lerp(C.snowB, p);
    snowMat.emissiveIntensity = 0.25 - p * 0.2;
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ═══════════════════════════════════════════
//  UI BUILDERS
// ═══════════════════════════════════════════

function buildTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = '';
  const steps = PLANS[currentPlan].steps;
  let lastDay = null;

  steps.forEach((s, i) => {
    // Day separator
    if (s.day !== lastDay) {
      const sep = document.createElement('div');
      sep.className = 'day-sep';
      sep.textContent = s.day;
      el.appendChild(sep);
      lastDay = s.day;
    }

    const div = document.createElement('div');
    div.className = 't-step' + (s.hl ? ' hl' : '');
    div.dataset.idx = i;

    const isFirst = i === 0;
    const isLast  = i === steps.length - 1;

    div.innerHTML = `
      <div class="t-conn">
        <div class="t-line${isFirst ? ' hide' : ''}"></div>
        <div class="t-dot"></div>
        <div class="t-line${isLast  ? ' hide' : ''}"></div>
      </div>
      <div class="t-card">
        <div class="t-top">
          <span class="t-time">${s.day} ${s.time}</span>
          <span class="t-icon">${s.icon}</span>
          <span class="t-loc">${s.loc}</span>
        </div>
        <div class="t-bottom">
          ${s.note ? `<span class="t-note">${s.note}</span>` : ''}
          ${s.temp ? `<span class="t-temp">${s.temp}</span>` : ''}
        </div>
      </div>`;

    div.addEventListener('click', () => onStepSelect(i, s.t));
    el.appendChild(div);
  });
}

function buildTemps() {
  const el = document.getElementById('temp-list');
  el.innerHTML = TEMPS.map(t => `
    <div class="temp-row">
      <span class="temp-alt">${t.alt}</span>
      <span class="temp-place">${t.place}</span>
      <div class="temp-vals">
        <div class="temp-day">${t.day}</div>
        <div class="temp-night">${currentPlan === 'A' ? t.night : t.day}</div>
      </div>
    </div>`).join('');
}

function buildGear() {
  const el = document.getElementById('gear-list');
  el.innerHTML = '';
  let total = 0, done = 0;

  GEAR.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'gear-cat';

    const head = document.createElement('div');
    head.className = 'gear-cat-head';
    head.textContent = cat.cat;
    catDiv.appendChild(head);

    cat.items.forEach(item => {
      total++;
      const key = item.name;
      const checked = checkedGear.has(key);
      if (checked) done++;

      let badge = '';
      if (item.req) badge = '<span class="g-badge badge-req">必須</span>';
      else if (item.pa) badge = `<span class="g-badge badge-a badge-plan">Plan A</span>`;
      else if (item.pb) badge = `<span class="g-badge badge-b badge-plan">Plan B</span>`;

      const row = document.createElement('div');
      row.className = 'gear-item' + (checked ? ' done' : '');
      row.innerHTML = `
        <div class="g-check">${checked ? '✓' : ''}</div>
        <div class="g-body">
          <div class="g-name">${item.name}</div>
          ${item.note ? `<div class="g-note">${item.note}</div>` : ''}
        </div>
        ${badge}`;

      row.addEventListener('click', () => toggleGear(key, row));
      catDiv.appendChild(row);
    });

    el.appendChild(catDiv);
  });

  document.getElementById('gear-progress').textContent = `${done} / ${total} 完了`;
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
  updateGearProgress();
}

function updateGearProgress() {
  const all = document.querySelectorAll('.gear-item').length;
  const done = document.querySelectorAll('.gear-item.done').length;
  document.getElementById('gear-progress').textContent = `${done} / ${all} 完了`;
}

function resetGear() {
  checkedGear.clear();
  saveGearState();
  buildGear();
}

// ─── Step selection ─────────────────────────
function onStepSelect(idx, t) {
  selectedStep = idx;
  markerTargetT = t;

  // Camera look height: follow the marker altitude
  if (t <= 0.15)      camLookYTarget = 1.2;
  else if (t <= 0.45) camLookYTarget = 1.8;
  else if (t <= 0.70) camLookYTarget = 2.8;
  else                camLookYTarget = 3.6;

  // Update sun target based on this step's time of day
  const step = PLANS[currentPlan].steps[idx];
  if (step && step.h !== undefined) {
    const sp = calcSunPos(step.h);
    sunAltTarget = sp.altitude;
    sunAzTarget  = sp.azimuth;
  }

  // Highlight selected step
  document.querySelectorAll('.t-step').forEach((el, i) => {
    el.classList.toggle('sel', i === idx);
  });
}

// ─── Plan switching ─────────────────────────
function switchPlan(plan) {
  if (currentPlan === plan) return;
  currentPlan = plan;
  document.body.className = 'plan-' + plan.toLowerCase();

  document.getElementById('btn-a').classList.toggle('active', plan === 'A');
  document.getElementById('btn-b').classList.toggle('active', plan === 'B');

  const p = PLANS[plan];
  document.getElementById('plan-card-icon').textContent  = p.icon;
  document.getElementById('plan-card-title').textContent = p.title;
  document.getElementById('plan-card-desc').textContent  = p.desc;

  selectedStep = -1;
  markerTargetT = 0.09;
  camLookYTarget = 1.8;

  // Default sky: Plan A = departure at 01:00 (night), Plan B = summit at 09:30 (morning)
  _setDefaultSunForPlan(plan);

  // Reset playback
  pauseTimeline();
  playbackIdx = 0;

  buildTimeline();
  buildTemps();
}

function _setDefaultSunForPlan(plan) {
  const defaultH = plan === 'A' ? 1.0 : 9.5;
  const sp = calcSunPos(defaultH);
  sunAltTarget = sp.altitude;
  sunAzTarget  = sp.azimuth;
}

// ═══════════════════════════════════════════
//  TIMELINE PLAYBACK
// ═══════════════════════════════════════════

function togglePlayback() {
  isPlaying ? pauseTimeline() : playTimeline();
}

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
  const s = steps[playbackIdx];
  onStepSelect(playbackIdx, s.t);

  // Scroll the selected step into view
  const stepEls = document.querySelectorAll('.t-step');
  if (stepEls[playbackIdx]) {
    stepEls[playbackIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  playbackTimeout = setTimeout(_advancePlayback, 2500);
}

// ═══════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════

function boot() {
  // Loading progress simulation
  const fill = document.getElementById('loading-fill');
  const loadingEl = document.getElementById('loading');
  let pct = 0;
  const timer = setInterval(() => {
    pct = Math.min(pct + Math.random() * 18, 95);
    fill.style.width = pct + '%';
  }, 120);

  // Init Three.js
  initThree();

  // Build UI
  buildTimeline();
  buildTemps();
  buildGear();

  // Set initial sky: Plan A starts at 01:00 (night)
  _setDefaultSunForPlan(currentPlan);
  // Snap current sun position so there's no initial lerp delay
  sunAltCurrent = sunAltTarget;
  sunAzCurrent  = sunAzTarget;

  // PWA service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Finish loading after a short delay
  setTimeout(() => {
    clearInterval(timer);
    fill.style.width = '100%';
    setTimeout(() => { loadingEl.classList.add('hide'); }, 300);
  }, 1200);
}

document.addEventListener('DOMContentLoaded', boot);
