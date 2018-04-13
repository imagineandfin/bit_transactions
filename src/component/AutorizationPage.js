import React from 'react';
import { withRouter } from "react-router-dom";


const AutorizationPage = withRouter(({ history }) =>
  (
  	<div>
    <form className="autorization-form">
      <h1>Авторизация</h1>
      <input id="01"  className="autorization-form__username" type="text"  placeholder="введите имя пользователя" />
      <input id="02" className="autorization-form__password" type="password" placeholder="введите пароль" />
      <button 
      	onClick={(e) => { 
      		if (document.getElementById("01").value && document.getElementById("02").value) {
      			history.push('/add') 
      		} else {
      			e.preventDefault();
      		}
      	}} 
      	className="autorization-form__button-submit">
      	авторизоваться
      </button>
    </form>
  </div>  ))


export default AutorizationPage;

