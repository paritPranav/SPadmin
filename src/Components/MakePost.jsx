import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MakePost() {
  let navigate=useNavigate();

  const [Desc, setDesc] = useState('');
  const [Title,setTitle]=useState('');
  const [image, setImage]=useState('');
  const [place, setPlace]=useState('');
  const [category,setcategory]= useState('');
  const [link,setlink]=useState('');
  const [keywords,setkeywords]=useState('');
  const [preview,setpreview]=useState('');

  const uploadImage=async (e)=>{
    const file= e.target.files[0];
    setpreview(URL.createObjectURL(file))
    console.log(file)
    setImage(file);
    console.log(image)
  }
  
  
  const makePost=()=>{
    if(Title=='' || Desc==''||place==''||category==''||keywords==''|| image==''){
      alert("You have not filled required feilds")

    }else{
      if(localStorage.getItem('authtoken')!=null){
        const BaseURL=process.env.REACT_APP_API_URL+"/posts/createPost";
        axios.post(BaseURL,{
          
          title:Title,
          desc:Desc,
          place:place,
          image:image,
          category:category,
          keywords:keywords,
          link:link
        },{
            headers:{
              'authtoken':localStorage.getItem('authtoken'),
              'Content-Type':'multipart/form-data'
          }
        
          
      }).then((res)=>{
          if(res.status===200){
            navigate("/")
          }else{
            navigate('/signin')
           }
      }).catch((err)=>{
        navigate("/signin");
      })
  
       }else{
        navigate("/signin");
       }
    }


    

  }
  useEffect(()=>{
    if(localStorage.getItem('authtoken')==null){
          navigate("/signin")
    }
  })


  return (
    <div style={{margin:"1% 2% 1% 2%"}}>
      <h2>Make Post</h2>
      <form className='form'>
        <label htmlFor="title">Title</label>
        <input type="text"  id='title' value={Title} onChange={(e)=>{setTitle(e.target.value)}} className='form form-control' required/>
        
         <label htmlFor="Description">Description</label>
        <textarea type="text" style={{height:"200px"}}  id='Description' value={Desc}  onChange={(e)=>{setDesc(e.target.value)}}className='form form-control' required/>
                
        <label htmlFor="place">Place</label>
        <input type="text"  id='place' value={place}  onChange={(e)=>{setPlace(e.target.value)}} className='form form-control' required/>
        
        <label htmlFor="category">Category</label>
        <input list="cars" className='form form-control' id="category" onChange={(e)=>{setcategory(e.target.value)}} required/>
        <datalist id="cars" >
            <option value="Agriculture" />
            <option value="Crime" />
            <option value="Entertainment" />
            <option value="Politics" />
            <option value="Education" />
            <option value="Sports" />
            <option value="Others" />
        </datalist>
        <label htmlFor="vdoLink">Video Link</label>
        <input type="text"  id='vdoLink' value={link}  onChange={(e)=>{setlink(e.target.value)}} className='form form-control' required/>
        
        <label htmlFor="keywords">Keywords</label>
        <input type="text"  id='keywords' value={keywords}  onChange={(e)=>{setkeywords(e.target.value)}} className='form form-control' required/>
        

        <div style={{textAlign:"center", marginTop:"10px"}}>

        <img src={preview} width={'150px'} height={'150px'} style={{margin:"3% 5% 3% 5%"}}></img>
        </div>
        <label htmlFor="upload">Upload Image</label>
        <input type="file"  id='upload' onChange={(e)=>{uploadImage(e)}}  className='form form-control' required/>

      </form>
        <div style={{textAlign:"center", marginTop:"10px"}}>

            <button  className='btn btn-success'  onClick={makePost}>Upload</button>
        </div>

    </div>
  )
}
