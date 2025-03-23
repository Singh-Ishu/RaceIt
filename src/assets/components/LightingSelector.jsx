import Card from "./Card";

export default function LightingSelector() {
  function setLighting() {}
  return (
    <>
      <div class="light-section">
        <Card NAME="Dawn" />
        <Card NAME="Dusk" />
        <br />
      </div>
      <div class="light-section">
        <Card NAME="Red" />
        <Card NAME="Green" />
        <br />
        <Card NAME="Blue" />
        <Card Name="Purple" />
        <br />
        <Card />
        <Card />
        <br />
      </div>
    </>
  );
}
