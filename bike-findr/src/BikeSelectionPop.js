import React from "react";
import "./BikeSelectionPop.css";

function BikeSelectionPop() {
  return (
    <div className="container">
      <div className="top">
        <span className="top__biketitle"> bike selected!</span>
      </div>
      <div className="location__container">
        <h1 className="headers">location</h1>
        <button className="location_button">please select a bike first</button>
      </div>
      <div className="location__container">
        <h1 className="headers">provider</h1>
        <button className="location_button">please select a bike first</button>
      </div>
    </div>
  );
}

export default BikeSelectionPop;
