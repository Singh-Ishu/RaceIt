import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);

function loadModel(file) {
  const url = URL.createObjectURL(file);
  const loader = new GLTFLoader();

  loader.load(
    url,
    (gltf) => {
      scene.clear();
      scene.add(light);

      const model = gltf.scene;
      scene.add(model);

      console.log("Model Loaded:", model);
    },
    (xhr) => {
      console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
      console.error("Error loading model:", error);
    }
  );
}

const fileInput = document.getElementById("file-upload");
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    loadModel(file);
  }
});

function animate() {
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
