import React from 'react'
import MakePost from './MakePost';
import { useNavigate , Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlinePlus} from 'react-icons/ai';
import { RiImageAddFill } from "react-icons/ri";
import {SlNotebook} from  "react-icons/sl"
import { AiOutlineUser } from 'react-icons/ai';

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
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{fontSize:"25px", color:"white"}}>SP News</a>
    <button class="navbar-toggler" type="button" style={{border:"none"}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ><GiHamburgerMenu color='white'></GiHamburgerMenu></span>
    </button>
    <div class="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{ color:"white"}} aria-current="page" href="/makepost"><AiOutlinePlus></AiOutlinePlus> &nbsp; <span style={{marginTop:"10px"}}>Add Post</span></a>
        </li>
        <hr />
        <li class="nav-item">
          <a class="nav-link active" style={{ color:"white"}} aria-current="page" href="/advertise"><RiImageAddFill></RiImageAddFill> &nbsp; Add Advertise</a>
        </li>
        <hr />
        <li class="nav-item">
          <a class="nav-link active" style={{ color:"white"}} aria-current="page" href="/managebills"><SlNotebook></SlNotebook> &nbsp;Manage Bills</a>
        </li> 
        <hr />
        <li class="nav-item">
          <a class="nav-link active" style={{ color:"white"}} aria-current="page" href="/signin"><AiOutlineUser></AiOutlineUser> &nbsp;Login</a>
        </li> 
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
