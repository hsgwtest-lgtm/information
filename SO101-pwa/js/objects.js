// SO101 Virtual Objects — Box with grab/release physics

export class VirtualBox {
  /**
   * @param {object} THREE
   * @param {THREE.Scene} scene
   * @param {{ x: number, y: number, z: number }} initialPos — mm
   * @param {number} size — mm (cube side length)
   */
  constructor(THREE, scene, initialPos = { x: 200, y: 20, z: 0 }, size = 40) {
    this.THREE = THREE;
    this.scene = scene;
    this.size = size;
    this.initialPos = { ...initialPos };
    this.attached = false;
    this._falling = false;
    this._fallVelocity = 0;

    // Create mesh
    const geo = new THREE.BoxGeometry(size, size, size);
    const mat = new THREE.MeshPhongMaterial({
      color: 0xff4488,
      transparent: true,
      opacity: 0.85,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(initialPos.x, initialPos.y, initialPos.z);
    this.mesh.castShadow = true;
    scene.add(this.mesh);
  }

  /**
   * Update every frame.
   * @param {THREE.Vector3} eeWorldPos — gripper world position
   * @param {number} gripperPercent — 0..100
   */
  update(eeWorldPos, gripperPercent) {
    if (this.attached) {
      // Follow EE
      this.mesh.position.copy(eeWorldPos);

      // Release condition: gripper < 20%
      if (gripperPercent < 20) {
        this.attached = false;
        this._falling = true;
        this._fallVelocity = 0;
      }
    } else if (this._falling) {
      // Gravity fall to Y=0 (floor) + half box size
      this._fallVelocity += 9.8 * 0.016; // ~60fps step
      this.mesh.position.y -= this._fallVelocity;

      const floor = this.size / 2;
      if (this.mesh.position.y <= floor) {
        this.mesh.position.y = floor;
        this._falling = false;
        this._fallVelocity = 0;
      }
    } else {
      // Grab condition: distance < 30mm AND gripper > 50%
      const dist = this.mesh.position.distanceTo(eeWorldPos);
      if (dist < 30 && gripperPercent > 50) {
        this.attached = true;
      }
    }
  }

  /**
   * Reset to initial position.
   */
  reset() {
    this.attached = false;
    this._falling = false;
    this._fallVelocity = 0;
    this.mesh.position.set(this.initialPos.x, this.initialPos.y, this.initialPos.z);
  }
}
