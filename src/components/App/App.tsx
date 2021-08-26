import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Main,
  Signup,
  Login,
  Logout,
  Profile,
  Leaderboard,
  Forum,
  Game,
  NotFound,
} from 'pages';

const App = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/profile" component={Profile} />
    <Route path="/leaderboard" component={Leaderboard} />
    <Route path="/forum" component={Forum} />
    <Route path="/game" component={Game} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
