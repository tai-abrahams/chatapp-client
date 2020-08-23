import { ADD_CREDENTIALS, UPDATE_CREDENTIALS, DELETE_CREDENTIALS, LOGGING_FAILED, LOG_CREDENTIALS} from './types'
import axios from 'axios';

export const addCred = credential => async dispatch => {
//add/post to database
    const res = await axios.post('http://localhost:8080/cred-create', credential)
    .then(res=>{
        return res.config
    });

    dispatch({
        type:ADD_CREDENTIALS,
        payload: res.data
    });
};




export const loggingCred = (credential) => async dispatch =>{

    const res = await axios.post(`http://localhost:8080/loginCred`, credential) //username=${credential.username}&password=${credential.password}
    .then(res=>{
        // if(res.data.success === false){
        //     return dispatch({
        //         type:LOGGING_FAILED,
        //         payload: res.data
        //     })
        // }
        return res 
    })
     .catch(error=>{
        console.log(error.response)
        return dispatch({
                type:LOGGING_FAILED,
                payload: error.response //success should be false if incorrect cred, so thenw we can call the loggin_failed as an action for main page and be able to call it after submit, so if success false, redirect or show error message. or copy error message to state in order to use it.
            })
     });
    
    
      dispatch({
          type:LOG_CREDENTIALS,
          payload: res.data
      });
};



export const dltCred = id => async dispatch => { // currying, deals with id first and then dispatch
    //delete from database
    dispatch({
        type: DELETE_CREDENTIALS,
        payload: id
    })
};

export const updCred = (credential)=> async dispatch => {
    //update/put to database with the use of 'credential.id' to pin point exact unique data, and then from there can update the info on specific contact credential
    dispatch({
        type: UPDATE_CREDENTIALS,
        payload: credential
    })
};
