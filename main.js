import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; // Correct path for GLTFLoader

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const wallUrl = new URL(
  "./blender-assets/brown-brick-wall.glb",
  import.meta.url
);
// Create a ground plane
const groundGeometry = new THREE.PlaneGeometry(50, 50); // Adjust the size as needed
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
ground.position.y = 0; // Position ground at y=0
scene.add(ground);

// Sample cube (optional)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

camera.position.set(0, 5, 10); // Adjust the camera to better view the model and ground
camera.lookAt(0, 0, 0);

function animate() {
  renderer.render(scene, camera);
}

// Load and position the model
const assetsLoader = new GLTFLoader();
assetsLoader.load(
  wallUrl.href,
  function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0); // Set the model on top of the ground (adjust position if needed)
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
