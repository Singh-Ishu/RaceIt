import ModelUploader from "./ModelUploader";
import LightingSelector from "./LightingSelector";

export default function Sidebar(props) {
  return (
    <div id="sidebar">
      <ModelUploader setFile={props.setFile} />
      <br />
      <LightingSelector />
    </div>
  );
}
