import React, { useState } from 'react'
import './Book.css'
import { useNavigate } from 'react-router-dom';
const Book = () => {
    const [bu,setBn]=useState('');
    const [aut,setAut]=useState('');
    const [pub,setPub]=useState('');

    const [er,setEr]=useState(false);
    const navigate=useNavigate();
    const readbook =(event) =>{
      event.preventDefault();
        console.log(event.target.value);
        setBn(event.target.value);
    }
    const readaut =(event) =>{
      event.preventDefault();
        console.log(event.target.value);
        setAut(event.target.value);
    }
    const readpub =(event) =>{
            event.preventDefault();
              console.log(event.target.value);
              setPub(event.target.value);
          
    }
    const checkfilldata =(event)=>{
      event.preventDefault();
      if(bu.trim ()===''|| aut.trim ()===''|| pub.trim ()==='')
      {
      setEr(true);
      return;
      }
      else
      {
      navigate("/LHome");

      }
      const myobj={
        bookname:bu,
        author:aut,
        publisher:pub
    
    }
    fetch("https://sampledbcs-default-rtdb.firebaseio.com/sampledbcs.json",
    {
     method:"POST",
     body:JSON.stringify(myobj),
     headers:{"content-Type":"application/json",
    }
    }
    ); 
    }
    



  return (
    <div>
    <div className='main'>
        <input type="text" placeholder="BOOK name" onChange={readbook}/><br />
          <input type="text" placeholder="Author" onChange={readaut}/><br />
        <input type="text" placeholder="Publisher" onChange={readpub}/><br />
        <button type="submit" onClick={checkfilldata}>SAVE</button>
      {er && 'Er occured'}
    </div>
    </div>
  )
}

export default Book
