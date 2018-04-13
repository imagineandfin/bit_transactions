import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../store/reducers';
import Menu from './Menu'

class AddTransaction extends Component {
	constructor() {
		super();
		this.state = {
			amount: "",
			bankName: "",
			bankList: []
		};
		this.inputChange = this.inputChange.bind(this);
		this.selectChange = this.selectChange.bind(this);
	}

	inputChange(e) {
		if (e.target.value > 0) {
    	this.setState({amount: Number(e.target.value)});
  	}
  }

  selectChange(e) {
  	if (e.target.value != 'выберите банк') {
	  	this.setState({bankName: e.target.value});
	  }
  }

	componentDidMount() {
		if (window.localStorage['transactions'] != undefined) {
			store.dispatch({
				type: 'CREATE_TRANSACTION',
				payload: JSON.parse(window.localStorage['transactions'])
			});
		}

		axios.get('/')
		  .then(response => {
		  this.setState({bankList: this.props.testStore.bankNames})
		  })
		  .catch(error => {
		    console.log(error);
		 	}); 
	}

	render() {
		const addTransaction = (e) => {
			e.preventDefault();
		
			let idBank;

			for (let i = 0; i < this.state.bankList.length; i++) {
				if (this.state.bankName == this.state.bankList[i]) {
					idBank = i;
				}
			}

			if (idBank && this.state.amount) {
				store.dispatch({
					type: 'ADD_TRANSACTION', 
					payload: {idBank: idBank, amount: this.state.amount}
				});

				window.localStorage.setItem('transactions', JSON.stringify(this.props.testStore.transactions))

				this.state.amount = "";
			}
		}

		return(
			<div>
				<Menu />
			  <form className="addtransaction-form">
			  	<h1>Добавление транзакции</h1>
			  	<input value={this.state.amount} onChange={this.inputChange} className="addtransaction-form__amount" type="number" min="1" placeholder="введите сумму" />
			  	<select onChange={this.selectChange} className="addtransaction-form__bank-name">
			  		<option  hidden disabled selected>выберите банк</option>
			  		{this.state.bankList.map((name, index) =>
				  		<option key={index}>{name}</option>
						)}
			  	</select>
			  	<button className="addtransaction-form__button-addtransaction" onClick={addTransaction}>
			  		добавить транзакцию
			  	</button>
			  </form>
		  </div>
		);
	}
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(AddTransaction);