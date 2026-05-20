'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */

const BASE_ALT   = 600;    // altitude at model base (m)
const SUMMIT_ALT = 3776;   // summit altitude (m)
const MODEL_H    = 3.0;    // world-unit height of the full cone
const BASE_R     = 1.4;    // world-unit base radius

// Mount Fuji profile: [normalised radius, normalised height t (0=base, 1=summit)]
// Approximated from topographic data
const PROFILE = [
  [1.000, 0.000],
  [0.930, 0.018],
  [0.858, 0.048],
  [0.772, 0.092],
  [0.672, 0.156],
  [0.578, 0.236],
  [0.488, 0.330],
  [0.402, 0.434],
  [0.320, 0.547],
  [0.230, 0.660],
  [0.148, 0.776],
  [0.085, 0.883],
  [0.040, 0.951],
  [0.018, 0.986],
  [0.010, 1.000],
];

// Four main climbing routes
const ROUTES = [
  {
    id: 'yoshida',
    name: '吉田ルート',
    short: '吉田',
    color: 0x44bbff,
    css: '#44bbff',
    az: 3,              // azimuth (deg): 0=+Z, 90=+X
    trailAlt: 2305,
    diff: '★★★☆☆',
    up: '5〜7時間',
    down: '3〜4時間',
    access: '河口湖駅・富士山駅からシャトルバス（約50分）',
    note: '最も登山者が多いルート。山小屋・トイレが充実し初心者にも安心。',
    wps: [
      { alt: 2305, name: '5合目', sub: '2,305m' },
      { alt: 2390, name: '6合目', sub: '2,390m' },
      { alt: 2700, name: '7合目', sub: '2,700m' },
      { alt: 3100, name: '8合目', sub: '3,100m' },
      { alt: 3400, name: '9合目', sub: '3,400m' },
      { alt: 3776, name: '山頂',  sub: '3,776m' },
    ],
  },
  {
    id: 'subashiri',
    name: '須走ルート',
    short: '須走',
    color: 0x22dd88,
    css: '#22dd88',
    az: 102,
    trailAlt: 1970,
    diff: '★★★☆☆',
    up: '5〜8時間',
    down: '3〜4時間',
    access: '御殿場駅からシャトルバス（約45分）',
    note: '樹林帯が長く自然豊か。8合目から吉田ルートと合流。砂走りが爽快。',
    wps: [
      { alt: 1970, name: '5合目', sub: '1,970m' },
      { alt: 2700, name: '7合目', sub: '2,700m' },
      { alt: 3100, name: '8合目', sub: '3,100m' },
      { alt: 3400, name: '9合目', sub: '3,400m' },
      { alt: 3776, name: '山頂',  sub: '3,776m' },
    ],
  },
  {
    id: 'gotemba',
    name: '御殿場ルート',
    short: '御殿場',
    color: 0xffaa22,
    css: '#ffaa22',
    az: 138,
    trailAlt: 1440,
    diff: '★★★★★',
    up: '7〜10時間',
    down: '3〜4時間',
    access: '御殿場駅からシャトルバス（約40分）',
    note: '最も標高差が大きく難易度高め。静かで空いている穴場ルート。大砂走りが名物。',
    wps: [
      { alt: 1440, name: '5合目',   sub: '1,440m' },
      { alt: 2590, name: '7合目',   sub: '2,590m' },
      { alt: 3000, name: '8合目',   sub: '3,000m' },
      { alt: 3400, name: '8.5合目', sub: '3,400m' },
      { alt: 3776, name: '山頂',    sub: '3,776m' },
    ],
  },
  {
    id: 'fujinomiya',
    name: '富士宮ルート',
    short: '富士宮',
    color: 0xff4488,
    css: '#ff4488',
    az: 207,
    trailAlt: 2380,
    diff: '★★★★☆',
    up: '4〜6時間',
    down: '2〜3時間',
    access: '新富士駅・富士宮駅からシャトルバス（約75分）',
    note: '5合目の標高が最も高く最短ルート。富士山本宮浅間大社奥宮を経由する。',
    wps: [
      { alt: 2380, name: '5合目', sub: '2,380m' },
      { alt: 2590, name: '6合目', sub: '2,590m' },
      { alt: 2900, name: '7合目', sub: '2,900m' },
      { alt: 3250, name: '8合目', sub: '3,250m' },
      { alt: 3460, name: '9合目', sub: '3,460m' },
      { alt: 3776, name: '山頂',  sub: '3,776m' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

// Altitude (m) → world-unit Y
function altToY(alt) {
  return clamp((alt - BASE_ALT) / (SUMMIT_ALT - BASE_ALT), 0, 1) * MODEL_H;
}

// World-unit Y → surface radius (world units) via PROFILE interpolation
function profileRadius(yWorld) {
  const t = yWorld / MODEL_H;
  for (let i = 0; i < PROFILE.length - 1; i++) {
    const [r0, t0] = PROFILE[i];
    const [r1, t1] = PROFILE[i + 1];
    if (t >= t0 && t <= t1) {
      return (r0 + ((t - t0) / (t1 - t0)) * (r1 - r0)) * BASE_R;
    }
  }
  return PROFILE[PROFILE.length - 1][0] * BASE_R;
}

// (altitude, azimuth°) → THREE.Vector3 on the mountain surface
// offset: small radial outset to prevent z-fighting with the mesh
function surfacePt(alt, azDeg, offset) {
  if (offset === undefined) offset = 0.015;
  const y  = altToY(alt);
  const r  = profileRadius(y) + offset;
  const az = azDeg * Math.PI / 180;
  return new THREE.Vector3(r * Math.sin(az), y, r * Math.cos(az));
}

// 0xRRGGBB → 'rgba(r,g,b,a)'
function hexToRgba(hex, a) {
  return 'rgba(' + ((hex >> 16) & 0xff) + ',' + ((hex >> 8) & 0xff) + ',' + (hex & 0xff) + ',' + a + ')';
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS STATE
═══════════════════════════════════════════════════════════════ */

let renderer, scene, camera, clock;
const routeObjects = {};   // id → { allMats: THREE.Material[] }

// Camera orbit
let orbitTheta  = -0.35;   // horizontal (radians)
let orbitPhi    =  1.0;    // polar / vertical (radians from zenith)
let orbitRadius =  5.5;
const orbitTarget = new THREE.Vector3(0, 1.2, 0);
let targetTheta = null;    // null = free; number = smooth-rotate goal

let autoRotate  = true;

function applyOrbit() {
  const x = orbitRadius * Math.sin(orbitPhi) * Math.sin(orbitTheta);
  const y = orbitRadius * Math.cos(orbitPhi);
  const z = orbitRadius * Math.sin(orbitPhi) * Math.cos(orbitTheta);
  camera.position.set(x + orbitTarget.x, y + orbitTarget.y, z + orbitTarget.z);
  camera.lookAt(orbitTarget);
}

/* ═══════════════════════════════════════════════════════════════
   SCENE BUILDERS
═══════════════════════════════════════════════════════════════ */

function buildSky() {
  // Gradient sky sphere (render inside)
  const geo    = new THREE.SphereGeometry(130, 24, 12);
  const pos    = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = clamp((pos.getY(i) + 130) / 260, 0, 1);
    colors[i * 3]     = lerp(0.48, 0.03, t);   // R
    colors[i * 3 + 1] = lerp(0.60, 0.09, t);   // G
    colors[i * 3 + 2] = lerp(0.76, 0.26, t);   // B
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  scene.add(new THREE.Mesh(geo,
    new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));

  // Stars
  const N  = 700;
  const sp = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(1 - Math.random() * 1.05);
    sp[i * 3]     = 120 * Math.sin(ph) * Math.cos(th);
    sp[i * 3 + 1] = Math.abs(120 * Math.cos(ph));
    sp[i * 3 + 2] = 120 * Math.sin(ph) * Math.sin(th);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  scene.add(new THREE.Points(sg,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.22, sizeAttenuation: true })));
}

function buildMountain() {
  // Lathe profile: Vector2(radius, height) pairs
  const pts = PROFILE.map(([r, t]) => new THREE.Vector2(r * BASE_R, t * MODEL_H));
  const geo = new THREE.LatheGeometry(pts, 72);

  // Assign vertex colours by elevation zone
  const pos    = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = clamp(pos.getY(i) / MODEL_H, 0, 1);
    let r, g, b;
    if (t < 0.34) {
      // Forest (dark green)
      const f = t / 0.34;
      r = lerp(0.09, 0.20, f);
      g = lerp(0.18, 0.25, f);
      b = lerp(0.08, 0.13, f);
    } else if (t < 0.50) {
      // Green → brown transition
      const f = (t - 0.34) / 0.16;
      r = lerp(0.20, 0.38, f);
      g = lerp(0.25, 0.31, f);
      b = lerp(0.13, 0.20, f);
    } else if (t < 0.88) {
      // Rock (grey-brown)
      const f = (t - 0.50) / 0.38;
      r = lerp(0.38, 0.52, f);
      g = lerp(0.31, 0.43, f);
      b = lerp(0.20, 0.35, f);
    } else {
      // Snow (blue-white)
      const f = (t - 0.88) / 0.12;
      r = lerp(0.70, 0.97, f);
      g = lerp(0.79, 0.98, f);
      b = lerp(0.92, 1.00, f);
    }
    colors[i * 3] = r; colors[i * 3 + 1] = g; colors[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  scene.add(new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true })));

  // Ground disc
  const gnd = new THREE.Mesh(
    new THREE.CircleGeometry(BASE_R * 1.35, 48),
    new THREE.MeshLambertMaterial({ color: 0x101a0c })
  );
  gnd.rotation.x = -Math.PI / 2;
  scene.add(gnd);

  // Flat circle markers at the base showing each route's trailhead direction
  ROUTES.forEach(route => {
    const az  = route.az * Math.PI / 180;
    const r   = BASE_R * 1.14;
    const geo = new THREE.CircleGeometry(0.07, 16);
    const mat = new THREE.MeshBasicMaterial({ color: route.color, side: THREE.DoubleSide });
    const m   = new THREE.Mesh(geo, mat);
    m.position.set(r * Math.sin(az), 0.01, r * Math.cos(az));
    m.rotation.x = -Math.PI / 2;
    scene.add(m);
  });
}

function buildRoutes() {
  ROUTES.forEach(route => {
    const group = new THREE.Group();
    group.userData.id = route.id;

    // Dense surface points from trailhead to summit, following the mountain profile
    const pts3D = [];
    const STEPS = 80;
    for (let i = 0; i <= STEPS; i++) {
      const t   = i / STEPS;
      const alt = lerp(route.trailAlt, SUMMIT_ALT, t);
      pts3D.push(surfacePt(alt, route.az));
    }

    // Build smooth tube along route
    const curve   = new THREE.CatmullRomCurve3(pts3D);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.009, 5, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: route.color, transparent: true, opacity: 1 });
    group.add(new THREE.Mesh(tubeGeo, tubeMat));

    // Waypoint sphere markers
    const sphereMats = [];
    route.wps.forEach((wp, wi) => {
      const pt  = surfacePt(wp.alt, route.az);
      const rad = (wi === 0 || wi === route.wps.length - 1) ? 0.030 : 0.020;
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

function buildSummitMarker() {
  // Gold sphere at summit
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(0.038, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffd700 })
  );
  m.position.set(0, MODEL_H * 1.003, 0);
  scene.add(m);

  // Thin gold ring around summit
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.09, 0.006, 6, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.55 })
  );
  ring.position.copy(m.position);
  ring.rotation.x = Math.PI / 2;
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
    orbitPhi    = clamp(orbitPhi + (e.clientY - pointerY) * 0.004, 0.15, Math.PI * 0.47);
    pointerX = e.clientX; pointerY = e.clientY;
    applyOrbit();
  });
  window.addEventListener('mouseup', () => { pointerDown = false; });
  el.addEventListener('wheel', e => {
    orbitRadius = clamp(orbitRadius + e.deltaY * 0.004, 2.2, 14);
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
      orbitPhi    = clamp(orbitPhi + (e.touches[0].clientY - pointerY) * 0.004, 0.15, Math.PI * 0.47);
      pointerX = e.touches[0].clientX; pointerY = e.touches[0].clientY;
      applyOrbit();
    } else if (e.touches.length === 2) {
      const dx   = e.touches[0].clientX - e.touches[1].clientX;
      const dy   = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      orbitRadius = clamp(pinchRad0 * (pinchDist0 / dist), 2.2, 14);
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
    orbitRadius = 5.5;
  } else {
    const route = ROUTES.find(r => r.id === id);
    fillInfoPanel(route);
    panel.classList.remove('hidden');
    Object.entries(routeObjects).forEach(([rid, o]) => {
      const on = rid === id;
      o.allMats.forEach(m => { m.opacity = on ? 1 : 0.10; });
    });
    // Smooth-rotate camera to face the trailhead
    targetTheta = route.az * Math.PI / 180;
    orbitRadius = 4.8;
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
   3D LABELS  (project waypoints to screen space)
═══════════════════════════════════════════════════════════════ */

// Pre-compute trailhead 3D positions (slightly outside surface for readability)
const labelPts = {};
ROUTES.forEach(r => { labelPts[r.id] = surfacePt(r.trailAlt, r.az, 0.18); });

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
    // Normalise to [-π, π]
    diff = ((diff + Math.PI) % (Math.PI * 2)) - Math.PI;
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

function init() {
  // Renderer
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Scene & clock
  scene = new THREE.Scene();
  clock = new THREE.Clock();

  // Camera
  camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.01, 200);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const sun = new THREE.DirectionalLight(0xfff5e0, 1.1);
  sun.position.set(4, 7, 3);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xc0d8ff, 0.30);
  fill.position.set(-5, 2, -4);
  scene.add(fill);

  // Build scene objects
  buildSky();
  buildMountain();
  buildRoutes();
  buildSummitMarker();

  applyOrbit();
  setupControls();
  window.addEventListener('resize', onResize);

  // Animate loading bar then reveal scene
  const ldFill = document.getElementById('ld-fill');
  let prog = 0;
  const iv = setInterval(() => {
    prog = Math.min(prog + Math.random() * 22, 88);
    ldFill.style.width = prog + '%';
  }, 60);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clearInterval(iv);
      ldFill.style.width = '100%';
      setTimeout(() => {
        const ld = document.getElementById('loading');
        ld.style.opacity = '0';
        setTimeout(() => { ld.style.display = 'none'; }, 520);
      }, 180);
    });
  });

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(function() {});
  }

  animate();
}

window.addEventListener('DOMContentLoaded', init);
