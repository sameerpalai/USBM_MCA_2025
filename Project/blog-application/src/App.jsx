import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>React Blog App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/:id" component={PostDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
