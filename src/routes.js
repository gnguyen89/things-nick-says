import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import App from './components/App';
import About from './components/About';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={App} />
      <Route path='home' component={App} />
      <Route path='about' component={About} />
    </Route>
  </Router>
);

export default routes;
