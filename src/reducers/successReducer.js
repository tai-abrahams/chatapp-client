import { LOGGING_FAILED } from '../actions/types'

const initialState={
    user:{},
    password:{},
    errMessage: null,
    logged: null
        
}

export default function(state=initialState, action){

    switch (action.type) {
        case LOGGING_FAILED: //put this in a notifier reducer, so we have a notifyer state property
        return{
            ...state,
            ...action.payload
        };
        default:
        return state 
    }
}
