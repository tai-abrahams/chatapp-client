import axios from 'axios'
import { ADD_FRIEND, GET_FRIENDS, SEARCH_FRIEND } from './types'

export const findFriend = friendData => async dispatch => {
    const res = await axios.post('http://localhost:8080/friend-add', friendData)
    .then(res=>{
        return res.data
    })
    return dispatch({
        type:SEARCH_FRIEND,
        payload: res
    });

    ///use getfriends instead of findFriend in dashboard/search file
    
}

export const getFriends= (name) => async dispatch =>{
    const res = await axios.get(`http://localhost:8080/get-friends/${name}`)
    .then(res=>{
        return console.log(res.data)
    })

    return dispatch({
        type:GET_FRIENDS,
        payload:res
    })
}

export const addFriend = foundFriend => async dispatch =>{
    const res = await axios.post('http://localhost:8080/add-friend', foundFriend)
    .then(res=>{
        return res.data
    })

    return dispatch({
        type: ADD_FRIEND,
        payload:res
    })
}