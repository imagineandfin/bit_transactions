import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<ul className="menu">
	      <li><Link to="/add">Добавление транзакции</Link></li>
	      <li><Link to="/view">Просмотр транзакций</Link></li>
	      <li><Link to="/">Выход</Link></li>
	    </ul>
		);
	}
}

export default Menu;