import React, { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { SceneContext } from "../../App";
import EventBus from "../utils/eventBus";

export default function MainCanvas({ file }) {
    const canvasRef = useRef(null);
    const scene = useContext(SceneContext);

    useEffect(() => {
        if (!canvasRef.current || !scene) return;

        // Camera & Renderer Setup
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

        // Lighting
        if (!scene.userData.hasLight) {
            const light = new THREE.AmbientLight(0xffffff, 2);
            scene.add(light);
            scene.userData.hasLight = true; // Prevent duplicate lights
        }

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Load Model
        if (file) {
            const loader = new GLTFLoader();
            loader.load(URL.createObjectURL(file), (gltf) => {
                scene.add(gltf.scene);
            });
        }

        // Event Listener for Race Start
        const handleRaceStart = () => {
            console.log("Race started - clearing scene");
            // Clear the scene
            while (scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }

            const light = new THREE.AmbientLight(0xffffff, 2);
            scene.add(light);

            if (file) {
                const loader = new GLTFLoader();
                loader.load(URL.createObjectURL(file), (gltf) => {
                    scene.add(gltf.scene);
                });
            }
        };

        EventBus.on("RACE_STARTED", handleRaceStart);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
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
