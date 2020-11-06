import React from "react";
import "./style.scss";

function Map() {
  return (
    <>
      <div className="block-title">
        <h1>Карта</h1>
      </div>
      <div className="map">
        <div className="map_button_block">
          <button className="dixy_button">Дикси</button>
          <button className="bk_button">Burger King</button>
        </div>
        <div className="map_block"></div>
      </div>
    </>
  );
}

export default Map;
