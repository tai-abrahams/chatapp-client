import React from 'react'
import img from './spinner.gif'

export default ()=>{
    return (
        <div>
          <img src={img}
            alt='Loading...'
            style={{
              width: '200px',
              margin: 'auto',
              display: 'block'
            }}
          />
        </div>
      )
};