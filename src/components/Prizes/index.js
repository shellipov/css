import React from "react";
import "./style.scss";

function Prizes() {
  return (
    <>
      <div className="block-title">
        <h1>ПРИЗЫ</h1>
        <span>
          cделай заказ в «Бургер Кинг» на сумму от 350₽ и получи на выбор:
        </span>
      </div>
      <div className="prize_block">
        <div className="prize">
          <img className="prize_img" src="https://" alt="img"></img>
          <div className="prize_text">НАГГЕТСЫ JR.</div>
        </div>

        <div className="prize">
          <img className="prize_img" src="https://" alt="img"></img>
          <div className="prize_text">КАРТОШКА ФРИ JR.</div>
        </div>

        <div className="prize">
          <img className="prize_img" src="https://" alt="img"></img>
          <div className="prize_text">ЧИЗБУРГЕР</div>
        </div>

        <div className="prize">
          <img className="prize_img" src="https://" alt="img"></img>
          <div className="prize_text">ДЖУНИОР КОМБО</div>
        </div>
      </div>
    </>
  );
}

export default Prizes;
