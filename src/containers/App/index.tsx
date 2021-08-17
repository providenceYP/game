import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GameScreen from '../../pages/GameScreen/GameScreen';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GameScreen} />
    </Switch>
  );
}

export default App as React.FunctionComponent;
