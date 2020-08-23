import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk' //thunk is the past tense of think, thunk is a function that delays
const middleware = [thunk]
const initialState = {}


const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), //thunk in middleware and can add more middleware to 'middlewear' wihtout changing this line of code thanks to the spread operator. simple reusable code. just gotta add to the 'middleware' const
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
    
    
export default store;