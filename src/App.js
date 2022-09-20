import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ColorBlock from "./colorBlock";
import ColorForm from "./ColorForm";

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "yellow",
    "orange",
    "red",
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} />;
  });
  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
      <ColorForm />
    </div>
  );
}
export default App;
