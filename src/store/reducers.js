import { createStore} from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
	routing: routerReducer,	
	transactions: [
		{id:1, amount: 100, bankId: 1},
		{id:2, amount: 200, bankId: 2}
	],
	bankNames: ['Сбербанк', 'ВТБ', 'Альфа-Банк', 'Бинбанк', 'БыстроБанк', 'Газпромбанк', 'Промсвязьбанк', 'Россельхозбанк', 'Русский Стандарт', 'Почта Банк']
};

function mainReducer (state = initialState, action) {
	switch (action.type) {
	case 'ADD_TRANSACTION':
		let numTransaction = state.transactions.length - 1,
				idTransaction = state.transactions[numTransaction].id + 1;
				console.log(state.transactions[numTransaction]);
				console.log(numTransaction)
		return Object.assign({}, state, state.transactions[state.transactions.length] = {id: idTransaction, amount: action.payload.amount, bankId: action.payload.idBank});
	case 'CREATE_TRANSACTION':
		return Object.assign({}, state, state.transactions = action.payload);
	case 'DELETE_TRANSACTION':
		return Object.assign({}, state, state.transactions.splice(action.payload, 1));
	default:
		return state;
	}
}

const store = createStore(mainReducer, initialState);

export default store;