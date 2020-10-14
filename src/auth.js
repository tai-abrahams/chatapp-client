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
    authenticatedSelector: (state)=> state.loggingUser.logged !== true, 
    
    authenticatingComponent: Spinner
})


