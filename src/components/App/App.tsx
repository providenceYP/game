import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../../pages/Main';
import SignUp from '../../pages/Signup';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import Profile from '../../pages/Profile';
import Leaderboard from '../../pages/Leaderboard';
import Forum from '../../pages/Forum';
import Game from '../../pages/Game';
import NotFound from '../../pages/NotFound';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/signup" component={SignUp} />
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
