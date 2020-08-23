import TextFormInput from "../TextFormInput";
import {v4 as uuidv4} from 'uuid'
import { connect } from 'react-redux'
import {addCred} from '../actions/credentialsActionCreators';
import React, { Component } from 'react';
//import io from "socket.io-client";
const API_URL = 'localhost:8080';
//const socket = io(API_URL);




class Signup extends Component {

  state={
    username: '',
    email: '',
    password:'',
    errors:{}
  }


  onChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e)=>{
    const { username, email, password } = this.state
    e.preventDefault()

    if(username === ''){
      this.setState({
        errors:{
          username: 'Username is required.'
        }
      })
      return;
    }

    if(email===''){
      this.setState({
        errors:{
          email: 'Email is required.'
        }
      })
      return;
    }

    if(password===''){
      this.setState({
        errors:{
          password:'Password is required.'
        }
      })
      return;
    } 
   
    this.setState({
      [e.target.name]: e.target.value,
      errors:{}
    })

    const newSignUp={
      username,
      email,
      password
    }
      //send data to state and database /fetch or socket.emit('signupData', signUp);
    this.props.addCred(newSignUp)
  }

    render(){
      const { username, email, password, errors,} = this.state;
        return(
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-md-4 justify-content-md-center">
                <h1 className="text-center">Sign Up</h1>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                  <TextFormInput 
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChange}
                    error={errors.username}
                    />
                    <TextFormInput 
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                    />
                    <TextFormInput 
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.onChange}
                    error={errors.password}
                    />
                    <input 
                    type="submit"
                    className="btn btn-light btn-block"
                    />
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        )
    };
}

//null because the first parameter is mapstatetoprops function, but thats used to get data from our store state
//second parameter for connect is dispatch, we send an action to the the reducer to be dispatched to the store (send data to store)
export default connect(
  null,
  { addCred })(Signup);

//add_credentials is an action creator function, this is a prop provided to this component. Our data is passed to the function/action creator to be broken down in the reducer. Reducer is a function that edits provided data to be sent off to the state 