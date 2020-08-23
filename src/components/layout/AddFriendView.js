import React from 'react'
import TextFormInput from '../../TextFormInput';

const AddFriendView =(props)=>{

    const styles={
        backgroundColor: "transparent",
        marginTop: "20px",
        border: "5px solid red",
        borderRadius:"1px",
        borderBottom: "1px solid red",
        margin: "0px",
        height: "70px",
        textAlign: "center",
        color: "red",
        outline: "none",
        boxShadow:"none",
        fontSize:"32px",
        padding: "0px"
    }

    return(
        <div className="col-12 d-inline justify-content-md-center">
            <TextFormInput 
                type="text"
                fontSize="32px"
                style={styles}
                autoFocus
                className="row col-md-9"
            />
            <input
            type="submit"
            className="row d-inline btn btn-light btn-block col-md-3" style={{border: "3px solid red"}} />
        </div>
    )
}

export default AddFriendView