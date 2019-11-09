import React from 'react';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import '../assets/scss/material-kit-react.scss';
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from './Components/Components';
import LandingPage from './LandingPage/LandingPage';
import ProfilePage from './ProfilePage/ProfilePage';
import LoginPage from './LoginPage/LoginPage';

const hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
);
