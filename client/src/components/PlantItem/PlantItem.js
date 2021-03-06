import React from "react";
import "./PlantItem.css";

function PlantItem(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      // className={`click-item${props.shake ? " shake" : ""}`}
    />
  );
}

export default PlantItem;
