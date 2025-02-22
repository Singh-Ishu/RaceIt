import Sidebar from "./assets/components/Sidebar.jsx";
import MainCanvas from "./assets/components/MainCanvas.jsx";
import Header from "./assets/components/Header.jsx";
import "./App.css";

function App() {
  return (
    <div id="main-container">
      <Header />
      <Sidebar />
      <MainCanvas />
    </div>
  );
}

export default App;
