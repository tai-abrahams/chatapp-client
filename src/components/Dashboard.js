import React, { Component, useState } from 'react'
import Search from './layout/Search'
import "./../App.css";



class Dashboard extends Component{
//later import a stateless component for our login into this dashboard with the connect and map to state within

    state = {
        showAddFriendView: false,

    }

    // stickyFriends = ()=>{

    // }

   render(){

    const styles={
        fontSize: "42px", 
        outline: "none",
        boxShadow:"none",
        color:"",
        border: "0px"
    }

    const { searchFriend, searchFriendError } = this.state;
    const { foundFriend } = this.props;
      
   return(
    <div className="container col-12">
    {
        this.state.showAddFriendView
        ? <form className="row justify-content-md-center align-items-center bg-dark">


                <Search 
                    name="searchFriend"
                    styles={styles}
                    formContainer="d-block col-6 p-0"
                    inputClass="font-weight-bold mt-2 mb-2 text-light bg-transparent text-right form-control form-control-lg d-block p-3 col-12 border-bottom border-white rounded-0 theinput"
                    formLabelClassName="hidden d-none"
                    autoFocus
                    placeholder="Enter username"
                    //onChange={this.onChange}
                    error={searchFriendError}
                    label='Add User'
                    searchValue="Search"
                    //refInput={input => this.search = input}
                        //view={showAddFriendView}
                />

                
            
        </form>
        : console.log('closed')
        
    }
        <div className="row justify-content-md-center">
            <h1>Dashboard</h1>
        </div>

        <div className="row justify-content-md-center">
            <div className="btn-group" role="group">

                <button className="btn btn-primary" type="button" onClick={()=>{
                    this.setState({
                        showAddFriendView: !this.state.showAddFriendView
                    },()=>{

                    })
                }}>Add Contact</button>
                <button className="btn btn-secondary">View Contacts</button>
            </div>
            
        </div>
        
           
    </div>
   )
   }
}




export default Dashboard
