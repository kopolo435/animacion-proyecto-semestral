import { initScene, animateScene } from './scenes/main-scene.js';

async function main() {
  await initScene();
  animateScene();
}

main();
