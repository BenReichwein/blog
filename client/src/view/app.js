import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../services/history';
import withAuth from '../middleware/with_auth'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={withAuth(Home)} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;