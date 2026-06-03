// SO101 Viewer — Three.js Scene & OrbitControls

export class Viewer {
  constructor(containerEl, THREE, OrbitControls) {
    this.THREE = THREE;
    this.container = containerEl;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0f);

    // Camera
    const aspect = containerEl.clientWidth / containerEl.clientHeight || 1;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 1, 5000);
    this.camera.position.set(400, 350, 400);
    this.camera.lookAt(0, 150, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
    this.renderer.shadowMap.enabled = true;
    containerEl.appendChild(this.renderer.domElement);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 150, 0);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 150;
    this.controls.maxDistance = 1500;
    this.controls.update();

    // Lights
    this._setupLights();

    // Ground grid
    this._setupGround();

    // Axes helper
    const axes = new THREE.AxesHelper(100);
    this.scene.add(axes);

    // Resize handler
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);

    // Animation loop
    this._running = true;
    this._animate();
  }

  _setupLights() {
    const THREE = this.THREE;

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(300, 500, 300);
    dir.castShadow = true;
    this.scene.add(dir);

    const point = new THREE.PointLight(0x00d4ff, 0.5, 1000);
    point.position.set(-200, 400, -200);
    this.scene.add(point);
  }

  _setupGround() {
    const THREE = this.THREE;

    // Grid
    const grid = new THREE.GridHelper(800, 20, 0x333333, 0x1a1a1a);
    this.scene.add(grid);

    // Ground plane (transparent)
    const groundGeo = new THREE.PlaneGeometry(800, 800);
    const groundMat = new THREE.MeshPhongMaterial({
      color: 0x111111,
      transparent: true,
      opacity: 0.5,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  add(object3D) {
    this.scene.add(object3D);
  }

  remove(object3D) {
    this.scene.remove(object3D);
  }

  resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  _animate() {
    if (!this._running) return;
    requestAnimationFrame(() => this._animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this._running = false;
    window.removeEventListener('resize', this._onResize);
    this.renderer.dispose();
  }
}
