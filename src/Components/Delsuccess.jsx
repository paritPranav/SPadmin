import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Delsuccess() {

   let navigate =useNavigate();
   const goHome=()=>{
    navigate("/");
   }     
  return (
    <div style={{textAlign:"center"}}>
        <h1>post deleted</h1>
        <button className='btn btn-success' onClick={goHome}> OK </button>
    </div>
  )
}
