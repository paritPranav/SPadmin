import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import{RxCross2} from 'react-icons/rx'
export default function Advertiseblock(props) {
  const [id,setid]=useState(props.add._id);
    const deleteadvertise= async()=>{


      axios.delete("http://localhost:3000/advertise/deleteAdvertise",{
        
          data:{id},
          headers:{
            'authtoken':localStorage.getItem('authtoken')
          }   
    
      }).then(async(res)=>{
        if(res.data=="Deleted"){
            alert("Advertise Deleted")
            await props.deletefunc(props.add)
        }
      })
    }

  return (
    <div className='Card advertisecard' >
        <img src={props.add.Advertise_image} alt="" />
        <button className='btn btn-danger' onClick={deleteadvertise} style={{marginBottom:"20px"}}><RxCross2/>  Delete Advertise</button>
    </div>
  )
}
