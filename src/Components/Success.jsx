import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
export default function Success() {

   let navigate =useNavigate();
   const {text} = useParams();

   const goHome=()=>{
    navigate("/");
   }     
  return (
    <div style={{textAlign:"center"}}>
        <h1>{text}</h1>
        <button className='btn btn-success' onClick={goHome}> OK </button>
    </div>
  )
}
