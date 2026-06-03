// SO101 Sequencer — Task step execution engine (Mode C)

import { animatePose } from './animation.js';
import { solveCCD } from './ik.js';

/**
 * Sequencer manages REACH → GRASP → CARRY → RELEASE cycles.
 */
export class Sequencer {
  constructor(app) {
    this.app = app;
    this.steps = [];
    this.running = false;
    this.paused = false;
    this.loop = false;
    this._currentAnimation = null;
    this._currentStepIndex = -1;

    this._buildDefaultSteps();
    this._buildUI();
  }

  _buildDefaultSteps() {
    // Default pick-and-place sequence
    this.steps = [
      { name: 'REACH',   target: { x: 200, y: 60, z: 0 },   gripper: 0,   duration: 1.5 },
      { name: 'GRASP',   target: { x: 200, y: 60, z: 0 },   gripper: 80,  duration: 0.5 },
      { name: 'CARRY',   target: { x: -150, y: 200, z: 100 }, gripper: 80,  duration: 2.0 },
      { name: 'RELEASE', target: { x: -150, y: 60, z: 100 }, gripper: 0,   duration: 0.5 },
    ];
  }

  _buildUI() {
    const panel = document.getElementById('panel-seq');

    // Step list
    const stepList = document.createElement('div');
    stepList.className = 'seq-step-list';
    stepList.id = 'seq-step-list';
    this._renderSteps(stepList);
    panel.appendChild(stepList);

    // Controls
    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';

    const playBtn = document.createElement('button');
    playBtn.className = 'ctrl-btn accent';
    playBtn.textContent = '▶ Play';
    playBtn.id = 'seq-play';
    playBtn.addEventListener('click', () => this.play());
    btnRow.appendChild(playBtn);

    const pauseBtn = document.createElement('button');
    pauseBtn.className = 'ctrl-btn';
    pauseBtn.textContent = '⏸ Pause';
    pauseBtn.id = 'seq-pause';
    pauseBtn.addEventListener('click', () => this.pause());
    btnRow.appendChild(pauseBtn);

    const resetBtn = document.createElement('button');
    resetBtn.className = 'ctrl-btn';
    resetBtn.textContent = '🔄 Reset';
    resetBtn.id = 'seq-reset';
    resetBtn.addEventListener('click', () => this.reset());
    btnRow.appendChild(resetBtn);

    panel.appendChild(btnRow);

    // Loop toggle
    const loopRow = document.createElement('div');
    loopRow.className = 'btn-row';

    const loopCheck = document.createElement('input');
    loopCheck.type = 'checkbox';
    loopCheck.id = 'seq-loop';
    loopCheck.addEventListener('change', (e) => { this.loop = e.target.checked; });
    loopRow.appendChild(loopCheck);

    const loopLabel = document.createElement('label');
    loopLabel.htmlFor = 'seq-loop';
    loopLabel.textContent = ' Loop';
    loopLabel.style.color = '#aaa';
    loopRow.appendChild(loopLabel);

    // Status
    this.statusEl = document.createElement('span');
    this.statusEl.className = 'seq-status';
    this.statusEl.textContent = 'Ready';
    loopRow.appendChild(this.statusEl);

    panel.appendChild(loopRow);

    // Step coordinate editors
    this._buildStepEditors(panel);
  }

  _renderSteps(container) {
    container.innerHTML = '';
    this.steps.forEach((step, i) => {
      const el = document.createElement('div');
      el.className = 'seq-step' + (i === this._currentStepIndex ? ' active' : '');
      el.textContent = `${step.name}  (${step.target.x}, ${step.target.y}, ${step.target.z}) G:${step.gripper}%`;
      container.appendChild(el);
    });
  }

  _buildStepEditors(panel) {
    const editorDiv = document.createElement('div');
    editorDiv.className = 'seq-editors';

    this.steps.forEach((step, i) => {
      const row = document.createElement('div');
      row.className = 'seq-editor-row';

      const title = document.createElement('span');
      title.className = 'seq-editor-title';
      title.textContent = step.name;
      row.appendChild(title);

      ['x', 'y', 'z'].forEach(axis => {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'seq-coord-input';
        input.value = step.target[axis];
        input.step = '10';
        input.placeholder = axis.toUpperCase();
        input.addEventListener('change', () => {
          this.steps[i].target[axis] = parseFloat(input.value) || 0;
          this._renderSteps(document.getElementById('seq-step-list'));
        });
        row.appendChild(input);
      });

      editorDiv.appendChild(row);
    });

    panel.appendChild(editorDiv);
  }

  async play() {
    if (this.running && this.paused) {
      this.paused = false;
      this.statusEl.textContent = 'Playing...';
      return;
    }
    if (this.running) return;

    this.running = true;
    this.paused = false;
    this.statusEl.textContent = 'Playing...';

    do {
      for (let i = 0; i < this.steps.length; i++) {
        if (!this.running) return;

        this._currentStepIndex = i;
        this._renderSteps(document.getElementById('seq-step-list'));

        const step = this.steps[i];
        this.statusEl.textContent = `Step: ${step.name}`;

        // Solve IK for target
        const THREE = this.app.THREE;
        const targetPos = new THREE.Vector3(step.target.x, step.target.y, step.target.z);

        const ikResult = solveCCD(
          this.app.currentAngles,
          targetPos,
          (angles) => this.app.getEEWorldPos(angles),
          (angles, idx) => this.app.getJointWorldPos(angles, idx),
          { maxIter: 100, tolerance: 2 }
        );

        // Animate to target pose
        const anim = animatePose({
          fromAngles: [...this.app.currentAngles],
          toAngles: ikResult.angles,
          fromGripper: this.app.currentGripper,
          toGripper: step.gripper,
          duration: step.duration,
          onFrame: (angles, gripper) => {
            if (this.paused) return;
            this.app.setAngles(angles, gripper);
            this.app.controls.updateSlidersFromAngles(angles, gripper);
          },
        });

        this._currentAnimation = anim;

        try {
          await anim.promise;
        } catch {
          // Animation cancelled
          return;
        }

        // Small pause between steps
        await this._sleep(200);
      }
    } while (this.loop && this.running);

    this.running = false;
    this._currentStepIndex = -1;
    this._renderSteps(document.getElementById('seq-step-list'));
    this.statusEl.textContent = 'Done';
  }

  pause() {
    if (this.running) {
      this.paused = !this.paused;
      this.statusEl.textContent = this.paused ? 'Paused' : 'Playing...';
    }
  }

  reset() {
    this.running = false;
    this.paused = false;
    if (this._currentAnimation) {
      this._currentAnimation.cancel();
      this._currentAnimation = null;
    }
    this._currentStepIndex = -1;
    this._renderSteps(document.getElementById('seq-step-list'));
    this.statusEl.textContent = 'Ready';

    // Reset robot and object
    this.app.setAngles([0, 0, 0, 0, 0, 0], 0);
    this.app.controls.updateSlidersFromAngles([0, 0, 0, 0, 0, 0], 0);
    if (this.app.virtualBox) {
      this.app.virtualBox.reset();
    }
  }

  _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
