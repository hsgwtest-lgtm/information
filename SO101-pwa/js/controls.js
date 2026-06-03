// SO101 Controls — Slider UI & Mode Switching

import { DH_PARAMS, HOME_ANGLES, ZERO_ANGLES, clampAngle } from './robot.js';
import { solveCCD } from './ik.js';

/**
 * Create and manage the control panel UI.
 */
export class Controls {
  /**
   * @param {object} app — reference to main app state
   */
  constructor(app) {
    this.app = app;
    this.mode = 'fk'; // 'fk' | 'ik' | 'seq'
    this.sliders = [];
    this.ikInputs = {};
    this._buildUI();
  }

  _buildUI() {
    // Tab buttons are in HTML; bind them
    document.getElementById('tab-fk').addEventListener('click', () => this.switchMode('fk'));
    document.getElementById('tab-ik').addEventListener('click', () => this.switchMode('ik'));
    document.getElementById('tab-seq').addEventListener('click', () => this.switchMode('seq'));

    this._buildFKPanel();
    this._buildIKPanel();
    // SEQ panel is built by sequencer.js
  }

  switchMode(mode) {
    this.mode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + mode).classList.add('active');

    document.getElementById('panel-fk').style.display = mode === 'fk' ? 'block' : 'none';
    document.getElementById('panel-ik').style.display = mode === 'ik' ? 'block' : 'none';
    document.getElementById('panel-seq').style.display = mode === 'seq' ? 'block' : 'none';
  }

  // ─── FK Panel ─────────────────────────────────────────
  _buildFKPanel() {
    const panel = document.getElementById('panel-fk');
    const labels = ['J1 Base', 'J2 Shoulder', 'J3 Elbow', 'J4 Wrist Roll', 'J5 Wrist Pitch', 'J6 Wrist Roll2', 'Gripper'];

    labels.forEach((label, i) => {
      const row = document.createElement('div');
      row.className = 'slider-row';

      const lbl = document.createElement('label');
      lbl.textContent = label;
      row.appendChild(lbl);

      const slider = document.createElement('input');
      slider.type = 'range';
      slider.className = 'joint-slider';

      if (i < 6) {
        const p = DH_PARAMS[i];
        slider.min = (p.min * 180 / Math.PI).toFixed(0);
        slider.max = (p.max * 180 / Math.PI).toFixed(0);
        slider.value = '0';
        slider.step = '1';
      } else {
        // Gripper: 0–100%
        slider.min = '0';
        slider.max = '100';
        slider.value = '0';
        slider.step = '1';
      }

      const val = document.createElement('span');
      val.className = 'slider-value';
      val.textContent = slider.value + (i < 6 ? '°' : '%');

      slider.addEventListener('input', () => {
        val.textContent = slider.value + (i < 6 ? '°' : '%');
        this._onFKChange();
      });

      row.appendChild(slider);
      row.appendChild(val);
      panel.appendChild(row);

      this.sliders.push(slider);
    });

    // Buttons
    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';

    const homeBtn = document.createElement('button');
    homeBtn.className = 'ctrl-btn';
    homeBtn.textContent = '🏠 Home';
    homeBtn.addEventListener('click', () => this._setAngles(HOME_ANGLES, 0));
    btnRow.appendChild(homeBtn);

    const zeroBtn = document.createElement('button');
    zeroBtn.className = 'ctrl-btn';
    zeroBtn.textContent = '0️⃣ Zero';
    zeroBtn.addEventListener('click', () => this._setAngles(ZERO_ANGLES, 0));
    btnRow.appendChild(zeroBtn);

    panel.appendChild(btnRow);
  }

  _onFKChange() {
    const angles = [];
    for (let i = 0; i < 6; i++) {
      angles.push(parseFloat(this.sliders[i].value) * Math.PI / 180);
    }
    const gripper = parseFloat(this.sliders[6].value);
    this.app.setAngles(angles, gripper);
  }

  _setAngles(angles, gripper) {
    for (let i = 0; i < 6; i++) {
      const deg = Math.round(angles[i] * 180 / Math.PI);
      this.sliders[i].value = deg;
      this.sliders[i].parentElement.querySelector('.slider-value').textContent = deg + '°';
    }
    this.sliders[6].value = gripper;
    this.sliders[6].parentElement.querySelector('.slider-value').textContent = gripper + '%';
    this.app.setAngles(angles, gripper);
  }

  /**
   * Update sliders from external angle changes (e.g., IK, sequencer).
   */
  updateSlidersFromAngles(angles, gripper) {
    for (let i = 0; i < 6; i++) {
      const deg = Math.round(angles[i] * 180 / Math.PI);
      this.sliders[i].value = deg;
      this.sliders[i].parentElement.querySelector('.slider-value').textContent = deg + '°';
    }
    this.sliders[6].value = Math.round(gripper);
    this.sliders[6].parentElement.querySelector('.slider-value').textContent = Math.round(gripper) + '%';
  }

  // ─── IK Panel ─────────────────────────────────────────
  _buildIKPanel() {
    const panel = document.getElementById('panel-ik');

    const axes = [
      { id: 'ik-x', label: 'X (mm)', min: -400, max: 400, value: 200 },
      { id: 'ik-y', label: 'Y (mm)', min: 0,    max: 600, value: 300 },
      { id: 'ik-z', label: 'Z (mm)', min: -400, max: 400, value: 0   },
    ];

    axes.forEach(cfg => {
      const row = document.createElement('div');
      row.className = 'slider-row';

      const lbl = document.createElement('label');
      lbl.textContent = cfg.label;
      row.appendChild(lbl);

      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'ik-input';
      input.id = cfg.id;
      input.min = cfg.min;
      input.max = cfg.max;
      input.value = cfg.value;
      input.step = '5';

      input.addEventListener('change', () => this._onIKChange());
      input.addEventListener('input', () => this._onIKChange());

      row.appendChild(input);
      panel.appendChild(row);
      this.ikInputs[cfg.id] = input;
    });

    // Solve button
    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';

    const solveBtn = document.createElement('button');
    solveBtn.className = 'ctrl-btn accent';
    solveBtn.textContent = '🎯 Solve IK';
    solveBtn.addEventListener('click', () => this._onIKChange());
    btnRow.appendChild(solveBtn);

    // Error display
    this.ikStatus = document.createElement('span');
    this.ikStatus.className = 'ik-status';
    this.ikStatus.textContent = '';
    btnRow.appendChild(this.ikStatus);

    panel.appendChild(btnRow);
  }

  _onIKChange() {
    const x = parseFloat(this.ikInputs['ik-x'].value) || 0;
    const y = parseFloat(this.ikInputs['ik-y'].value) || 0;
    const z = parseFloat(this.ikInputs['ik-z'].value) || 0;

    const THREE = this.app.THREE;
    const targetPos = new THREE.Vector3(x, y, z);

    const result = solveCCD(
      this.app.currentAngles,
      targetPos,
      (angles) => this.app.getEEWorldPos(angles),
      (angles, idx) => this.app.getJointWorldPos(angles, idx),
      { maxIter: 100, tolerance: 1 }
    );

    if (result.converged) {
      this.ikStatus.textContent = `✅ err: ${result.error.toFixed(1)}mm`;
      this.ikStatus.style.color = '#00ff88';
    } else {
      this.ikStatus.textContent = `⚠️ err: ${result.error.toFixed(1)}mm`;
      this.ikStatus.style.color = '#ff4444';
    }

    this.app.setAngles(result.angles, this.app.currentGripper);
    this.updateSlidersFromAngles(result.angles, this.app.currentGripper);
  }
}
