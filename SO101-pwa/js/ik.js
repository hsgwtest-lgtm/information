// SO101 Inverse Kinematics — CCD (Cyclic Coordinate Descent)

import { DH_PARAMS, clampAngle } from './robot.js';

/**
 * CCD Inverse Kinematics solver.
 *
 * @param {number[]} currentAngles — current 6 joint angles (rad)
 * @param {THREE.Vector3} targetPos — desired EE position (mm)
 * @param {Function} getEEPosFn — function(angles) => THREE.Vector3
 * @param {Function} getJointPosFn — function(angles, jointIdx) => THREE.Vector3
 * @param {object} opts — { maxIter: 100, tolerance: 1 }
 * @returns {{ angles: number[], converged: boolean, error: number }}
 */
export function solveCCD(currentAngles, targetPos, getEEPosFn, getJointPosFn, opts = {}) {
  const maxIter = opts.maxIter || 100;
  const tolerance = opts.tolerance || 1; // mm

  const angles = [...currentAngles];
  let converged = false;
  let error = Infinity;

  for (let iter = 0; iter < maxIter; iter++) {
    // Iterate from end-effector back to base (joints 5→0)
    for (let i = 5; i >= 0; i--) {
      const eePos = getEEPosFn(angles);
      const jointPos = getJointPosFn(angles, i);

      // Vectors from joint to EE and from joint to target
      const toEE = eePos.clone().sub(jointPos);
      const toTarget = targetPos.clone().sub(jointPos);

      if (toEE.length() < 0.001 || toTarget.length() < 0.001) continue;

      toEE.normalize();
      toTarget.normalize();

      // Rotation axis and angle
      const axis = new toEE.constructor(); // THREE.Vector3
      axis.crossVectors(toEE, toTarget);
      const sinAngle = axis.length();
      const cosAngle = toEE.dot(toTarget);

      if (sinAngle < 0.0001) continue;

      let deltaAngle = Math.atan2(sinAngle, cosAngle);

      // Determine sign based on joint rotation axis mapping
      // J1,J4,J6 rotate around Y; J2,J3,J5 rotate around Z
      const rotationAxis = getJointAxis(i);
      axis.normalize();

      // Project delta onto the joint's rotation axis
      const dot = axis.dot(rotationAxis);
      deltaAngle *= Math.sign(dot);

      // Clamp delta to avoid wild jumps
      deltaAngle = Math.max(-0.3, Math.min(0.3, deltaAngle));

      angles[i] = clampAngle(i, angles[i] + deltaAngle);
    }

    // Check convergence
    const finalEE = getEEPosFn(angles);
    error = finalEE.distanceTo(targetPos);
    if (error < tolerance) {
      converged = true;
      break;
    }
  }

  return { angles, converged, error };
}

/**
 * Get the local rotation axis for a given joint (in world-ish terms).
 * This is a simplified axis used for the CCD projection.
 */
function getJointAxis(jointIndex) {
  // This returns a unit vector; actual axis depends on chain configuration.
  // For our simplified visual model:
  //   J1 → Y, J2 → Z, J3 → Z, J4 → Y, J5 → Z, J6 → Y
  // We return a THREE-like plain object with x,y,z
  const axes = [
    { x: 0, y: 1, z: 0, length() { return 1; }, normalize() { return this; },
      dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; } },
    { x: 0, y: 0, z: 1, length() { return 1; }, normalize() { return this; },
      dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; } },
    { x: 0, y: 0, z: 1, length() { return 1; }, normalize() { return this; },
      dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; } },
    { x: 0, y: 1, z: 0, length() { return 1; }, normalize() { return this; },
      dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; } },
    { x: 0, y: 0, z: 1, length() { return 1; }, normalize() { return this; },
      dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; } },
    { x: 0, y: 1, z: 0, length() { return 1; }, normalize() { return this; },
      dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; } },
  ];
  return axes[jointIndex];
}
