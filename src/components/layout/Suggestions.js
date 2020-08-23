import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addFriend} from '../../actions/friendsActionCreators'


const Suggestions = ({
    addUser,
    addFriend,
    loggedUserID
})=>{

    const onClick = (e)=>{
        e.preventDefault()
        if(addUser.username){
            console.log('user' + addUser.username)
            const friend = {
                addUser,
                loggedUserID
                
            }
            console.log(friend)
            addFriend(friend)
        } else{
            console.log('no user')
        }
    }
    return(
        <div className="col-8 p-0 pb-1 m-0">
            <div className="col-4 d-inline-block text-white">{addUser.username}</div>
            <div className="col-3 d-inline-block"></div>
            <div className="col-5 d-inline-block text-left"><button className="btn btn-outline-light col-12" onClick={onClick}>Add Friend</button></div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    const { loggingUser } = state
    return {
        loggedUserID: loggingUser.user.id
    }
}

export default connect(mapStateToProps, {addFriend})(Suggestions)