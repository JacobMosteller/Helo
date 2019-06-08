import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components

import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/new" component={Form}/>
                        <Route path="/post/:postid" component={Post}/>
                        <Route path="/" component={Auth}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes