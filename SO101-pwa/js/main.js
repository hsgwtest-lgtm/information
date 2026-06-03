// SO101 Main — App entry point & tab management

import { buildRobotModel, applyAngles, getGripperWorldPosition } from './robot.js';
import { Viewer } from './viewer.js';
import { Controls } from './controls.js';
import { Sequencer } from './sequencer.js';
import { VirtualBox } from './objects.js';

class App {
  constructor() {
    this.THREE = window.THREE;
    this.currentAngles = [0, 0, 0, 0, 0, 0];
    this.currentGripper = 0;
    this.robotModel = null;
    this.viewer = null;
    this.controls = null;
    this.sequencer = null;
    this.virtualBox = null;
    this._animFrameId = null;
  }

  async init() {
    // Wait for Three.js to load
    if (!window.THREE) {
      console.error('Three.js not loaded');
      return;
    }

    const THREE = this.THREE;

    // OrbitControls — loaded as THREE.OrbitControls from CDN
    const OrbitControls = THREE.OrbitControls;
    if (!OrbitControls) {
      console.error('OrbitControls not loaded');
      return;
    }

    // Create viewer
    const container = document.getElementById('viewer-container');
    this.viewer = new Viewer(container, THREE, OrbitControls);

    // Build robot model
    this.robotModel = buildRobotModel(THREE);
    this.viewer.add(this.robotModel.group);

    // Virtual box
    this.virtualBox = new VirtualBox(THREE, this.viewer.scene);

    // Controls
    this.controls = new Controls(this);

    // Sequencer
    this.sequencer = new Sequencer(this);

    // Initial pose
    this.setAngles(this.currentAngles, this.currentGripper);

    // Start update loop
    this._updateLoop();

    // iOS PWA hint
    this._showInstallHint();

    // Register service worker
    this._registerSW();
  }

  /**
   * Set joint angles and gripper, update visual model.
   */
  setAngles(angles, gripper) {
    this.currentAngles = [...angles];
    this.currentGripper = gripper;

    applyAngles(
      this.robotModel.joints,
      angles,
      gripper,
      this.robotModel.gripperLeft,
      this.robotModel.gripperRight
    );
  }

  /**
   * Get end-effector world position for given angles.
   * Temporarily applies angles, reads world pos, then restores.
   */
  getEEWorldPos(angles) {
    const THREE = this.THREE;
    const saved = [...this.currentAngles];
    const savedG = this.currentGripper;

    applyAngles(
      this.robotModel.joints, angles, savedG,
      this.robotModel.gripperLeft, this.robotModel.gripperRight
    );

    // Force world matrix update
    this.robotModel.group.updateMatrixWorld(true);

    const pos = getGripperWorldPosition(this.robotModel.gripperBase, THREE);

    // Restore
    applyAngles(
      this.robotModel.joints, saved, savedG,
      this.robotModel.gripperLeft, this.robotModel.gripperRight
    );

    return pos;
  }

  /**
   * Get joint world position for CCD IK.
   */
  getJointWorldPos(angles, jointIndex) {
    const THREE = this.THREE;
    const saved = [...this.currentAngles];
    const savedG = this.currentGripper;

    applyAngles(
      this.robotModel.joints, angles, savedG,
      this.robotModel.gripperLeft, this.robotModel.gripperRight
    );

    this.robotModel.group.updateMatrixWorld(true);

    const pos = new THREE.Vector3();
    this.robotModel.joints[jointIndex].getWorldPosition(pos);

    // Restore
    applyAngles(
      this.robotModel.joints, saved, savedG,
      this.robotModel.gripperLeft, this.robotModel.gripperRight
    );

    return pos;
  }

  /**
   * Update loop for virtual objects.
   */
  _updateLoop() {
    const THREE = this.THREE;

    const update = () => {
      this._animFrameId = requestAnimationFrame(update);

      if (this.virtualBox) {
        this.robotModel.group.updateMatrixWorld(true);
        const eePos = getGripperWorldPosition(this.robotModel.gripperBase, THREE);
        this.virtualBox.update(eePos, this.currentGripper);
      }
    };

    update();
  }

  _showInstallHint() {
    // Show iOS install hint only once
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone = window.navigator.standalone === true;
    const hintShown = localStorage.getItem('so101-hint-shown');

    if (isIOS && !isStandalone && !hintShown) {
      const hint = document.getElementById('install-hint');
      if (hint) {
        hint.style.display = 'block';
        hint.addEventListener('click', () => {
          hint.style.display = 'none';
          localStorage.setItem('so101-hint-shown', '1');
        });
        setTimeout(() => {
          hint.style.display = 'none';
          localStorage.setItem('so101-hint-shown', '1');
        }, 8000);
      }
    }
  }

  _registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.warn('SW registration failed:', err);
      });
    }
  }
}

// Boot
window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
