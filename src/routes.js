import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import App from './components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={App} />
    </Route>
  </Router>
);

export default routes;
