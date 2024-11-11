import scene from '../core/scene.js';
import camera from '../core/camera.js';
import * as THREE from 'three';
import renderer from '../core/renderer.js';
import { createWall } from '../components/wall.js';
import { degreesToRadians } from '../utils/unitConversion.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import setUpMainRoom from './main-room.js';

let controls; // Declare controls variable here so it can be accessed in animateScene

export async function initScene() {
  // Load and add wall
    setUpMainRoom(scene)

  // Grid and lines
  const axesHelper = new THREE.AxesHelper(20); // Size 5, you can adjust it to be larger or smaller
  scene.add(axesHelper);
  const gridHelper = new THREE.GridHelper(50, 50); // Size of 50 units and 50 divisions
  gridHelper.position.set(0,-5,0)
  scene.add(gridHelper);

  // Ground plane
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0,-10,0)
  scene.add(ground);

  // Initialize OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;       // Smooth movement
  controls.dampingFactor = 0.05;       // Damping factor (adjust for smoother control)
  controls.screenSpacePanning = false; // Keep panning horizontal
  controls.maxPolarAngle = Math.PI / 2; // Prevent camera flip
  
  controls.update();
}

export function animateScene() {
  controls.update(); // Update controls on each frame
  renderer.render(scene, camera);
  renderer.setAnimationLoop(animateScene);
}
