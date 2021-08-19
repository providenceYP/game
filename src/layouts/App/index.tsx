import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@/pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App as React.FunctionComponent;
