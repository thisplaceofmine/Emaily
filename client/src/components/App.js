import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../action';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './SurveyNew';

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
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' exact component={SurveyNew} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
