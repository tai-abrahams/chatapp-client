import { LOG_CREDENTIALS, LOGGING_FAILED } from '../actions/types'

const initialState = {
        user: {
            success: null,
            errMessage:null
        },
        password: {
            success: null,
            errMessage:null
        },
        logged: false
}

export default function(state=initialState, action){
    switch(action.type){
        case LOG_CREDENTIALS:
            return{
              ...state,
              ...action.payload 
            };
        case LOGGING_FAILED: //put this in a notifier reducer, so we have a notifyer state property
            return{
            ...state,
            ...action.payload
        };
            default:
            return state
    }

}