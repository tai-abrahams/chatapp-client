import {combineReducers} from 'redux'
import credentialsReducer from './credentialsReducer'
import successReducer from './successReducer'
import loggingReducer from './loggingReducer'
import contactsReducer from './contactsReducer'
import friendsReducer from './friendsReducer'
//import searchReducer from './searchReducer'

export default combineReducers ({
    users: credentialsReducer,
    loggingUser: loggingReducer,
    contacts: contactsReducer,
    friends: friendsReducer
});