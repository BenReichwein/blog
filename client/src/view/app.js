import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../services/history';
import withAuth from '../middleware/with_auth'
import Header from './components/header'
import Login from './pages/login'
import Register from './pages/register'
import Blog from './pages/blog'
import Post from './pages/post'
import MakePost from './pages/make_post'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/post/:id" exact component={Post} />
            <Route path="/makePost/:id" exact component={withAuth(MakePost)} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;