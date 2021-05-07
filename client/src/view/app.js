import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../services/history';
import Home from './pages/home'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;