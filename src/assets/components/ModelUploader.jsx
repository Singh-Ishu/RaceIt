export default function ModelUploader() {
  return (
    <div id="model-uploader">
      <h2>Upload Model</h2>
      <input type="file" id="file-upload" accept=".gltf, .glb" />
    </div>
  );
}
