// Base map: Leaflet with keyless tile sources and automatic fallback if a source fails to load.
import { toast } from './ui.js';

export const STYLES = {
  gsi: {
    label: '淡色', sub: '地理院地図（日本国内のみ）',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
    opts: { maxNativeZoom: 18, minNativeZoom: 5, maxZoom: 20, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">地理院タイル</a>' },
  },
  osm: {
    label: '標準', sub: 'OpenStreetMap（世界中）',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    opts: { maxNativeZoom: 19, maxZoom: 20, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>' },
  },
  street: {
    label: 'ストリート', sub: 'Esri（世界中・英語併記）',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    opts: { maxNativeZoom: 19, maxZoom: 20, attribution: 'Tiles &copy; Esri' },
  },
  satellite: {
    label: '航空写真', sub: 'Esri World Imagery',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    labels: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    opts: { maxNativeZoom: 18, maxZoom: 20, attribution: 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics' },
  },
};
const FALLBACK_ORDER = ['osm', 'street', 'gsi', 'satellite'];

export let map = null;
let layers = [];
let health = null;
const failed = new Set();
let onSwitch = null;

export function initMap(el) {
  map = L.map(el, { zoomControl: false, attributionControl: false, worldCopyJump: true, zoomSnap: 0.25, wheelPxPerZoomLevel: 90 })
    .setView([35.68, 139.76], 5);
  L.control.attribution({ position: 'topright', prefix: false }).addTo(map);
  map.createPane('labels').style.zIndex = 350; // above tiles, below routes and markers
  map.getPane('labels').style.pointerEvents = 'none';
  return map;
}

/** Rough test for "all of these points are in Japan" (the 地理院 tiles only cover Japan). */
export function inJapan(points) {
  const ok = ({ lat, lon }) =>
    (lat >= 41.2 && lat <= 45.7 && lon >= 139.3 && lon <= 146) ||   // Hokkaido / northern Tohoku
    (lat >= 30 && lat < 41.2 && lon >= 129.6 && lon <= 146) ||      // Honshu, Shikoku, Kyushu
    (lat >= 32 && lat < 34.8 && lon >= 128.5 && lon < 129.6) ||     // Goto, Tsushima, Iki
    (lat >= 24 && lat < 30 && lon >= 122.9 && lon <= 131.5) ||      // Nansei islands
    (lat >= 20 && lat < 30 && lon >= 135 && lon <= 154);            // Ogasawara
  return points.length > 0 && points.every(ok);
}

export function resolveStyle(pref, points) {
  if (pref && pref !== 'auto' && STYLES[pref]) return pref;
  return inJapan(points) ? 'gsi' : 'osm';
}

export function setStyle(key, cb) {
  if (!STYLES[key]) key = 'osm';
  onSwitch = cb || onSwitch;
  layers.forEach(l => map.removeLayer(l));
  const s = STYLES[key];
  const base = L.tileLayer(s.url, s.opts);
  health = { key, load: 0, err: 0 };
  const h = health;
  base.on('tileload', () => { h.load++; });
  base.on('tileerror', () => { h.err++; checkHealth(h); });
  layers = [base.addTo(map)];
  if (s.labels) layers.push(L.tileLayer(s.labels, { maxNativeZoom: 18, maxZoom: 20, pane: 'labels', opacity: 0.9 }).addTo(map));
  return key;
}
export const currentStyle = () => health?.key;

function checkHealth(h) {
  if (h !== health || h.load > 0 || h.err < 6 || failed.has(h.key)) return;
  failed.add(h.key);
  const next = FALLBACK_ORDER.find(k => !failed.has(k));
  if (!next) { toast('地図を読み込めません。通信状況を確認してください'); return; }
  toast(`「${STYLES[h.key].label}」の地図を読み込めなかったため「${STYLES[next].label}」に切り替えました`, 4200);
  setStyle(next);
  onSwitch?.(next);
}

/** Fit bounds inside the part of the screen not covered by UI. insets: {top, bottom}. */
export function fitTo(bounds, insets, maxZoom = 16, animate = true) {
  if (!bounds?.isValid?.()) return;
  map.fitBounds(bounds, {
    paddingTopLeft: [28, (insets.top || 0) + 24],
    paddingBottomRight: [28, (insets.bottom || 0) + 24],
    maxZoom, animate,
  });
}

/** Fly so that latlng sits at the vertical centre of the uncovered area. */
export function flyToVisible(latlng, zoom, insets, duration = 0.8) {
  const size = map.getSize();
  const top = insets.top || 0, bottom = size.y - (insets.bottom || 0);
  const targetY = bottom > top + 40 ? (top + bottom) / 2 : size.y / 2;
  const p = map.project(latlng, zoom).add([0, size.y / 2 - targetY]);
  map.flyTo(map.unproject(p, zoom), zoom, { duration });
}

/** Smoothly fly to show bounds inside the uncovered area. */
export function flyToBoundsVisible(bounds, insets, maxZoom = 16, duration = 0.9) {
  if (!bounds?.isValid?.()) return;
  map.flyToBounds(bounds, {
    paddingTopLeft: [32, (insets.top || 0) + 28],
    paddingBottomRight: [32, (insets.bottom || 0) + 28],
    maxZoom, duration,
  });
}
