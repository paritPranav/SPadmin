import React from 'react'
import { useLocation ,useParams,useNavigate} from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowLeft ,BsFillShareFill,BsYoutube,BsEyeFill} from 'react-icons/bs'
const months = ["जानेवारी", "फेब्रुवारी", "मार्च ", "एप्रिल ", "मे ",  "जून", "जुलै", "ऑगस्ट", "सप्टेंबर ", "ऑक्टोबर ","नोव्हेंबर ", "डिसेंबर"];

export default function Fullpost() {
    const notify = () => toast('Copied to clipboard.');
    const { id } = useParams();
    let navigate= useNavigate();  


    const posturl="http://localhost:3000/posts/post"
    const[post,setpost]= useState([]);

    const fetchPost=()=>{
        
        axios.get(posturl,{
            params:{postid:id}
        }).then((res)=>{
                setpost(res.data);
        })

    }
    useEffect(()=>{
        fetchPost()
    },[])
    const goback=()=>{
        navigate(-1);
    }
    return (
        <div>
            <Toaster/>
<button className='backbutton' onClick={goback}> <BsArrowLeft className='arrow'/></button>
        <CopyToClipboard  text={window.location.href}  >
    
      <button className='sharebutton'  onClick={notify}> <BsFillShareFill className='share'/></button>
       
        </CopyToClipboard>
        <div style={{margin:"1% 5% 2% 5%", textAlign:"center"}} >
            <div className='row' >
                <div className=' col-sm-12 col-lg-4'>
                    <img src={post.Post_Image} width={'150px'} height={'150px'} style={{margin:"3% 5% 3% 5%"}}></img>
                </div>
                <div style={{marginLeft:"10%"}}>
                    <p style={{float:"left"}}><BsEyeFill/>  {post.Post_Views/2}  </p>
                    <p  style={{float:"left"}}> &nbsp;&nbsp;&nbsp;{post.Post_Place} </p>
                </div>
                <div className='col-sm-12 col-lg-8'>
                    <h3>{post.Post_Title}</h3>
                    <p>{post.Post_Description}</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}
