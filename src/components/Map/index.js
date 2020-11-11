import React from "react";
import dixiLogo from "./images/dixy_logo.png";
import bkLogo from "./images/bk_logo.png";
import "./style.scss";

function Map() {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-auto">
            <h1>Карта</h1>
          </div>
        </div>

        <div className="map col-lg-auto ">
          <div className="map_button_block row justify-content-around">
            <button className="dixy_button row align-items-center">
              <img className="button_image" src={dixiLogo} alt="logo"></img>
              <div className="button_text">ДИКСИ</div>
            </button>
            <button className="bk_button row align-items-center">
              <img className="button_image" src={bkLogo} alt="logo"></img>
              <div className="button_text">BURGER KING</div>
            </button>
          </div>

          <div className="map_block row justify-content-center"></div>
        </div>
      </section>
    </>
  );
}

export default Map;
