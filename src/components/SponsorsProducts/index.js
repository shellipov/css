import React, { useState } from "react";
import "./style.scss";

function SponsorsProducts() {
  const [sponsorsGoods, setSponsorsGoods] = useState([
    {
      title: "1x2",
      description: "За 1 любой товар в чеке ты получишь 2 купона",
      goods: [
        {
          photo: "img1",
          name: "name1",
        },
        {
          photo: "img2",
          name: "name2",
        },
        {
          photo: "img3",
          name: "name3",
        },
        {
          photo: "img4",
          name: "name4",
        },
        {
          photo: "img5",
          name: "name5",
        },
        {
          photo: "img6",
          name: "name6",
        },
      ],
    },
    {
      title: "1x1",
      description: "За 1 любой товар в чеке ты получишь 1 купон",
      goods: [
        {
          photo: "img1",
          name: "name1",
        },
        {
          photo: "img2",
          name: "name2",
        },
        {
          photo: "img3",
          name: "name3",
        },
        {
          photo: "img4",
          name: "name4",
        },
        {
          photo: "img5",
          name: "name5",
        },
        {
          photo: "img6",
          name: "name6",
        },
      ],
    },
    {
      title: "2x1",
      description: "За 2 одинаковых товара в чеке ты получишь 1 купон",
      goods: [
        {
          photo: "img1",
          name: "name1",
        },
        {
          photo: "img2",
          name: "name2",
        },
        {
          photo: "img3",
          name: "name3",
        },
        {
          photo: "img4",
          name: "name4",
        },
        {
          photo: "img5",
          name: "name5",
        },
        {
          photo: "img6",
          name: "name6",
        },
      ],
    },
    {
      title: "4x1",
      description: "За 4 одинаковых товара в чеке ты получишь 1 купон",
      goods: [
        {
          photo: "img1",
          name: "name1",
        },
        {
          photo: "img2",
          name: "name2",
        },
        {
          photo: "img3",
          name: "name3",
        },
        {
          photo: "img4",
          name: "name4",
        },
        {
          photo: "img5",
          name: "name5",
        },
        {
          photo: "img6",
          name: "name6",
        },
      ],
    },
  ]);

  return (
    <>
      <div className="block-title">
        <h1>ТОВАРЫ-СПОНСОРЫ</h1>
        <span>за покупку которых ты можешь получить купон в «Бургер Кинг»</span>
      </div>
      {sponsorsGoods.map((offer) => {
        return (
          <div className="offer">
            <h2>{offer.title}</h2>
            <h3 >{offer.description}</h3>
            <div className="offer_block">
              {offer.goods.map((good) => {
                return (
                  <div className="good">
                    <div className="good_photo">
                      <img src={good.photo} alt={good.photo}></img>
                    </div>
                    <div className="good_name">{good.name}</div>
                  </div>
                );
              })}
            </div>
            <button className='offer_button'>Все товары категории</button>
          </div>
        );
      })}
    </>
  );
}

export default SponsorsProducts;
