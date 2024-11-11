import * as THREE from 'three';

const scene = new THREE.Scene();
const backgroundTextureUrl = new URL('../assets/sky.jpg', import.meta.url);
const textureLoader = new THREE.TextureLoader();
textureLoader.load(backgroundTextureUrl.href, function (texture) {
  scene.background = texture; // Set the loaded texture as the scene background
});
export default scene;
