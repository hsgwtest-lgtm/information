// SO101 Robot — DH Forward Kinematics (7DoF: 6 joints + gripper)

/**
 * DH Parameters for LeRobot SO-101
 * Each entry: { a (mm), d (mm), alpha (rad), min (rad), max (rad) }
 */
export const DH_PARAMS = [
  { a: 0,   d: 100, alpha: Math.PI / 2,  min: -Math.PI,     max: Math.PI     }, // J1
  { a: 130, d: 0,   alpha: 0,            min: -Math.PI / 2, max: Math.PI / 2 }, // J2
  { a: 120, d: 0,   alpha: 0,            min: -Math.PI / 2, max: Math.PI / 2 }, // J3
  { a: 0,   d: 0,   alpha: Math.PI / 2,  min: -Math.PI,     max: Math.PI     }, // J4
  { a: 0,   d: 100, alpha: -Math.PI / 2, min: -Math.PI / 2, max: Math.PI / 2 }, // J5
  { a: 0,   d: 60,  alpha: 0,            min: -Math.PI,     max: Math.PI     }, // J6
];

/** Home position angles (radians) — upright neutral */
export const HOME_ANGLES = [0, 0, 0, 0, 0, 0];

/** Zero position (all zeros) */
export const ZERO_ANGLES = [0, 0, 0, 0, 0, 0];

/**
 * Build a 4×4 DH transformation matrix (column-major for Three.js).
 * Standard DH convention:
 *   Rot_z(θ) · Trans_z(d) · Trans_x(a) · Rot_x(α)
 */
export function dhMatrix(theta, d, a, alpha) {
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const ca = Math.cos(alpha);
  const sa = Math.sin(alpha);

  // Return column-major array (Three.js Matrix4 uses column-major)
  return [
    ct,       st,       0,   0,
    -st * ca, ct * ca,  sa,  0,
    st * sa,  -ct * sa, ca,  0,
    a * ct,   a * st,   d,   1,
  ];
}

/**
 * Compute forward kinematics: returns an array of 7 THREE.Matrix4
 * (cumulative transforms from base to each joint frame, including EE).
 * @param {number[]} angles — 6 joint angles in radians
 * @returns {THREE.Matrix4[]} — transforms[0..5] = joint frames, transforms[6] = EE
 */
export function computeFK(angles, THREE) {
  const transforms = [];
  const cumulative = new THREE.Matrix4();

  for (let i = 0; i < 6; i++) {
    const p = DH_PARAMS[i];
    const m = new THREE.Matrix4();
    m.set(
      ...rowMajorFromDH(angles[i], p.d, p.a, p.alpha)
    );
    cumulative.multiply(m);
    transforms.push(cumulative.clone());
  }

  return transforms;
}

/**
 * DH matrix in row-major for THREE.Matrix4.set() which takes row-major args.
 */
function rowMajorFromDH(theta, d, a, alpha) {
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const ca = Math.cos(alpha);
  const sa = Math.sin(alpha);

  return [
    ct,       -st * ca,  st * sa,  a * ct,
    st,       ct * ca,   -ct * sa, a * st,
    0,        sa,        ca,       d,
    0,        0,         0,        1,
  ];
}

/**
 * Get the end-effector position as a THREE.Vector3 (mm).
 */
export function getEEPosition(angles, THREE) {
  const transforms = computeFK(angles, THREE);
  const ee = transforms[transforms.length - 1];
  const pos = new THREE.Vector3();
  pos.setFromMatrixPosition(ee);
  return pos;
}

/**
 * Clamp joint angle to its limits.
 */
export function clampAngle(jointIndex, angle) {
  const p = DH_PARAMS[jointIndex];
  return Math.max(p.min, Math.min(p.max, angle));
}

/**
 * Build the Three.js visual model of SO101 using primitives.
 * Returns { group, joints, links, gripperLeft, gripperRight }
 */
export function buildRobotModel(THREE) {
  const group = new THREE.Group();

  // Materials
  const baseMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
  const linkMat = new THREE.MeshPhongMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.85 });
  const jointMat = new THREE.MeshPhongMaterial({ color: 0x666666 });
  const gripperMat = new THREE.MeshPhongMaterial({ color: 0xff6600 });

  // Base platform
  const baseGeo = new THREE.CylinderGeometry(50, 60, 20, 32);
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.y = 10;
  group.add(baseMesh);

  // Build kinematic chain as nested groups (each joint is a pivot)
  const joints = [];
  const links = [];

  // J1 pivot (Y-axis rotation at base top)
  const j1 = new THREE.Group();
  j1.position.set(0, 20, 0);
  group.add(j1);
  joints.push(j1);

  // Link 1 (vertical, d=100)
  const link1Geo = new THREE.CylinderGeometry(12, 12, 100, 16);
  const link1 = new THREE.Mesh(link1Geo, linkMat);
  link1.position.y = 50;
  j1.add(link1);
  links.push(link1);

  // Joint sphere
  const jSphereGeo = new THREE.SphereGeometry(15, 16, 16);

  const jSphere1 = new THREE.Mesh(jSphereGeo, jointMat);
  jSphere1.position.y = 100;
  j1.add(jSphere1);

  // J2 pivot
  const j2 = new THREE.Group();
  j2.position.set(0, 100, 0);
  j1.add(j2);
  joints.push(j2);

  // Link 2 (a=130)
  const link2Geo = new THREE.BoxGeometry(16, 130, 16);
  const link2 = new THREE.Mesh(link2Geo, linkMat);
  link2.position.y = 65;
  j2.add(link2);
  links.push(link2);

  const jSphere2 = new THREE.Mesh(jSphereGeo, jointMat);
  jSphere2.position.y = 130;
  j2.add(jSphere2);

  // J3 pivot
  const j3 = new THREE.Group();
  j3.position.set(0, 130, 0);
  j2.add(j3);
  joints.push(j3);

  // Link 3 (a=120)
  const link3Geo = new THREE.BoxGeometry(14, 120, 14);
  const link3 = new THREE.Mesh(link3Geo, linkMat);
  link3.position.y = 60;
  j3.add(link3);
  links.push(link3);

  const jSphere3 = new THREE.Mesh(jSphereGeo.clone(), jointMat);
  jSphere3.position.y = 120;
  j3.add(jSphere3);

  // J4 pivot
  const j4 = new THREE.Group();
  j4.position.set(0, 120, 0);
  j3.add(j4);
  joints.push(j4);

  // Link 4 (short connector)
  const link4Geo = new THREE.CylinderGeometry(10, 10, 30, 16);
  const link4 = new THREE.Mesh(link4Geo, linkMat);
  link4.position.y = 15;
  j4.add(link4);
  links.push(link4);

  // J5 pivot
  const j5 = new THREE.Group();
  j5.position.set(0, 30, 0);
  j4.add(j5);
  joints.push(j5);

  // Link 5 (d=100 wrist)
  const link5Geo = new THREE.CylinderGeometry(8, 8, 100, 16);
  const link5 = new THREE.Mesh(link5Geo, linkMat);
  link5.position.y = 50;
  j5.add(link5);
  links.push(link5);

  // J6 pivot
  const j6 = new THREE.Group();
  j6.position.set(0, 100, 0);
  j5.add(j6);
  joints.push(j6);

  // Link 6 / EE mount (d=60)
  const link6Geo = new THREE.CylinderGeometry(6, 8, 60, 16);
  const link6 = new THREE.Mesh(link6Geo, linkMat);
  link6.position.y = 30;
  j6.add(link6);
  links.push(link6);

  // Gripper
  const gripperBase = new THREE.Group();
  gripperBase.position.set(0, 60, 0);
  j6.add(gripperBase);

  const fingerGeo = new THREE.BoxGeometry(6, 40, 10);
  const gripperLeft = new THREE.Mesh(fingerGeo, gripperMat);
  gripperLeft.position.set(-15, 20, 0);
  gripperBase.add(gripperLeft);

  const gripperRight = new THREE.Mesh(fingerGeo, gripperMat);
  gripperRight.position.set(15, 20, 0);
  gripperBase.add(gripperRight);

  return { group, joints, links, gripperBase, gripperLeft, gripperRight };
}

/**
 * Apply joint angles to the visual model.
 * Uses simplified rotation mapping for the primitive model:
 *   J1 → rotate Y, J2 → rotate Z, J3 → rotate Z,
 *   J4 → rotate Y, J5 → rotate Z, J6 → rotate Y
 * @param {THREE.Group[]} joints — from buildRobotModel
 * @param {number[]} angles — 6 joint angles in radians
 * @param {number} gripper — 0..100 (% closed)
 * @param {THREE.Mesh} gripperLeft
 * @param {THREE.Mesh} gripperRight
 */
export function applyAngles(joints, angles, gripper, gripperLeft, gripperRight) {
  // J1 — base rotation (Y axis)
  joints[0].rotation.set(0, angles[0], 0);
  // J2 — shoulder (Z axis)
  joints[1].rotation.set(0, 0, angles[1]);
  // J3 — elbow (Z axis)
  joints[2].rotation.set(0, 0, angles[2]);
  // J4 — wrist roll (Y axis)
  joints[3].rotation.set(0, angles[3], 0);
  // J5 — wrist pitch (Z axis)
  joints[4].rotation.set(0, 0, angles[4]);
  // J6 — wrist roll (Y axis)
  joints[5].rotation.set(0, angles[5], 0);

  // Gripper opening: 0% = fully open (offset 20), 100% = closed (offset 5)
  const offset = 20 - (gripper / 100) * 15;
  gripperLeft.position.x = -offset;
  gripperRight.position.x = offset;
}

/**
 * Get the world position of the gripper (end-effector) from the visual model.
 */
export function getGripperWorldPosition(gripperBase, THREE) {
  const pos = new THREE.Vector3();
  gripperBase.getWorldPosition(pos);
  return pos;
}
