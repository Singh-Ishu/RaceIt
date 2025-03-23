import { SceneContext } from "../../App";
import { useContext } from "react";
import * as THREE from "three";

export default function Card(props) {
  const scene = useContext(SceneContext);

  function setLighting(lightingName) {
    if (!scene) return;

    // Remove existing light group if any
    if (scene.userData.currentLight) {
      scene.remove(scene.userData.currentLight);
    }

    let newLightGroup = new THREE.Group();

    switch (lightingName) {
      case "Dawn":
        const dawnLight = new THREE.DirectionalLight(0xffcc88, 1.5);
        dawnLight.position.set(5, 5, 5);
        newLightGroup.add(dawnLight);
        break;
      case "Dusk":
        const duskLight = new THREE.DirectionalLight(0x556677, 1.2);
        duskLight.position.set(5, 5, 5);
        newLightGroup.add(duskLight);
        break;
      case "Red":
        const redLight2 = new THREE.PointLight(0xff0000, 250);
        redLight2.position.set(0, 5, 0);
        newLightGroup.add(redLight2);
        break;
      case "Green":
        const greenLight1 = new THREE.PointLight(0x00ff00, 250);
        greenLight1.position.set(0, 5, 0);
        newLightGroup.add(greenLight1);
        break;
      case "Blue":
        const blueLight1 = new THREE.PointLight(0x0000ff, 250);
        blueLight1.position.set(0, 5, 0);
        newLightGroup.add(blueLight1);
        break;
      case "Purple":
        const purpleLight1 = new THREE.PointLight(0x800080, 250);
        purpleLight1.position.set(0, 0, 0);
        newLightGroup.add(purpleLight1, purpleLight2);
        break;
      default:
        const defaultLight = new THREE.AmbientLight(0xffffff, 1);
        newLightGroup.add(defaultLight);
        break;
    }

    scene.add(newLightGroup);
    scene.userData.currentLight = newLightGroup; // Store reference for removal
  }

  return (
    <div id="card-div" onClick={() => setLighting(props.NAME)}>
      <img
        src={props.URL}
        alt={`lighting-descriptor: ${props.NAME || "No name provided"}`}
        onClick={() => setLighting(props.NAME)}
      />
      <p onClick={() => setLighting(props.NAME)}>{props.NAME}</p>
    </div>
  );
}
