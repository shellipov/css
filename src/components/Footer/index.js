import React from 'react';
import './style.scss';

function Footer (){
  return(
    <>
    <footer className="footer">
      <div className="text_info" >
      Информацию об организаторе, правилах проведения, о товарах-спонсорах, количестве купонов на скидку, сроках, месте и порядке их получения, территории проведения (адресах магазинов ДИКСИ) можно узнать по телефону: 8 800 333 02 01 или на сайте dixy.ru. Акция может быть прекращена досрочно в случаях, предусмотренных правилами. В период проведения акции не гарантируется наличие акционного товаров каждом магазине ДИКСИ. Количество купонов на скидку ограничено.
      </div>
      <div className='info_block'>
        <div className="comtacts">
        8 800 333 02 01
        <img href='/' alt='facebook'></img>
        <img href='/' alt='vk'></img>
        <img href='/' alt='instagram'></img>
        <img href='/' alt='youtube'></img>
        <img href='/' alt='ok'></img>
        </div>
        <div className='rools'>
          <a href=''>ПОЛНЫЕ ПРАВИЛА АКЦИИ</a>
        </div>
        <div className='apps'>
          <a href=''><img src='/' alt='appStore'/></a>
          <a href=''><img src='/' alt='GooglePlay'/></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
