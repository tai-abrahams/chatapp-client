import { ADD_CREDENTIALS, DELETE_CREDENTIALS, UPDATE_CREDENTIALS} from '../actions/types'

const initialState = {
    user:{
        username:'',
        email:'',
        password:''
    }
}


export default function (state=initialState, action){

    switch (action.type) {
        case ADD_CREDENTIALS:
        return {
            ...state,
            ...action.payload
        };
        //  case DELETE_CREDENTIALS:
        //  return {
        //      ...state,
        //      user: state.user.filter(
        //          usr => usr.id !== action.payload
        //      )
        //  };
        case UPDATE_CREDENTIALS:
        return {
            ...state,
            user: state.user.map(
                usr=>
                usr.id === action.payload.id
                ? (usr = action.payload)
                : usr
            )
        };
        default:
        return state 
    };
} 