/**
 * WebGL
 */
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import particleImageSource from "../images/particles/1.png";

const canvas = document.querySelector("canvas.webgl");
const canvasBounding = canvas.getBoundingClientRect();

const scene = new THREE.Scene();
const galaxy = new THREE.Scene();
scene.add(galaxy);

//--------------------Scene objects here--------------------
/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load(particleImageSource);

/**
 * Particles
 */
// Geometry
const particlesGeometry = new THREE.Geometry();
const galaxyRadius = 10;

for (let i = 0; i < 1000000; i++) {
  // Vertice
  const progress = Math.pow(Math.random(), 4);
  const angle = progress * 15;
  const distance = progress * galaxyRadius;
  let x = Math.sin(angle) * distance;
  let y = 0;
  let z = Math.cos(angle) * distance;

  const randomAngle = Math.random() * Math.PI * 2;
  const randomRadius = Math.random() * Math.random() * 5;

  x += Math.cos(randomAngle) * randomRadius;
  y += (Math.random() - 0.5) * Math.random() * 1;
  z += Math.sin(randomAngle) * randomRadius;

  const vertice = new THREE.Vector3(x, y, z);
  particlesGeometry.vertices.push(vertice);

  // Color
  const innerColor = new THREE.Color(0xffffc9);
  const outerColor = new THREE.Color(0x5a3adb);
  const color = new THREE.Color();
  color.r = innerColor.r + (outerColor.r - innerColor.r) * progress;
  color.g = innerColor.g + (outerColor.g - innerColor.g) * progress;
  color.b = innerColor.b + (outerColor.b - innerColor.b) * progress;

  // const color = new THREE.Color(
  //     Math.random(),
  //     Math.random(),
  //     Math.random()
  // )
  particlesGeometry.colors.push(color);
}

// Material
const particlesMaterial = new THREE.PointsMaterial({
  vertexColors: true,
  size: 0.03,
  sizeAttenuation: true,
  // color: new THREE.Color(0xff0000),
  alphaMap: particleTexture,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
galaxy.add(particles);

/**
 * Stars
 */
// Geometry
const starGeometry = new THREE.Geometry();

for (let i = 0; i < 1000; i++) {
  const vertice = new THREE.Vector3(
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100
  );
  starGeometry.vertices.push(vertice);
}

// Material
const starMaterial = new THREE.PointsMaterial({
  color: new THREE.Color(0xffffff),
  size: 0.1,
  transparent: true,
  depthWrite: false,
});

// Points
const star = new THREE.Points(starGeometry, starMaterial);
star.position.z = 3.5;
scene.add(star);
//----------------------------------------------------------

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvasBounding.width, canvasBounding.height);

const camera = new THREE.PerspectiveCamera(
  75,
  canvasBounding.width / canvasBounding.height,
  0.01,
  100
);
camera.position.x = 0.1071413830526592;
camera.position.y = 9.717713511457397;
camera.position.z = 2.3110644694679543;

scene.add(camera);

// Resize
window.addEventListener("resize", () => {
  const canvasBounding = canvas.getBoundingClientRect();

  camera.aspect = canvasBounding.width / canvasBounding.height;
  camera.updateProjectionMatrix();

  renderer.setSize(canvasBounding.width, canvasBounding.height);
});

/**
 * Orbit controls
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.enableZoom = false;
controls.enablePan = false;
// Animation
const tick = () => {
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);

  galaxy.rotation.y += 0.001;
};

tick();
