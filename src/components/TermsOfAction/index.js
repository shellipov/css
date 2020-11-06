import React from "react";
import "./style.scss";

function TermsOfAction() {
  return (
    <>
      <div className="block-title">
        <h1>УСЛОВИЯ АКЦИИ</h1>
        <span>С 5 сентября во всех магазинах «ДИКСИ»</span>
      </div>
      <div className="action_block">
        <div className="action">
          <img className="action_img" src="https://" alt="img"></img>
          <div className="action_text">Покупай <a>товары-спонсоры</a>, участвующие в акции в магазинах «ДИКСИ»</div>
        </div>

        <div className="action">
          <img className="action_img" src="https://" alt="img"></img>
          <div className="action_text">За каждый чек с товаром-спонсором ты <b>получишь купон в «Бургер Кинг»</b></div>
        </div>

        <div className="action">
          <img className="action_img" src="https://" alt="img"></img>
          <div className="action_text"><b>Используй купон</b> при следующей покупке в «Бургер Кинг» от 350₽</div>
        </div>
      </div>
    </>
  );
}

export default TermsOfAction;
