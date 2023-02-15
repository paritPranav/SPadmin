import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const [id, setid]= useState("");
  const [pass,setpass]=useState("");


  let navigate = useNavigate();

  const login= ()=>{
    const BaseURL=process.env.REACT_APP_API_URL+"/user/login";
     axios.post(BaseURL,{
      id: id,
			pass:pass
    }).then((res)=>{
        localStorage.setItem('authtoken',res.data.token);
      navigate("/")

    }).catch((err)=>{
      console.log(err);
      console.log("Plz enter correct credencials")
    })

  }

  return (
    <div style={{margin:"1% 2% 1% 2%"}}> 
      <h3>Sign In</h3>

      <form>
      <label htmlFor="id">Id</label>
        <input type="text"  id='id' onChange={(e)=>{setid(e.target.value)}} className='form form-control'/>

         <label htmlFor="password">Password</label>
        <input type="password"  id='password' onChange={(e)=>{setpass(e.target.value)}} className='form form-control'/>
   
      </form>
      <div style={{textAlign:"center", marginTop:"10px"}}>

<button className='btn btn-success' onClick={login}>Submit</button>
</div>
    </div>
  )
}
