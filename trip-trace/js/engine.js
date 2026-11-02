// Map engine: MapLibre globe with aerial imagery, 3D terrain, Japanese place labels and the trip overlays.
import { lerp, clamp } from './geo.js';

const IMAGERY = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const TERRAIN = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
const VECTOR = 'https://tiles.openfreemap.org/planet';
const GLYPHS = 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf';
export const MINCHO = '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Shippori Mincho", "Noto Serif JP", serif';
export const EXAGGERATION = 1.3;

export const COLORS = {
  walk: '#fbe3b0', train: '#f2c063', car: '#ffb08a', boat: '#9fd6ff', plane: '#ffffff',
  gold: '#f2c063', trail: '#ffd27a',
};
const empty = () => ({ type: 'FeatureCollection', features: [] });
const NAME = ['coalesce', ['get', 'name:ja'], ['get', 'name']];
const LABEL_PAINT = { 'text-color': '#fffaf0', 'text-halo-color': 'rgba(10,12,18,0.72)', 'text-halo-width': 1.3, 'text-halo-blur': 0.4 };

export let map = null;
let screen = 'library';
const listeners = new Set();

function style() {
  return {
    version: 8,
    projection: { type: 'globe' },
    glyphs: GLYPHS,
    sources: {
      imagery: { type: 'raster', tiles: [IMAGERY], tileSize: 256, maxzoom: 19 },
      dem: { type: 'raster-dem', tiles: [TERRAIN], tileSize: 256, maxzoom: 15, encoding: 'terrarium' },
      omt: { type: 'vector', url: VECTOR },
      'g-routes': { type: 'geojson', data: empty() },
      'g-trips': { type: 'geojson', data: empty() },
      route: { type: 'geojson', data: empty() },
      trail: { type: 'geojson', data: empty() },
      'trail-now': { type: 'geojson', data: empty() },
      places: { type: 'geojson', data: empty() },
      dots: { type: 'geojson', data: empty() },
    },
    layers: [
      { id: 'space', type: 'background', paint: { 'background-color': '#03050a' } },
      { id: 'imagery', type: 'raster', source: 'imagery', paint: { 'raster-fade-duration': 250, 'raster-contrast': 0.06, 'raster-saturation': 0.08 } },

      // Library globe: every saved trip
      { id: 'g-routes', type: 'line', source: 'g-routes', layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.gold, 'line-width': ['case', ['get', 'focus'], 3, 1.6], 'line-opacity': ['case', ['get', 'focus'], 0.95, 0.55] } },
      { id: 'g-trips-glow', type: 'circle', source: 'g-trips',
        paint: { 'circle-radius': ['case', ['get', 'focus'], 22, 12], 'circle-color': COLORS.gold, 'circle-opacity': 0.28, 'circle-blur': 1 } },
      { id: 'g-trips', type: 'circle', source: 'g-trips',
        paint: { 'circle-radius': ['case', ['get', 'focus'], 6, 4], 'circle-color': '#fff7e2', 'circle-stroke-color': COLORS.gold, 'circle-stroke-width': 2 } },

      // Trip route, drawn per mode
      { id: 'route-casing', type: 'line', source: 'route', filter: ['!=', ['get', 'mode'], 'plane'], layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': 'rgba(8,10,16,0.55)', 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 4, 15, 8], 'line-blur': 1 } },
      { id: 'route-walk', type: 'line', source: 'route', filter: ['==', ['get', 'mode'], 'walk'], layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.walk, 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 2, 15, 4.5], 'line-dasharray': [0.2, 1.8] } },
      { id: 'route-train', type: 'line', source: 'route', filter: ['==', ['get', 'mode'], 'train'], layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.train, 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 2.2, 15, 4.5] } },
      { id: 'route-car', type: 'line', source: 'route', filter: ['==', ['get', 'mode'], 'car'], layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.car, 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 2.2, 15, 4.5] } },
      { id: 'route-boat', type: 'line', source: 'route', filter: ['==', ['get', 'mode'], 'boat'], layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.boat, 'line-width': ['interpolate', ['linear'], ['zoom'], 8, 2.2, 15, 4], 'line-dasharray': [2, 1.6] } },
      { id: 'route-plane', type: 'line', source: 'route', filter: ['==', ['get', 'mode'], 'plane'], layout: { 'line-cap': 'round' },
        paint: { 'line-color': COLORS.plane, 'line-width': 2, 'line-opacity': 0.85, 'line-dasharray': [3, 2.5] } },

      // Cinema: the part already travelled
      { id: 'trail-glow', type: 'line', source: 'trail', layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.trail, 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 8, 15, 16], 'line-opacity': 0.35, 'line-blur': 6 } },
      { id: 'trail', type: 'line', source: 'trail', layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#fff1cc', 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 2.4, 15, 5] } },
      { id: 'trail-now-glow', type: 'line', source: 'trail-now', layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': COLORS.trail, 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 8, 15, 16], 'line-opacity': 0.4, 'line-blur': 6 } },
      { id: 'trail-now', type: 'line', source: 'trail-now', layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#fff6dc', 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 2.6, 15, 5.5] } },

      // Map labels (OpenFreeMap / OpenMapTiles), Japanese names where OSM has them
      { id: 'lbl-water', type: 'symbol', source: 'omt', 'source-layer': 'water_name', minzoom: 3,
        filter: ['in', ['get', 'class'], ['literal', ['ocean', 'sea', 'bay', 'lake', 'strait', 'lagoon']]],
        layout: { 'text-field': NAME, 'text-font': ['Noto Sans Italic'], 'text-size': ['interpolate', ['linear'], ['zoom'], 3, 11, 12, 14], 'text-letter-spacing': 0.15, 'text-max-width': 6 },
        paint: { 'text-color': 'rgba(220,236,255,0.85)', 'text-halo-color': 'rgba(5,15,30,0.6)', 'text-halo-width': 1 } },
      { id: 'lbl-country', type: 'symbol', source: 'omt', 'source-layer': 'place', maxzoom: 6,
        filter: ['==', ['get', 'class'], 'country'],
        layout: { 'text-field': NAME, 'text-font': ['Noto Sans Bold'], 'text-size': ['interpolate', ['linear'], ['zoom'], 1, 11, 5, 15], 'text-letter-spacing': 0.2, 'text-max-width': 7 },
        paint: { ...LABEL_PAINT, 'text-color': 'rgba(255,250,240,0.92)' } },
      { id: 'lbl-city', type: 'symbol', source: 'omt', 'source-layer': 'place', minzoom: 4,
        filter: ['in', ['get', 'class'], ['literal', ['city', 'town']]],
        layout: { 'text-field': NAME, 'text-font': ['Noto Sans Regular'], 'text-size': ['interpolate', ['linear'], ['zoom'], 5, 11, 12, 15], 'text-max-width': 7,
          'symbol-sort-key': ['get', 'rank'] },
        paint: LABEL_PAINT },
      { id: 'lbl-local', type: 'symbol', source: 'omt', 'source-layer': 'place', minzoom: 11,
        filter: ['in', ['get', 'class'], ['literal', ['village', 'suburb', 'quarter', 'island']]],
        layout: { 'text-field': NAME, 'text-font': ['Noto Sans Regular'], 'text-size': 12, 'text-max-width': 7 },
        paint: { ...LABEL_PAINT, 'text-color': 'rgba(255,250,240,0.85)' } },
      { id: 'lbl-peak', type: 'symbol', source: 'omt', 'source-layer': 'mountain_peak', minzoom: 9,
        filter: ['has', 'name'],
        layout: { 'text-field': ['case', ['has', 'ele'], ['concat', NAME, '\n', ['to-string', ['get', 'ele']], 'm'], NAME],
          'text-font': ['Noto Sans Regular'], 'text-size': 11, 'text-max-width': 7, 'text-line-height': 1.25 },
        paint: { ...LABEL_PAINT, 'text-color': '#ffe7b5' } },

      // Places of the trip
      { id: 'places-glow', type: 'circle', source: 'places',
        paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 6, 8, 16, 20], 'circle-color': COLORS.gold,
          'circle-opacity': ['case', ['==', ['get', 'state'], 'now'], 0.55, ['==', ['get', 'state'], 'next'], 0.12, 0.3], 'circle-blur': 1, 'circle-pitch-alignment': 'map' } },
      { id: 'places-dot', type: 'circle', source: 'places',
        paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 6, 3.2, 16, 6.5], 'circle-color': ['case', ['==', ['get', 'state'], 'next'], 'rgba(255,255,255,0.55)', '#fffdf6'],
          'circle-stroke-color': COLORS.gold, 'circle-stroke-width': ['case', ['==', ['get', 'state'], 'next'], 1, 2], 'circle-pitch-alignment': 'map' } },
      { id: 'places-label', type: 'symbol', source: 'places', minzoom: 9,
        layout: { 'text-field': ['get', 'name'], 'text-font': ['Noto Sans Bold'], 'text-size': 13, 'text-offset': [0, -1.5], 'text-anchor': 'bottom',
          'text-max-width': 8, 'text-optional': true, 'symbol-sort-key': ['get', 'n'] },
        paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(10,12,18,0.8)', 'text-halo-width': 1.5 } },

      // Import: one light per photo as it is read
      { id: 'dots-glow', type: 'circle', source: 'dots', paint: { 'circle-radius': 12, 'circle-color': COLORS.gold, 'circle-opacity': 0.3, 'circle-blur': 1 } },
      { id: 'dots', type: 'circle', source: 'dots', paint: { 'circle-radius': 3, 'circle-color': '#fff6dc' } },
    ],
    sky: skyFor(12),
    terrain: { source: 'dem', exaggeration: EXAGGERATION },
  };
}

/* ---------- Sky by time of day ---------- */
const SKY_KEYS = [
  [0, 'night'], [4.6, 'night'], [5.6, 'dawn'], [7, 'day'], [15.6, 'day'], [17, 'golden'], [18.2, 'dusk'], [19.2, 'night'], [24, 'night'],
];
const SKIES = {
  night:  { sky: [9, 14, 34], horizon: [34, 48, 88], fog: [26, 34, 62] },
  dawn:   { sky: [92, 116, 186], horizon: [244, 184, 160], fog: [232, 196, 182] },
  day:    { sky: [90, 142, 214], horizon: [206, 224, 243], fog: [214, 228, 242] },
  golden: { sky: [104, 128, 196], horizon: [246, 200, 140], fog: [240, 210, 168] },
  dusk:   { sky: [44, 62, 122], horizon: [232, 148, 106], fog: [184, 138, 134] },
};
function mix(a, b, t) { return a.map((v, i) => Math.round(lerp(v, b[i], t))); }
const rgb = c => `rgb(${c[0]},${c[1]},${c[2]})`;
export function phase(hour) {
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    const [h0, k0] = SKY_KEYS[i], [h1, k1] = SKY_KEYS[i + 1];
    if (hour >= h0 && hour <= h1) return { a: k0, b: k1, t: (hour - h0) / ((h1 - h0) || 1) };
  }
  return { a: 'day', b: 'day', t: 0 };
}
export function skyFor(hour) {
  const { a, b, t } = phase(hour);
  const A = SKIES[a], B = SKIES[b];
  return {
    'sky-color': rgb(mix(A.sky, B.sky, t)), 'horizon-color': rgb(mix(A.horizon, B.horizon, t)), 'fog-color': rgb(mix(A.fog, B.fog, t)),
    'sky-horizon-blend': 0.55, 'horizon-fog-blend': 0.6, 'fog-ground-blend': 0.75,
    'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 6, 0.9, 10, 0],
  };
}
let lastSkyHour = null;
export function setSkyHour(hour) {
  if (lastSkyHour != null && Math.abs(hour - lastSkyHour) < 0.08) return;
  lastSkyHour = hour;
  try { map.setSky(skyFor(hour)); } catch { /* style not ready */ }
}

/* ---------- Setup ---------- */
export function init(container) {
  map = new maplibregl.Map({
    container,
    style: style(),
    center: [137.5, 34.5], zoom: 1.5, pitch: 0, bearing: 0,
    maxPitch: 78, minZoom: 0.6,
    attributionControl: false,
    localIdeographFontFamily: MINCHO,
    fadeDuration: 200,
    pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    canvasContextAttributes: { antialias: true },
    dragRotate: true, pitchWithRotate: true, touchPitch: true,
  });
  map.touchZoomRotate.enableRotation();
  map.on('error', e => { if (location.hostname === 'localhost') console.warn('map:', e?.error?.message || e); });
  map.on('click', 'places-dot', e => emit('place', e.features?.[0]?.properties?.n));
  map.on('click', 'places-glow', e => emit('place', e.features?.[0]?.properties?.n));
  map.on('click', 'g-trips-glow', e => emit('trip', e.features?.[0]?.properties?.id));
  for (const id of ['places-glow', 'g-trips-glow']) {
    map.on('mouseenter', id, () => { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', id, () => { map.getCanvas().style.cursor = ''; });
  }
  setupSpin();
  return new Promise(resolve => map.once('load', resolve));
}

export function on(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit(type, value) { for (const fn of listeners) fn(type, value); }

const GROUPS = {
  library: ['g-routes', 'g-trips-glow', 'g-trips', 'lbl-country', 'lbl-city', 'lbl-water'],
  import: ['dots-glow', 'dots', 'lbl-country', 'lbl-city', 'lbl-water'],
  trip: ['route-casing', 'route-walk', 'route-train', 'route-car', 'route-boat', 'route-plane', 'places-glow', 'places-dot', 'places-label',
    'lbl-country', 'lbl-city', 'lbl-local', 'lbl-water', 'lbl-peak'],
  cinema: ['route-casing', 'route-walk', 'route-train', 'route-car', 'route-boat', 'route-plane', 'trail-glow', 'trail', 'trail-now-glow', 'trail-now', 'places-glow', 'places-dot',
    'lbl-country', 'lbl-city', 'lbl-water', 'lbl-peak'],
};
const ALL = [...new Set(Object.values(GROUPS).flat())];

export function setScreen(name) {
  screen = name;
  const show = new Set(GROUPS[name] || []);
  for (const id of ALL) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', show.has(id) ? 'visible' : 'none');
  }
  const faint = name === 'cinema';
  for (const id of ['route-walk', 'route-train', 'route-car', 'route-boat']) map.setPaintProperty(id, 'line-opacity', faint ? 0.32 : 1);
  map.setPaintProperty('route-casing', 'line-opacity', faint ? 0.25 : 1);
  map.setPaintProperty('route-plane', 'line-opacity', faint ? 0.35 : 0.85);
  setInteractive(name !== 'cinema');
  spin.enabled = name === 'library';
  if (name !== 'cinema') setSkyHour(12);
}

export function setInteractive(on) {
  for (const h of ['dragPan', 'scrollZoom', 'boxZoom', 'dragRotate', 'keyboard', 'doubleClickZoom', 'touchZoomRotate', 'touchPitch']) {
    if (map[h]) on ? map[h].enable() : map[h].disable();
  }
}

/* ---------- Data ---------- */
const src = id => map.getSource(id);

export function setGlobeTrips(trips, focusId = null) {
  src('g-trips').setData({
    type: 'FeatureCollection',
    features: trips.filter(t => t.stats?.center).map(t => ({
      type: 'Feature', properties: { id: t.id, focus: t.id === focusId }, geometry: { type: 'Point', coordinates: t.stats.center },
    })),
  });
  src('g-routes').setData({
    type: 'FeatureCollection',
    features: trips.filter(t => t.stats?.path?.length > 1).map(t => ({
      type: 'Feature', properties: { id: t.id, focus: t.id === focusId }, geometry: { type: 'LineString', coordinates: t.stats.path },
    })),
  });
}

export function setRoute(moves, legsOf) {
  const features = [];
  for (const m of moves) {
    for (const l of legsOf(m)) {
      if (l.coords.length < 2) continue;
      features.push({ type: 'Feature', properties: { mode: l.mode, move: m.idx }, geometry: { type: 'LineString', coordinates: l.coords } });
    }
  }
  src('route').setData({ type: 'FeatureCollection', features });
}

export function setPlaces(places, nameOf, states = null) {
  src('places').setData({
    type: 'FeatureCollection',
    features: places.map(p => ({
      type: 'Feature',
      properties: { n: p.idx, name: nameOf(p), state: states ? states(p) : 'done' },
      geometry: { type: 'Point', coordinates: [p.lon, p.lat] },
    })),
  });
}

export function setTrail(coords) {
  src('trail').setData(coords && coords.length > 1
    ? { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: coords } }
    : empty());
}

export function setTrailNow(coords) {
  src('trail-now').setData(coords && coords.length > 1
    ? { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: coords } }
    : empty());
}

export function setDots(points) {
  src('dots').setData({
    type: 'FeatureCollection',
    features: points.map(p => ({ type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [p.lon, p.lat] } })),
  });
}

/* ---------- Camera ---------- */
export function camera() {
  const c = map.getCenter();
  return { center: [c.lng, c.lat], zoom: map.getZoom(), pitch: map.getPitch(), bearing: map.getBearing() };
}

/** Camera that fits bounds [[w,s],[e,n]] with the given padding, at a pitch and bearing. */
export function frame(b, { padding = 40, pitch = 0, bearing = 0, maxZoom = 16 } = {}) {
  const pad = typeof padding === 'number' ? { top: padding, bottom: padding, left: padding, right: padding } : padding;
  const c = map.cameraForBounds(b, { padding: pad, maxZoom, bearing });
  if (!c) return null;
  const ll = c.center.toArray ? c.center.toArray() : [c.center.lng, c.center.lat];
  // A tilted camera sees further, so pull back a little to keep everything in view.
  return { center: ll, zoom: clamp(c.zoom - pitch / 150, 0.8, maxZoom), pitch, bearing };
}

export function fly(cam, { duration = 2400, curve = 1.42, padding } = {}) {
  map.flyTo({ center: cam.center, zoom: cam.zoom, pitch: cam.pitch ?? map.getPitch(), bearing: cam.bearing ?? map.getBearing(),
    duration, curve, essential: true, padding: padding ?? { top: 0, bottom: 0, left: 0, right: 0 } });
  return new Promise(r => map.once('moveend', r));
}

export function ease(cam, { duration = 1200, padding } = {}) {
  map.easeTo({ ...cam, duration, essential: true, padding: padding ?? { top: 0, bottom: 0, left: 0, right: 0 } });
  return new Promise(r => map.once('moveend', r));
}

/* ---------- Slow globe spin on the library screen ---------- */
const spin = { enabled: false, idleSince: 0, last: 0, touching: false };
function setupSpin() {
  const stop = () => { spin.touching = true; };
  const release = () => { spin.touching = false; spin.idleSince = performance.now(); };
  map.on('mousedown', stop); map.on('touchstart', stop); map.on('wheel', () => { spin.idleSince = performance.now(); });
  map.on('mouseup', release); map.on('touchend', release); map.on('dragend', release);
  const tick = now => {
    const dt = Math.min(now - (spin.last || now), 64);
    spin.last = now;
    if (spin.enabled && !spin.touching && now - spin.idleSince > 4000 && !map.isEasing() && map.getZoom() < 4) {
      const c = map.getCenter();
      map.jumpTo({ center: [c.lng + dt * 0.0026 * (1.6 / Math.max(map.getZoom(), 1.2)), c.lat] });
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
export function holdSpin(ms = 4000) { spin.idleSince = performance.now() + ms - 4000; }
