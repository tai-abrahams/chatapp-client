import Spinner from './components/layout/Spinner'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
const locationHelper = locationHelperBuilder({}) 


export const UserIsAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsAuthenticated', //creates a higher order component named userIsAuthenticated
    redirectPath: '/', //locationHelper.getRedirectQueryParam is used to take the query param values from the url if provided and delivered to the redirected page if needed e.g. if being directed to the update page the login page might already have asked us to provide an id number which is passed to the update page.
    //ownprops are props passed down from the parent component that is sent to this userIsAuthenticated object to be used as stated above. but i think can only get the props if the parent component has a connect component attached to it and the props are possibly 
    //allowRedirectBack: true,
    authenticatedSelector: state => state.loggingUser.logged !== false, //this is the selector that checks the state, if the test returns true that the state isnt null, then it wont be redirected
    //authenticatingSelector: state=> state.loggingUser.logged !== false,
    authenticatingComponent: Spinner
})

export const UserIsNotAuthenticated = connectedRouterRedirect({
    wrappedDisplayName: 'UserIsNotAuthenticated',
    redirectPath: (state, ownProps)=>locationHelper.getRedirectQueryParam(ownProps) || '/Dashboard',
    allowRedirectBack: false,
    authenticatedSelector: (state)=> state.loggingUser.logged !== true, //if conditon is true, page will redirect. if condition is false, we will redirect. if username isnt existing then dont redirect
    //authenticatingSelector: (state)=>state.loggingUser.logged === true, //i think this works if state is originally set to loading: true. The component did mount will change to loading: false or loaded: true. because this should be based on state having not loaded yet. so check should start after loaded componentDidMount
    authenticatingComponent: Spinner
})


//change from loaded state to loading state, maybe try componentDidMount, componenet on mount will chage state to loaded. Maybe use redux dispatchstatetoprops to change the state from loading to loaded. or loaded true or false