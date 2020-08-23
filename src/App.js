import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import { UserIsNotAuthenticated, UserIsAuthenticated } from './auth' //not handles unauthorized requests to the route
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"


const API_URL = 'localhost:8080'; 
//const socket = io(API_URL);


//import io from "socket.io-client";




class App extends Component { 

    render(){
      return(
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={UserIsNotAuthenticated(Login)}/> 
              <Route exact path="/signup" component={UserIsNotAuthenticated(Signup)}/>
              <Route exact path="/dashboard" component={Dashboard}/> {/*UserIsAuthenticated(Dashboard)*/}
            </Switch>
          </div>
        </Router>
      </Provider>
      )
    };
}


export default App;