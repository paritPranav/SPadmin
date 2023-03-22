import React from 'react'
import { Navigate, useLocation, useNavigate,useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';

export default function UpdatePost() {
  let location= useLocation();
  let navigate=useNavigate();

  const { id } = useParams()

  const[post,setpost]= useState([]);
  const [Desc, setDesc] = useState('');
    const [Title,setTitle]=useState('');
    const [place, setPlace]=useState('')
    const [category,setcategory]= useState('');
    const [link,setlink]=useState('');
    const [keywords,setkeywords]=useState('');

    
    const BaseURL=process.env.REACT_APP_API_URL+"/posts/post";
    const BaseURL2=process.env.REACT_APP_API_URL+"/posts/updatepost";



 const UpdateData=()=>{

  axios.patch(BaseURL2,{
      id:id,
      title:Title,
      desc:Desc,
      place:place,
      category:category,
      link:link,
      keywords:keywords
  },{
    headers:{
      'authtoken':localStorage.getItem('authtoken'),
    }
  }).then((res)=>{
    if(res.status==200){
      navigate("/")
    }else{
      navigate('/signin')
     }
})
 }
 const fetchdata=()=>{
  axios.get(BaseURL,{
      params:{postid:id}
  }).then((res)=>{
     
      setpost(res.data);

     
  })
}
const setdata=()=>{

  setTitle(post.Post_Title);
  setDesc(post.Post_Description);
  setPlace(post.Post_Place)
  setcategory(post.Post_Category)
  setkeywords(post.Post_Keywords)
  setlink(post.Post_Video_Link)
}
useEffect(()=>{
 fetchdata()

},[])

useEffect(()=>{
  setdata()
},[post]);

  return (
    <div>
       <h3> Update Post</h3>
       <form className='form'>
        <label htmlFor="title">Title</label>
        <input type="text"  id='title' value={Title} onChange={(e)=>{setTitle(e.target.value)}} className='form form-control'/>

         <label htmlFor="Description">Description</label>
        <textarea type="text" style={{height:"200px"}}  id='Description' value={Desc}  onChange={(e)=>{setDesc(e.target.value)}}className='form form-control'/>
                
        <label htmlFor="place">Place</label>
        <input type="text"  id='place' value={place}  onChange={(e)=>{setPlace(e.target.value)}} className='form form-control'/>
        
        <label htmlFor="category">Category</label>
        <input list="cars" value={category} className='form form-control' id="category" onChange={(e)=>{setcategory(e.target.value)}}/>
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
        <input type="text"  id='vdoLink' value={link}  onChange={(e)=>{setlink(e.target.value)}} className='form form-control'/>
        
        <label htmlFor="keywords">Keywords</label>
        <input type="text"  id='keywords' value={keywords}  onChange={(e)=>{setkeywords(e.target.value)}} className='form form-control'/>
        


        
      </form>
      <div style={{textAlign:"center", marginTop:"10px"}}>

<button  className='btn btn-success' onClick={UpdateData}>Update</button>
</div>
    </div>
  )
}
