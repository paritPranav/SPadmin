import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import CurrentAdvertisements from './CurrentAdvertisements';
import { Navigate,useNavigate } from 'react-router-dom';

export default function AddAdvertise() {
    const [image, setImage]=useState('');
    const [preview,setpreview]=useState('');
    const [newPosts, setNewPosts]=useState([]);
    const [adsize,setadsize]=useState('');

    let navigate=useNavigate();

  const uploadImage=async (e)=>{
    const file= e.target.files[0];
    setpreview(URL.createObjectURL(file))
    
    setImage(file);
    console.log(image)
  }


   const makePost=async()=>{
    if(image!=''){

   
    axios.get("process.env.REACT_APP_API_URL/advertise/")
    .then((res)=>{
      let size=res.data.length;
      if(size<3){
        if(localStorage.getItem('authtoken')!=null){
          const BaseUrl="process.env.REACT_APP_API_URL/advertise/addadvertise";
          axios.post(BaseUrl,{
              image:image
          },{
              headers:{
                  'authtoken':localStorage.getItem('authtoken'),
                  'Content-Type':'multipart/form-data'
              }
          }
          ).then((res)=>{
            if(res.status==200){
              alert("Uploaded")
            
            setNewPosts([res.data, ...newPosts]);
             
              setImage('')
              setpreview('')
              document.getElementById('upload').value = '';
              window.scroll({ bottom:0 });
            }else{
              navigate('/signin')
             }
          })
  
      }
      
      }else{
        alert("Cannot add More Than Three Advertisements at same time \n First remove Aleready existed advertisement")
        setImage('')
              setpreview('')
              document.getElementById('upload').value = '';

  
      }
     
     
        
    })
  }else{
    alert("Please select the image")
  }
  }



   
  return (
    <div style={{textAlign:"center"}}>
      
      <div style={{textAlign:"center", marginTop:"10px"}}>

<img src={preview} width={'150px'} height={'150px'} style={{margin:"3% 5% 3% 5%"}}></img>
</div>
<label htmlFor="upload">Upload Image</label>
<input type="file"  id='upload' onChange={(e)=>{uploadImage(e)}}  className='form form-control' required/>
<button className='btn btn-success' onClick={makePost} style={{marginTop:"10px"}}>Upload Post</button>
        <CurrentAdvertisements newPosts={newPosts}/>
    </div>  
  )
}
