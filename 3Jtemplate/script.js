import * as THREE from 'three';

/* SCENE */

// Canvas
const canvas = document.querySelector(".webgl")
// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('darkblue')
// Camera
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    100
    // FOV, Aspect Ratio, Near, Far
)
scene.add(camera)
camera.position.set(0, 0, 5)
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(window.innerWidth,window.innerHeight)

// MESHES
// testSphere
const sphereGeometry = new THREE.SphereGeometry(1)
const sphereMaterial = new THREE.MeshNormalMaterial()
const testSphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

scene.add(testSphere)
// Sphere spawns at 0, 0, 0 be sure to move all made Geometry
//ANIM LOOP
const clock = new THREE.Clock()

const animation = () => {
    // Return Elapsed Time
    const elapsedTime = clock.getElapsedTime()
    //Renderer
    renderer.render(scene, camera)
    // Request next Frame
    window.requestAnimationFrame(animation)
}

animation()