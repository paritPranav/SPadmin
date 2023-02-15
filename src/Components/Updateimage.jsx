import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate ,useParams} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

  
export default function Updateimage() {
  
        const {id}= useParams()
        console.log(id);
        const navigate=useNavigate();

        const[post,setpost]= useState();
    const [image,setimage]=useState('');
    const [preview,setpreview]=useState('');

            
    const BaseURL="http://18.207.234.93:3000/posts/post";
    const BaseURL2="http://18.207.234.93:3000/posts/updateimage";

        const onupload=(e)=>{
            setpreview(URL.createObjectURL(e.target.files[0]));
            setimage(e.target.files[0]);
        }
        const Updateimage=()=>{

                axios.patch(BaseURL2,{
                    id:id,
                    image:image
                },{
                    headers:{
                        'authtoken':localStorage.getItem('authtoken'),
                        'Content-Type':'multipart/form-data'
                    }
                }).then((res)=>{
                    if(res.status==200){
                      navigate("/")
                    }
                })

        }

        const fetchpost=()=>{
            axios.get(BaseURL,{
                params:{
                    postid:id
                }
            }).then((res)=>{
             setpreview(res.data.Post_Image)
            })

        }

        useEffect(()=>{
            if(localStorage.getItem('authtoken')!=null){
                fetchpost();
          
               }else{
                navigate("/signin")
               }
         
        },[])


  return (
    <div>
      <div style={{textAlign:"center", marginTop:"10px"}}>

<img src={preview} width={'150px'} height={'150px'} style={{margin:"3% 5% 3% 5%"}}></img>
</div>
<label htmlFor="upload">Upload Image</label>
<input type="file"  id='upload' onChange={(e)=>onupload(e)} className='form form-control'/>
<div style={{textAlign:"center", marginTop:"10px"}}>

<button  className='btn btn-success' onClick={Updateimage}>Update</button>
</div>
    </div>
  )
}
