import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function MainCanvas({ file }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);

    // Add Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load Model if Available
    if (file) {
      const loader = new GLTFLoader();
      loader.load(URL.createObjectURL(file), (gltf) => {
        scene.add(gltf.scene);
      });
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, [file]);

  return (
    <div id="stage-container">
      {file ? <p>Displaying: {file.name}</p> : <p>No model uploaded</p>}
      <canvas ref={canvasRef} id="stage"></canvas>
    </div>
  );
}
