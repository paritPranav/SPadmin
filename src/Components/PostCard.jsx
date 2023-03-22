import React, { useState } from 'react'
import { useNavigate ,Navigation,Link} from 'react-router-dom';
import axios from 'axios';
export default function PostCard(post) {

    const [Desc, setDesc] = useState(post.post.Post_Description);
    const shortDesc= Desc.substring(0,100);
    const [Title,setTitle]=useState(post.post.Post_Title);
    const [image, setImage]=useState(post.post.Post_Image)
    const [id, setid]=useState(post.post._id);
    let navigate= useNavigate();  
   
    const deletepost =()=>{
        if(window.confirm("Do you Want to delete?")){
            if(localStorage.getItem('authtoken')!=null){
                console.log(id);
                const BaseURL=process.env.REACT_APP_API_URL+"/posts/delete";
                axios.delete(BaseURL,{
                      data:{postid:id},
                      headers:{
                        'authtoken':localStorage.getItem('authtoken')
                      }   
                }).then((res)=>{
            
                    navigate("/success/Deleted Post")
                   
        
                }).catch((err)=>{
                    console.log(err);
                })
            }
           
        }

        
    }



    const btnstyle={
       margin:"10px 10px 10px 10px",
       

    }
  return (
    <div>
        <div className='postcard card' style={{margin:"1% 5% 2% 5%"}} >
            <div className='row' >
                <div className='col-4'>
                    <img className='postimg' src={image} width={'150px'} height={'150px'} style={{margin:"3% 5% 3% 5%"}}></img>
                </div>
                <div className='col-8'>
                    <h5 className='postTile'>{Title}</h5>
                    <p>{shortDesc}...<Link to={"/FullPost/"+id}><a> Read More</a></Link></p>
                </div>

            </div>
            <div id='container' style={{textAlign:"center"}}>
                <Link to={"update/"+id}>
                        <button className='btn btn-primary btn-sm postbtn' >Update </button>
                </Link>
                <Link to={"/updateimage/"+id}>
                        <button className='btn btn-primary btn-sm postbtn' style={{marginLeft:"10px"}}>Update Image </button>
                </Link>
                <button  className='btn btn-danger  btn-sm postbtn' style={btnstyle} onClick={deletepost}> Delete</button>

            </div>
        </div>
    </div>
  )
}
