import Card from "./Card";

export default function LightingSelector() {
  return (
    <>
      <div className="light-section">
        <Card NAME="Dawn" className="card-element" />
        <Card NAME="Dusk" className="card-element" />
        <br />
      </div>
      <div className="light-section">
        <Card NAME="Red" className="card-element" />
        <Card NAME="Green" className="card-element" />
        <br />
        <Card NAME="Blue" className="card-element" />
        <Card NAME="Purple" className="card-element" />
        <br />
        <Card NAME="Darken" className="card-element" />

        <br />
      </div>
    </>
  );
}
