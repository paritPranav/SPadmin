import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';
import {AiFillRightCircle,AiFillLeftCircle} from 'react-icons/ai'

import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Allposts() {

  const navigate=useNavigate()
  const [start,setstart]=useState(false);
  const [end,setend]=useState(false)
  const [maxpage,setmaxpages]=useState(0);
  const [page,setpage]= useState(1);
const [posts,setposts] = useState([]);
const [isposts,setisposts]=useState(false);
const BaseURL="http://localhost:3000/posts"
const BaseURL3="http://localhost:3000/posts/getlength"





const checkpage=()=>{
  if(maxpage==1 && page==1){
    setend(true);
    setstart(true);
  }
}
const visiblestart=()=>{
    if(page==1){
      setstart(true);
    }else{
      setstart(false);
    }
}

const visiblend=()=>{
  if(page==maxpage){
    setend(true);
  }else{
    setend(false);
  }
}
const incpage=()=>{
  if(page<maxpage){
    setpage(page+1);
  }
 
}
const decpage=()=>{
  if(page > 1){
    setpage(page-1);
  }
}


const fetchData=()=>{

  axios.get(BaseURL,{
    params:{pageno:page}
  })
  .then((res)=>{
   let allposts = res.data;
   setposts(allposts)
   setisposts(true);
      
  })

}
const fetchlength=()=>{
  axios.get(BaseURL3).then((res)=>{

      setmaxpages(Math.ceil(Number(res.data)));
  })
}


  useEffect(()=>{

    fetchlength();
     visiblestart();
     visiblend();
     if(localStorage.getItem('authtoken')!=null){
      fetchData();

     }else{
      navigate("/signin")
     }
     fetchData();
   },[page]);


 useEffect(()=>{
  checkpage();
},[maxpage])


const btnstyle={
   margin:"10px 10px 10px 10px",
   

}

  return (
    <div>
        {
          posts.map((onePost)=>{
        
           return(
            <PostCard post={onePost} key={onePost._id}></PostCard>

    )
          })
        }
        {
      isposts?
      
      <div className="pagination" style={{marginLeft:"20%"}}>
      {
        start?<button style={{float:"left",backgroundColor:"white",color:"white",border:"none"}} onClick={decpage} className="paginationPrev"><AiFillLeftCircle/></button>
        :    <button style={{float:"left",backgroundColor:"white",border:"none"}} onClick={decpage} className="paginationPrev"><AiFillLeftCircle/></button>

      }
      <span>{page}</span>
      {
        end?<button style={{float:"right", backgroundColor:"white",color:"white",border:"none"}} onClick={incpage} className="paginationNext"><AiFillRightCircle/></button>
        :   <button style={{float:"right", backgroundColor:"white",border:"none"}} onClick={incpage} className="paginationNext"><AiFillRightCircle/></button>

      }

      
    </div>:<></>

    }
    
    </div>
  )
}
