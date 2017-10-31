import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
