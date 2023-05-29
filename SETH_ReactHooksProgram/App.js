import './App.css';
import React from "react";

function App() {
  const [color, setColor] = React.useState("Black");
  function red(){
    setColor("Red");
  }
  function green(){
    setColor("green");
  }
  return (
    <div className="App">
      <h1>{color}</h1>
      <button class="red" onClick={red}>Red</button>
      <button class="green" onClick={green}>Green</button>
    </div>
  );
}

export default App;
