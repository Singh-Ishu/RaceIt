import React, { useEffect } from "react";

export default function MainCanvas(props) {
  useEffect(
    function () {
      if (props.file) {
        console.log("Received file:", props.file.name);
        // Load and render the model in a WebGL/Three.js scene here
      }
    },
    [props.file]
  );

  return (
    <div id="stage-container">
      {props.file ? (
        <p>Displaying: {props.file.name}</p>
      ) : (
        <p>No model uploaded</p>
      )}
      <canvas id="stage"></canvas>
    </div>
  );
}
