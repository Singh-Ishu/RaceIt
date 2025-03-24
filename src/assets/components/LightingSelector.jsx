import Card from "./Card";

export default function LightingSelector() {
  return (
    <>
      <div className="light-section">
        <Card NAME="Dawn" />
        <Card NAME="Dusk" />
        <br />
      </div>
      <div className="light-section">
        <Card NAME="Red" />
        <Card NAME="Green" />
        <br />
        <Card NAME="Blue" />
        <Card NAME="Purple" />
        <br />
        <Card NAME="Darken" />

        <br />
      </div>
    </>
  );
}
