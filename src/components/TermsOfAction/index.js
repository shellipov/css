import React from "react";
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
            <div className="action justify-content-space-around ">
              <div className="row">
              <img className="action_img" src="https://" alt="img"></img>
              </div>
              <div className="row">
              <div className="action_text">
                Покупай <a>товары-спонсоры</a>, участвующие в акции в магазинах
                «ДИКСИ»
              </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="action">
              <img className="action_img" src="https://" alt="img"></img>
              <div className="action_text">
                За каждый чек с товаром-спонсором ты{" "}
                <b>получишь купон в «Бургер Кинг»</b>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="action">
              <img className="action_img" src="https://" alt="img"></img>
              <div className="action_text">
                <b>Используй купон</b> при следующей покупке в «Бургер Кинг» от
                350₽
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsOfAction;
