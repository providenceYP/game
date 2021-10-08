import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Forum from './Forum';

export default (): JSX.Element => (
  <Switch>
    <Route exact path="/forum" component={Forum} />
  </Switch>
);
