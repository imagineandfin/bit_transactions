import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AutorizationPage from './component/AutorizationPage';
import AddTransaction from './component/AddTransaction';
import ViewTransactions from './component/ViewTransactions';
import './main.scss';
import store from './store/reducers';

class Navigation extends React.Component {
  render() {
   return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={AutorizationPage}/>
            <Route exact path="/add" component={AddTransaction}/>
            <Route exact path="/view" component={ViewTransactions}/>
          </div>
        </Router>
      </div>
    )
  }
}

const App = () => (<Navigation />);

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);