import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../action';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import ServeyNew from './ServeyNew';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/serveys' exact component={Dashboard} />
            <Route path='/serveys/new' exact component={ServeyNew} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
