import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components

import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
          <Switch>
            <Route path="/" component={Auth}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/form" component={Form}/>
            <Route path="/nav" component={Nav}/>
            <Route path="/post" component={Post}/>
          </Switch>
        </Router>
    </div>
    )
  }
}


export default App;