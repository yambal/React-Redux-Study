import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';

const App = () => (
  <Router>
    <div className="app">
      <div className="side">
        <ul className="nav">
          <li><Link to="/">緯度経度検索</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
