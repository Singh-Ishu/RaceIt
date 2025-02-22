export default function Card(props) {
  return (
    <div id="card-div">
      <img
        src={props.URL}
        alt={`lighting-descriptor: ${props.NAME || "No name provided"}`}
      />
      <p>{props.NAME}</p>
    </div>
  );
}
