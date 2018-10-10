import React, { Component } from 'react';
import Main from './Main.js';
import Dashboard from './Dashboard.js';
import Class from './Class.js';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route  path='/Dashboard' component={Dashboard} />
            <Route path='/Class/:id' component={Class} />
            <Route exact path='/' component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
