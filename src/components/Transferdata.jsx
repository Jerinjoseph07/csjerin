import React from 'react'
import './trans.css'
const Transferdata = (props) => {
  return (
    <div>
      <h1 className='a'>welcome</h1>
      <p>
       Username:&nbsp;{props.username}
        <br></br>
       password: {props.password}
        <br></br>
        type:{props.usertype}
        
      </p>

    </div>
  )
}

export default Transferdata
