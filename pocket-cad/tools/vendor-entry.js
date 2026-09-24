// Bundled into ../vendor/vendor.js by build-vendor.sh (esbuild).
// Only what the app uses is exported, so the bundle stays small and fully offline.
export {
  Scene, PerspectiveCamera, OrthographicCamera, WebGLRenderer, Color, Fog,
  AmbientLight, HemisphereLight, DirectionalLight,
  Mesh, Group, Object3D, LineSegments, Line, LineBasicMaterial, LineDashedMaterial,
  MeshStandardMaterial, MeshBasicMaterial, MeshPhongMaterial,
  BufferGeometry, BufferAttribute, Float32BufferAttribute, EdgesGeometry, PlaneGeometry,
  BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, TorusGeometry,
  ExtrudeGeometry, LatheGeometry, Shape, ShapeUtils, Path,
  Vector2, Vector3, Quaternion, Euler, Matrix4, Box3, Plane, Raycaster, MathUtils,
  DoubleSide, FrontSide, SRGBColorSpace,
} from 'three';
export { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
export { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js';
export { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
export { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
export { mergeVertices, mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
export { Brush, Evaluator, ADDITION, SUBTRACTION, INTERSECTION } from 'three-bvh-csg';
