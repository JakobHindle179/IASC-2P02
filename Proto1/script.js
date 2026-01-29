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

// testCube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshNormalMaterial()
const testCube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(testCube)
// Sphere spawns at 0, 0, 0 be sure to move all made Geometry
//ANIM LOOP
const clock = new THREE.Clock()

const animation = () => {
    // Return Elapsed Time
    const elapsedTime = clock.getElapsedTime()

    //Animate testSphere
    testSphere.position.z=(-4)
    testSphere.position.y=(2 + 2 * Math.sin(elapsedTime))
    testSphere.position.x=(Math.sin(elapsedTime * 2))
    //Renderer
    renderer.render(scene, camera)
    // Request next Frame
    window.requestAnimationFrame(animation)
    testCube.rotation.z=(45)
    testCube.rotation.y=(elapsedTime * 0.5)
    testCube.rotation.x=(elapsedTime * 0.5)
    testCube.position.z=(Math.tan(elapsedTime))
    testCube.position.x=(Math.tan(elapsedTime))
}

animation()