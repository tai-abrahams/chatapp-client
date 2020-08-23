import React from 'react'
import PropTypes from "prop-types"
import classnames from 'classnames'
const TextFormInput=({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    error,
    style,
    autoFocus,
    formContainer,
    formLabelClassName,
    inputClass
})=>{
    return(
        <div className={formContainer}>
          <label className={formLabelClassName} //use bootstrap to hide label but using the props maybe call it hide
            htmlFor={name}>{label} </label>
            <input 
              autoFocus={autoFocus}
              type={type}
              name={name}
              className={classnames(`${inputClass}`) }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={style}/>
          {error && <div className="invalid-feedback">{error}</div>}
          
        </div>
    );
}

TextFormInput.defaultProps={
    type: 'text'
};

TextFormInput.propTypes={
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextFormInput;
