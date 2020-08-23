import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {loggingCred} from '../actions/credentialsActionCreators' //create logged in action
import TextFormInput from '../TextFormInput';


class Login extends Component{

    state={
        username: '',
        password:'',
        success:{
            username:'',
            password:''
        },
        errors:{}
    }

    onSubmit = (e)=>{
        e.preventDefault()
        const {loggingCred} = this.props;
        const { username, password} = this.state;

        //try map state to props because we need to search the state/db

//check db
//if matches then log in
       if(username === ''){
           this.setState({
            error:{
                username: 'username required'
                }
           })
        }

        if(password === ''){
            this.setState({
                error:{
                    password: 'password required'
                }
            })
        }

        
        if( username && password){
            //send username and pasword to the server to be checked against mongo credntials
            const loggingUser = {
                username,
                password
            }

            loggingCred(loggingUser)
        }

    }


    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render(){
        const { username, password, errors } = this.state;
        const { loggedUser } = this.props;
        return(
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                  <div className="col-md-4 justify-content-md-center">
                    <h1 className="text-center"> Login In</h1>
                    </div>  
                </div>
                <div className="row justify-content-md-center">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                            
                                <TextFormInput 
                                label="Username"
                                formContainer="form-group"
                                inputClass="form-control"
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={username}
                                onChange={this.onChange}
                                error={errors.username}
                                />
                                <TextFormInput 
                                inputClass="form-control"
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
                                className="btn btn-light btn-block mt-3"
                                />
                            </form>
                            {/*
                                loggedUser === true
                                ? console.log('hi' + loggedUser)
                                : console.log('nope')
                                
                            */}
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


Login.propTypes = {
    loggedUser: PropTypes.bool
}

const mapStateToProps=(state)=>{
        
        return { loggedUser: state.loggingUser.logged}
    }

export default connect(
    null,
    {loggingCred})(Login);