import { ADD_FRIEND, GET_FRIENDS, SEARCH_FRIEND } from '../actions/types'
const initialState={
    friends:[],
    foundUsers:[]
}

export default function(state=initialState, action){
    switch (action.type) {

        case SEARCH_FRIEND:
            return{
                ...state,
                ...action.payload
            }

        case ADD_FRIEND:
            return{
                ...state,
                friends: action.payload 
            };
        case GET_FRIENDS:
            return{
                ...state,
                ...action.payload
            }
    
        default:
            return state;
    }
}