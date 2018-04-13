import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../store/reducers';
import Menu from './Menu'

class ViewTransactions extends Component {
	constructor() {
		super();
		this.state = {
			trId: [],
			trAmount: [],
			trBankName: [],
			trNumber: []
		};		
		this.renderState = this.renderState.bind(this);
		this.deleteTransaction = this.deleteTransaction.bind(this);
	}

	renderState() {
		for (let i = 0; i < this.props.testStore.transactions.length; i++) {
		  	this.state.trNumber[i] = i;
				this.state.trId[i] = this.props.testStore.transactions[i].id;
				this.state.trAmount[i] = this.props.testStore.transactions[i].amount;
				let bankId = this.props.testStore.transactions[i].bankId;
				this.state.trBankName[i] = this.props.testStore.bankNames[bankId]
			}
	}

	deleteTransaction(e) {
			e.preventDefault();

			store.dispatch({
					type: 'DELETE_TRANSACTION', 
					payload: e.target.id
				});

			this.state.trId.splice(e.target.id, 1);
			this.state.trAmount.splice(e.target.id, 1);
			this.state.trBankName.splice(e.target.id, 1);
			this.state.trNumber.splice(e.target.id, 1);

			window.localStorage.setItem('transactions', JSON.stringify(this.props.testStore.transactions))
		}

	componentWillMount() {
		if (window.localStorage['transactions'] != undefined) {
			store.dispatch({
				type: 'CREATE_TRANSACTION',
				payload: JSON.parse(window.localStorage['transactions'])
			});
		} 
		this.renderState();
		
	}

	render() {
		return(
			<div>
				<Menu />
				<form className="form-viewtransaction">
					<h1>Просмотр транзакций</h1>
					<table className="table">
						<thead>
							<tr>
								<th>Номер транзакции</th>
							  <th>Количество</th>
							  <th>Название банка</th>
							  <th>Удалить транзакцию</th>	
							</tr>
						</thead>

						<tbody>
						  {this.state.trNumber.map((name, index) =>
						  	<tr key={index}>
				  				<td>{this.state.trId[index]}</td>
						    	<td>{this.state.trAmount[index]}</td>
						    	<td>{this.state.trBankName[index]}</td>
						    	<td><button id={index} className="button-deletetransaction" onClick={this.deleteTransaction}>удалить</button></td>
				  			</tr>
							)}
						</tbody>
					</table>
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
)(ViewTransactions);