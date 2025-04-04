import Sidebar from "./components/Sidebar.jsx";
import MainCanvas from "./components/MainCanvas.jsx";
import Header from "./components/Header.jsx";
import "./App.css";
import { useState, createContext } from "react";
import * as THREE from "three";

export const SceneContext = createContext(null);

function App() {
    const [file, setFile] = useState(null);
    const scene = new THREE.Scene(); // Create the scene only once

    return (
        <div id="main-container">
            <Header />
            <SceneContext.Provider value={scene}>
                <Sidebar setFile={setFile} />
                <MainCanvas file={file} />
            </SceneContext.Provider>
        </div>
    );
}

export default App;
