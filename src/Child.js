import React from "react";
import {getRandomColor} from "./randomColorGenerator.js";

function Child({onChangeColor,color}) {
  //return <div className="child" style={{ backgroundColor: "#FFF" }} />;
  function handleClick() {
    const newColor=getRandomColor();
    onChangeColor(newColor);
  }

  console.log(onChangeColor);
  return (
    <div
      //onClick={onChangeColor}
      onClick={handleClick}
      className="child"
      style={{backgroundColor: color}}
    //style={{backgroundColor: "#FFF"}}
    />
  );
}

export default Child;
