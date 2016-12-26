import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './pages/App';
import Resume from './pages/Resume'
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/resume" component={Resume} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;