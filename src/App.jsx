import Sidebar from "./assets/components/Sidebar.jsx";
import MainCanvas from "./assets/components/MainCanvas.jsx";
import Header from "./assets/components/Header.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  return (
    <div id="main-container">
      <Header />
      <Sidebar setFile={setFile} />
      <MainCanvas file={file} />
    </div>
  );
}

export default App;
