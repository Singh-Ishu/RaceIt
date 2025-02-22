export default function ModelUploader({ setFile }) {
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div>
      <h2>Upload Model</h2>
      <input type="file" accept=".gltf, .glb" onChange={handleFileChange} />
    </div>
  );
}
