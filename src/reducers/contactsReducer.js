import { ADD_CONTACT, GET_CONTACTS } from '../actions/types' 
const initialState = {
    contacts:[]
}


export default function(state=initialState, action){
    switch (action.type) {
        //sort out
        case ADD_CONTACT:
            return{
                ...state,
                contacts: action.payload
            };
        case GET_CONTACTS:
            return{
                ...state,
                contacts: action.payload
            }
        default:
            return state
    }
}