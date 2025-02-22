import ModelUploader from "./ModelUploader";
import LightingSelector from "./LightingSelector";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <ModelUploader />
      <br />
      <LightingSelector />
    </div>
  );
}
