import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import classnames from 'classnames'
import "../../App.css"
import { connect } from 'react-redux'
import { findFriend } from '../../actions/friendsActionCreators' 
import Suggestions from './Suggestions'

class Search extends Component{
    constructor(props){
        super(props);
        this.search = React.createRef()
        //this.onClick = this.onClick.bind(this)
    }
  state={
    query:'',
    searchFriendError: '',
    results:[]
  }


  displayFoundUsers=()=>{
    const { foundFriends } = this.props
    this.setState({
        results: foundFriends
    })
    console.log("hi" + foundFriends)
 }

  onChange=()=>{
      const { query, searchFriend } = this.state
      const { findFriend } = this.props

    this.setState({
        query: this.search.current.value
    }, ()=>{
        if(query){
            const searchedQuery = {
                query
            }
            console.log(query)
             //modulus operator to get the remainder after division
                findFriend(searchedQuery)
                
            this.displayFoundUsers()
        }
    })

    
}







    render(){
        const { searchFriendError, results } = this.state;
        const { foundFriends } = this.props
        return(
            <div className={this.props.formContainer}>
                <div className="d-inline-block col-8 p-0">
              <label className={this.props.formLabelClassName} //use bootstrap to hide label but using the props maybe call it hide
                htmlFor={this.props.name}>{this.props.label} </label>
                <input 
                  autoFocus={this.props.autoFocus}
                  type={this.props.type}
                  name={this.props.name}
                  className={this.props.inputClass}
                  placeholder={this.props.placeholder}
                  onChange={this.onChange}
                  style={this.props.styles}
                  ref={this.search} //or use callback {(element)=>{this.search = element}} elemet being this input DOM
                  
                  />
              {searchFriendError && <div className="invalid-feedback">{searchFriendError}</div>}
              </div>
              <div className="d-inline-block col-4">
                <input
                        id="inputID"
                        type="submit"
                        className="d-inline btn btn-light btn-block col-12 btn-dark p-0"
                        value={this.props.searchValue}
                    />
              </div>
    
               {
                foundFriends
                ? foundFriends.map((friend)=>{
                    return <div key={friend.username}>
                        {console.log(friend)}
                        <Suggestions addUser={friend}/>
                        </div>
                    
                })
                : console.log('none')
            }
    
            </div>
        );
    }
    
}

Search.defaultProps={
    type: 'text'
};

Search.propTypes={
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    //value: PropTypes.string.isRequired,
    //onChange: PropTypes.func.isRequired
};

const mapStateToProps=(state)=>{
    
    return{
        foundFriends: state.friends.foundUsers
    }

}
export default connect(
    mapStateToProps,
    {findFriend})(Search)
