import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function createWall() {
    const url = new URL("../assets/brown-brick-wall.glb",import.meta.url)
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      url.href,
      (gltf) => {
        const wall = gltf.scene;
        resolve(wall);
      },
      undefined,
      (error) => reject(error)
    );
  });
}
