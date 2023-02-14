import React from 'react'
import MakePost from './MakePost';
import { useNavigate , Link } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const changeRoutetoMakePost=()=>{
      if(localStorage.getItem('authtoken')!=null){
        navigate("/Makepost")
      }else{
        navigate("/signin")
      }
    
  }



  const changeRoutetoHome=()=>{

    navigate("/")
  }
  return (
    <div>
      
      <nav className="navbar bg-primary">
         <div className="container-fluid">
         <a className="navbar-brand" href="/">
      <span style={{color:"White"}} onClick={changeRoutetoHome}>SP NEWS</span>

    </a>
    <a className="navbar-brand"  onClick={changeRoutetoMakePost}>
   
         <span style={{color:"White"}}>+</span>
    </a>
  </div>
</nav>

    </div>
  )
}
