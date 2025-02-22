export default function ModelUploader() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Upload Model</h2>
      <input type="file" id="file-upload" accept=".gltf, .glb" />
    </div>
  );
}
