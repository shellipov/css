import React from "react";
import action1 from "./images/action_1.png";
import action2 from "./images/action_2.png";
import action3 from "./images/action_3.png";
import "./style.scss";

function TermsOfAction() {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-auto">
            <h1>УСЛОВИЯ АКЦИИ</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-auto">
            <span>С 5 сентября во всех магазинах «ДИКСИ»</span>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="action ">
              <div className="row justify-content-flex-start">
                <div className="col-lg-auto">
                  <img className="action_img" src={action1} alt="img"></img>
                </div>
              </div>
              <div className="row action_text">
                <p>
                  Покупай{" "}
                  <b>
                    <a href="//">{" товары-спонсоры"}</a>
                  </b>
                  , участвующие в акции в магазинах «ДИКСИ»
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="action">
              <div className="row justify-content-flex-start">
                <div className="col-lg-auto">
                  <img className="action_img" src={action2} alt="img"></img>
                </div>
              </div>
              <div className="row action_text">
                <p>
                  За каждый чек с товаром-спонсором ты{" "}
                  <b>получишь купон в «Бургер&nbsp;Кинг»</b>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="action ">
              <div className="row justify-content-flex-start">
                <div className="col-lg-auto">
                  <img className="action_img" src={action3} alt="img"></img>
                </div>
              </div>
              <div className="row action_text">
                <p>
                  <b>Используй купон</b> при следующей покупке в «Бургер Кинг»
                  от 350₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsOfAction;
