import React from "react";
import img1 from "./images/nuggets.png";
import img2 from "./images/french_fries.png";
import img3 from "./images/burger.png";
import img4 from "./images/junior_box.png";
import sale from "./images/sale.png";
import free from "./images/free.png";
import "./style.scss";

function Prizes() {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-auto">
            <h1>ПРИЗЫ</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-auto">
            <span>
              Cделай заказ в «Бургер Кинг» на сумму от 350₽ и получи на выбор:
            </span>
          </div>
        </div>

        <div className=" prize_block row justify-content-center">
          <div className="col-lg-3">
            <div className="prize ">
              <img className="prize_img" src={free} alt="img"></img>
              <img className="prize_img" src={img1} alt="img"></img>
              <div className="prize_text">НАГГЕТСЫ JR.</div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="prize">
              <img className="prize_img" src={free} alt="img"></img>
              <img className="prize_img" src={img2} alt="img"></img>
              <div className="prize_text">КАРТОШКА ФРИ JR.</div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="prize">
              <img className="prize_img" src={free} alt="img"></img>
              <img className="prize_img" src={img3} alt="img"></img>
              <div className="prize_text">ЧИЗБУРГЕР</div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="prize">
              <img className="prize_img" src={sale} alt="img"></img>
              <img className="prize_img" src={img4} alt="img"></img>
              <div className="prize_text">ДЖУНИОР КОМБО</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prizes;
