import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Forum from './Forum';
import ForumList from './ForumList';

export default (): JSX.Element => (
  <Switch>
    <Route exact path="/forum" component={ForumList} />
    <Route path="/forum/:name" component={Forum} />
  </Switch>
);
