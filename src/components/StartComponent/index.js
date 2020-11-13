import React from 'react';
import textLogo from'./images/text.png';
import burger from'./images/burger.png';

import './style.scss'

function StartComponent (){
  return(
    <>
    <section className="start_component">
    <div className="logo row justify-content-center align-items-end">
      <div className="col-lg-6">
        <div className="row justify-content-center">
        <img src={textLogo} alt=""></img>
        </div>
      </div>
      <div className="col-lg-6">
      <div className="row justify-content-center">
        <img src={burger} alt=""></img>
      </div>
      </div>
    </div>
      <div className='row justify-content-center'>
      <button className="scroll_button"></button>
      </div>
    </section>
    </>
  )
}

export default StartComponent
