import React from "react";
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

          <div className="map_button_block row">

            <button className="dixy_button">Дикси</button>
            <button className="bk_button">Burger King</button>
          </div>

          <div className="map_block row justify-content-center"></div>

        </div>
      </section>
    </>
  );
}

export default Map;
