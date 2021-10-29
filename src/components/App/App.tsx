import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

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
import withAuthorization from 'hocs/withAuthorization';

import '../../styles/index.css';

const App = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/profile" component={withAuthorization(Profile)} />
    <Route path="/leaderboard" component={withAuthorization(Leaderboard)} />
    <Route path="/forum" component={withAuthorization(Forum)} />
    <Route path="/game" component={withAuthorization(GameScreen)} />
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(App);
