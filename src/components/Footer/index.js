import React from "react";
import "./style.scss";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="row text_info justify-content-center">
          <div className="col-lg-7">
            Информацию об организаторе, правилах проведения, о
            товарах-спонсорах, количестве купонов на скидку, сроках, месте и
            порядке их получения, территории проведения (адресах магазинов
            ДИКСИ) можно узнать по телефону: 8 800 333 02 01 или на сайте
            dixy.ru. Акция может быть прекращена досрочно в случаях,
            предусмотренных правилами. В период проведения акции не
            гарантируется наличие акционного товаров каждом магазине ДИКСИ.
            Количество купонов на скидку ограничено.
          </div>
        </div>

        <div className="row justify-content-center rools ">
          <a href="">ПОЛНЫЕ ПРАВИЛА АКЦИИ</a>
        </div>

        <div className="row justify-content-center info_block ">

          <div className="contacts col justify-content-center">
          <div className='row justify-content-center align-items-center'>

            <div className='phone'>8 800 333 02 01</div>
            <div className='button_blok'>

            <button className="social_button facebook" />
            <button className="social_button vk" />
            <button className="social_button instagram" />
            </div>

          </div>
          </div>

          <div className="apps col justify-content-center">
            <div className='row justify-content-center'>
            <button className="store_button google" />
            <button className="store_button apple" />
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
