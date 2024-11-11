import * as THREE from 'three';
import { createWall } from "../components/wall.js";
import { degreesToRadians } from '../utils/unitConversion.js';


// Function to set up the main room
async function setUpMainRoom(scene) {
    // Create the ground plane
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 5), // 5x5 room size
        new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide }) // Grey ground
    );
    ground.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    scene.add(ground);
    
    // Create walls using BoxGeometry
    const frontWallRigth = createWallMesh(1, 1); // front wall
    const frontWallLeft = createWallMesh(1, 1); // front wall
    const backWall = createWallMesh(1, 1);  // Back wall
    const leftWallLeft = createWallMesh(1, 1);  // Left wall
    const leftWallRigth = createWallMesh(1, 1);  // Left wall
    const rigthWallRigth = createWallMesh(1, 1);  // Right wall
    const rigthWallLeft = createWallMesh(1, 1);  // Right wall

    // Scale the walls

    frontWallRigth.scale.x = 2;
    frontWallLeft.scale.x = 2;
    rigthWallRigth.scale.x = 2;
    leftWallLeft.scale.x = 2;
    leftWallRigth.scale.x = 2;
    rigthWallLeft.scale.x = 2;
    backWall.scale.x = 5
    
    // Position the walls
    frontWallRigth.position.set(1.5, 0.5, 2.5);
    frontWallLeft.position.set(-1.5, 0.5, 2.5);

    backWall.position.set(0, 0.5, -2.5);

    leftWallLeft.position.set(-2.5,0.5, -1.5); 
    leftWallRigth.position.set(-2.5,0.5, 1.5); 

    rigthWallRigth.position.set(2.5, 0.5, 1.5);   
    rigthWallLeft.position.set(2.5, 0.5, -1.5); 

    // Rotate the walls to align with the room
    frontWallRigth.rotation.y = degreesToRadians(180) ;
    frontWallLeft.rotation.y = degreesToRadians(180) ;

    backWall.rotation.y = degreesToRadians(180);   // Rotate back wall (along Y-axis)
    leftWallRigth.rotation.y = degreesToRadians(90);
    leftWallLeft.rotation.y = degreesToRadians(90);

    rigthWallRigth.rotation.y = degreesToRadians(90); 
    rigthWallLeft.rotation.y = degreesToRadians(90); 

    // Add the walls to the scene
    scene.add(frontWallRigth);
    scene.add(frontWallLeft);
    scene.add(backWall);
    scene.add(leftWallRigth);
    scene.add(leftWallLeft);
    scene.add(rigthWallRigth);
    scene.add(rigthWallLeft);
}

// Function to create a wall mesh using BoxGeometry
function createWallMesh(width, height) {
    const geometry = new THREE.BoxGeometry(width, height, 0.1); // Thin box to represent a wall
    const material = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brown color for the wall
    const wall = new THREE.Mesh(geometry, material);
    return wall;
}

export default setUpMainRoom