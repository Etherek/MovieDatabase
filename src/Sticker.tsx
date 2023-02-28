import React from 'react';
import logo from './logo.svg';
import './Sticker.css';

function Sticker(): JSX.Element {
  return (
    <div className ='main'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='login'>
        <p>Logowanie</p>
      </div>
      <div className='register'>
        <p>Rejestracja</p>
      </div>
      <div className='searchBar'>
        <input type="text" placeholder="Wyszukaj..." />
        <i className="fa fa-search"></i>
      </div>
      <div className="switchLanguage">
        <p>PL</p>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
        <p>ENG</p>
  	  </div>
    </div>
  );
}

export default Sticker;