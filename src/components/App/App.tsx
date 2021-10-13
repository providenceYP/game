import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import '../../styles/index.css';

import {
  Main,
  Register,
  Login,
  Logout,
  Profile,
  Leaderboard,
  Forum,
  NotFound,
  GameScreen,
} from 'pages';

const App = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/profile" component={Profile} />
    <Route path="/leaderboard" component={Leaderboard} />
    <Route path="/forum" component={Forum} />
    <Route path="/game" component={GameScreen} />
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(App);
