import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [un,setUn]=useState('');
    const [pwd,setPwd]=useState('');
    const [er,setEr]=useState(false);
    const navigate=useNavigate();
  
    const readname =(event) =>{
      event.preventDefault();
        console.log(event.target.value);
        setUn(event.target.value);
    }
    const readpassword =(event) =>{
      event.preventDefault();
        console.log(event.target.value);
        setPwd(event.target.value);
    }
    const checkfilldata =(event)=>{
      event.preventDefault();
      if(un.trim ()===''|| pwd.trim ()==='')
      {
      setEr(true);
      return;
      }
      else
      {
      navigate("/LHome");

      }

      
    }

  return (
    <div>
      <h1>Login</h1>
 <form>
        <div className='main'>
        Name<input type="text" onChange={readname}/>
        <br></br>
        password<input type="password" onChange={readpassword}/> 
        <br></br>
        <button type="submit" onClick={checkfilldata}>click</button>
        </div>
      </form> 
      {er && 'Er occured'}

      
    </div>
  )
}

export default Login
