import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page';
import Register from './components/register/register';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/private-route';
import Header from './components/header/header';
import Collection from './components/collection/collection';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route exact path="/sign-up" component={Register} />
          <PrivateRoute path="/" component={Header} />
          <PrivateRoute  path="/home" component={Dashboard} />
          <PrivateRoute  path="/collection" component={Collection} />
        </div>
      </Router>
    );
  }
}

export default App;
