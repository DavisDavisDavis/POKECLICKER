import "./App.css";
import React from "react";

React.useEffect(() => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
}, []);

function App() {
  return (
    <div className="App">
      <h1>Spaaaaaaaaaaaaace</h1>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
