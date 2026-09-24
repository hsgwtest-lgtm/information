// three.js scene, camera, build plate, object meshes, picking and touch dragging.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Color, HemisphereLight, DirectionalLight, AmbientLight,
  Mesh, Group, LineSegments, LineBasicMaterial, MeshStandardMaterial, MeshBasicMaterial,
  BufferGeometry, Float32BufferAttribute, EdgesGeometry, PlaneGeometry, Vector2, Vector3,
  Box3, Plane, Raycaster, OrbitControls, DoubleSide, SRGBColorSpace, Matrix4,
} from '../vendor/vendor.js';
import { nodeGeometry, nodeMatrix } from './geometry.js';

export class Viewport {
  constructor(canvas, handlers) {
    this.canvas = canvas;
    this.h = handlers; // { onTap(id|null, e), onDragStart(id), onDrag(id, delta Vector3), onDragEnd(id) }
    this.meshes = new Map(); // id -> { mesh, edges, key }
    this.selected = new Set();
    this.dragMode = 'xy';
    this.plate = { x: 220, y: 220, z: 250 };

    const r = this.renderer = new WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    r.outputColorSpace = SRGBColorSpace;

    this.scene = new Scene();
    this.scene.background = new Color(0x15181d);

    const cam = this.camera = new PerspectiveCamera(40, 1, 0.5, 5000);
    cam.up.set(0, 0, 1);
    cam.position.set(120, -160, 130);

    this.scene.add(new HemisphereLight(0xffffff, 0x404050, 1.6));
    this.scene.add(new AmbientLight(0xffffff, 0.35));
    const d1 = new DirectionalLight(0xffffff, 1.6); d1.position.set(80, -120, 200); this.scene.add(d1);
    const d2 = new DirectionalLight(0xffffff, 0.5); d2.position.set(-120, 100, 60); this.scene.add(d2);

    this.world = new Group();
    this.scene.add(this.world);
    this.plateGroup = new Group();
    this.scene.add(this.plateGroup);

    // Pointer handling must be registered before OrbitControls so we can veto it.
    this._pointers = new Map();
    canvas.addEventListener('pointerdown', (e) => this._down(e));
    canvas.addEventListener('pointermove', (e) => this._move(e));
    canvas.addEventListener('pointerup', (e) => this._up(e));
    canvas.addEventListener('pointercancel', (e) => this._up(e, true));

    const c = this.controls = new OrbitControls(cam, canvas);
    c.enableDamping = true;
    c.dampingFactor = 0.15;
    c.target.set(0, 0, 10);
    c.zoomToCursor = true;
    c.maxDistance = 2000;
    c.addEventListener('change', () => this.requestRender());

    this.raycaster = new Raycaster();
    this.materials = {
      hole: new MeshStandardMaterial({ color: 0x9aa4b2, transparent: true, opacity: 0.35, depthWrite: false, side: DoubleSide }),
      edgeSel: new LineBasicMaterial({ color: 0xffb020 }),
      edge: new LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 }),
    };
    this._colorMats = new Map();
    this.buildPlate();

    this._dirty = true;
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement);
    this.resize();
    const loop = () => {
      requestAnimationFrame(loop);
      const moved = this.controls.update();
      if (this._dirty || moved) { this._dirty = false; this.renderer.render(this.scene, this.camera); }
    };
    loop();
  }

  requestRender() { this._dirty = true; }

  resize() {
    const p = this.canvas.parentElement;
    const w = p.clientWidth, h = p.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.requestRender();
  }

  setPlate(size) {
    this.plate = size;
    this.buildPlate();
  }

  buildPlate() {
    const g = this.plateGroup;
    for (const c of [...g.children]) { g.remove(c); c.geometry.dispose(); }
    const { x: W, y: D, z: H } = this.plate;
    const hx = W / 2, hy = D / 2;
    const plane = new Mesh(new PlaneGeometry(W, D), new MeshBasicMaterial({ color: 0x1f242c }));
    plane.position.z = -0.05;
    g.add(plane);
    const minor = [], major = [];
    for (let x = -Math.floor(hx / 10) * 10; x <= hx; x += 10) (x % 50 === 0 ? major : minor).push(x, -hy, 0, x, hy, 0);
    for (let y = -Math.floor(hy / 10) * 10; y <= hy; y += 10) (y % 50 === 0 ? major : minor).push(-hx, y, 0, hx, y, 0);
    const lines = (arr, color) => {
      const bg = new BufferGeometry();
      bg.setAttribute('position', new Float32BufferAttribute(arr, 3));
      return new LineSegments(bg, new LineBasicMaterial({ color }));
    };
    g.add(lines(minor, 0x2b323c));
    g.add(lines(major, 0x3a4452));
    // Axes: X red, Y green from the plate center.
    g.add(lines([0, 0, 0.02, Math.min(30, hx), 0, 0.02], 0xe5534b));
    g.add(lines([0, 0, 0.02, 0, Math.min(30, hy), 0.02], 0x57ab5a));
    // Build volume outline.
    const box = [];
    const c = [[-hx, -hy], [hx, -hy], [hx, hy], [-hx, hy]];
    for (let i = 0; i < 4; i++) {
      const [x1, y1] = c[i], [x2, y2] = c[(i + 1) % 4];
      box.push(x1, y1, 0, x2, y2, 0, x1, y1, H, x2, y2, H, x1, y1, 0, x1, y1, H);
    }
    const outline = lines(box, 0x3a4452);
    outline.material.transparent = true; outline.material.opacity = 0.5;
    g.add(outline);
    this.requestRender();
  }

  colorMat(hex) {
    let m = this._colorMats.get(hex);
    if (!m) {
      m = new MeshStandardMaterial({ color: new Color(hex), roughness: 0.55, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
      this._colorMats.set(hex, m);
    }
    return m;
  }

  // Sync meshes with the document's top-level nodes.
  sync(nodes) {
    const seen = new Set();
    for (const n of nodes) {
      seen.add(n.id);
      let entry = this.meshes.get(n.id);
      const geo = nodeGeometry(n);
      if (!entry) {
        const mesh = new Mesh(geo);
        mesh.matrixAutoUpdate = false;
        mesh.userData.id = n.id;
        const edges = new LineSegments(new EdgesGeometry(geo, 30), this.materials.edge);
        edges.matrixAutoUpdate = false;
        entry = { mesh, edges, geo };
        this.meshes.set(n.id, entry);
        this.world.add(mesh, edges);
      } else if (entry.geo !== geo) {
        entry.mesh.geometry = geo;
        entry.edges.geometry.dispose();
        entry.edges.geometry = new EdgesGeometry(geo, 30);
        entry.geo = geo;
      }
      entry.mesh.material = n.hole ? this.materials.hole : this.colorMat(n.color);
      entry.mesh.renderOrder = n.hole ? 2 : 0;
      nodeMatrix(n, entry.mesh.matrix);
      entry.edges.matrix.copy(entry.mesh.matrix);
      entry.mesh.visible = entry.edges.visible = !n.hidden;
      entry.mesh.matrixWorldNeedsUpdate = entry.edges.matrixWorldNeedsUpdate = true;
    }
    for (const [id, entry] of this.meshes) {
      if (!seen.has(id)) {
        this.world.remove(entry.mesh, entry.edges);
        entry.edges.geometry.dispose();
        this.meshes.delete(id);
      }
    }
    this.updateSelection();
    this.requestRender();
  }

  setSelection(ids) { this.selected = new Set(ids); this.updateSelection(); }

  updateSelection() {
    for (const [id, e] of this.meshes) {
      e.edges.material = this.selected.has(id) ? this.materials.edgeSel : this.materials.edge;
    }
    this.requestRender();
  }

  worldBox(ids) {
    const box = new Box3();
    for (const id of ids) {
      const e = this.meshes.get(id);
      if (!e || !e.mesh.visible) continue;
      e.mesh.updateMatrixWorld();
      const b = new Box3().setFromObject(e.mesh, true);
      box.union(b);
    }
    return box;
  }

  // Precise world-space AABB of a node (uses vertices, not the rotated local box).
  nodeBox(node) {
    const g = nodeGeometry(node);
    const m = nodeMatrix(node, new Matrix4());
    const a = g.getAttribute('position').array;
    const b = new Box3();
    const v = new Vector3();
    for (let i = 0; i < a.length; i += 3) b.expandByPoint(v.set(a[i], a[i + 1], a[i + 2]).applyMatrix4(m));
    return b;
  }

  view(name, ids) {
    const all = [...this.meshes.keys()];
    let box = this.worldBox(ids && ids.length ? ids : all);
    if (box.isEmpty()) box = new Box3(new Vector3(-50, -50, 0), new Vector3(50, 50, 40));
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3()).length() || 50;
    const dist = Math.max(size, 30) / (2 * Math.tan((this.camera.fov * Math.PI) / 360)) * 1.1;
    const dirs = {
      iso: new Vector3(0.6, -0.9, 0.7), top: new Vector3(0, -0.0001, 1), front: new Vector3(0, -1, 0.0001),
      right: new Vector3(1, 0, 0.0001), back: new Vector3(0, 1, 0.0001), left: new Vector3(-1, 0, 0.0001),
    };
    const dir = (dirs[name] || dirs.iso).normalize();
    this.controls.target.copy(center);
    this.camera.position.copy(center).addScaledVector(dir, dist);
    this.controls.update();
    this.requestRender();
  }

  _ndc(e) {
    const r = this.canvas.getBoundingClientRect();
    return new Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  }

  pick(e) {
    this.raycaster.setFromCamera(this._ndc(e), this.camera);
    const targets = [...this.meshes.values()].filter((x) => x.mesh.visible).map((x) => x.mesh);
    const hits = this.raycaster.intersectObjects(targets, false);
    return hits.length ? hits[0] : null;
  }

  _down(e) {
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, t: performance.now() });
    if (this._pointers.size > 1) {
      // Second finger: cancel any object drag and let OrbitControls pinch.
      if (this._drag) this._endDrag();
      this._tapCandidate = null;
      return;
    }
    this._tapCandidate = { x: e.clientX, y: e.clientY, t: performance.now() };
    const hit = this.pick(e);
    if (hit && this.selected.has(hit.object.userData.id) && !this.h.isLocked?.()) {
      // Start moving the selection instead of orbiting.
      this.controls.enabled = false;
      const p = hit.point.clone();
      let plane;
      if (this.dragMode === 'z') {
        const n = new Vector3().subVectors(this.camera.position, p).setZ(0);
        if (n.lengthSq() < 1e-6) n.set(0, -1, 0);
        plane = new Plane().setFromNormalAndCoplanarPoint(n.normalize(), p);
      } else {
        plane = new Plane(new Vector3(0, 0, 1), -p.z);
      }
      this._drag = { id: e.pointerId, plane, start: p, last: new Vector3(), started: false };
      this.canvas.setPointerCapture(e.pointerId);
    }
  }

  _move(e) {
    const d = this._drag;
    if (this._tapCandidate) {
      const dx = e.clientX - this._tapCandidate.x, dy = e.clientY - this._tapCandidate.y;
      if (dx * dx + dy * dy > 64) this._tapCandidate = null;
    }
    if (!d || d.id !== e.pointerId) return;
    this.raycaster.setFromCamera(this._ndc(e), this.camera);
    const p = new Vector3();
    if (!this.raycaster.ray.intersectPlane(d.plane, p)) return;
    const delta = p.sub(d.start);
    if (this.dragMode === 'z') delta.set(0, 0, delta.z);
    else delta.z = 0;
    if (!d.started) {
      if (this._tapCandidate) return; // wait until it is clearly a drag
      d.started = true;
      this.h.onDragStart?.();
    }
    this.h.onDrag?.(delta);
  }

  _up(e, cancelled) {
    this._pointers.delete(e.pointerId);
    const tap = this._tapCandidate;
    this._tapCandidate = null;
    if (this._drag && this._drag.id === e.pointerId) {
      const started = this._drag.started;
      this._endDrag();
      if (started) return;
    }
    if (!cancelled && tap && performance.now() - tap.t < 500) {
      const hit = this.pick(e);
      this.h.onTap?.(hit ? hit.object.userData.id : null);
    }
  }

  _endDrag() {
    const d = this._drag;
    this._drag = null;
    this.controls.enabled = true;
    try { this.canvas.releasePointerCapture(d.id); } catch { /* already released */ }
    if (d.started) this.h.onDragEnd?.();
  }

  snapshotPNG(size = 256) {
    this.renderer.render(this.scene, this.camera);
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const src = this.canvas;
    const s = Math.min(src.width, src.height);
    c.getContext('2d').drawImage(src, (src.width - s) / 2, (src.height - s) / 2, s, s, 0, 0, size, size);
    return c.toDataURL('image/jpeg', 0.7);
  }
}
