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
    const [customerName,setCustomerName]=useState('');
    const [amount, setAmount] =useState('');
    const [status,setStatus]=useState('');
    const [duration, setDuration]=useState('');

    let navigate=useNavigate();

  const uploadImage=async (e)=>{
    const file= e.target.files[0];
    setpreview(URL.createObjectURL(file))
    
    setImage(file);
    console.log(image)
  }


   const makePost=async()=>{
    if(image!='' && customerName!='' && status!='None' && amount!='' && duration!=''){

   
    axios.get(process.env.REACT_APP_API_URL+"/advertise/")
    .then((res)=>{
      let size=res.data.length;
      if(size<3){
        if(localStorage.getItem('authtoken')!=null){
          const BaseUrl=process.env.REACT_APP_API_URL+"/advertise/addadvertise";
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
          });

          //POst request for Adding advertisement billing data

          const addadvertisedata=process.env.REACT_APP_API_URL+"/advertise/addBill";
          console.log({
           
            Pname:customerName,
            amount:amount,
            status:status,
            duration:duration
       
      })
          axios.post(addadvertisedata,{
            Pname:customerName,
            amount:amount,
            status:status,
            duration:duration
          },{
            headers:{
                'authtoken':localStorage.getItem('authtoken'),
                "Pranav": "K",
            }
        }
        ).then((res)=>{
          if(res.status==200){
            alert("Data added")
          
          setCustomerName('');
          setAmount('');
          setStatus('none');
          setDuration('');
          }
        }).catch((err)=>{
          console.log("move to signin")
          alert("you have not signin")
          navigate('/signin')
          
        });
  
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
    <div style={{textAlign:"center"}} className="container">
      
      <div style={{textAlign:"center", marginTop:"10px"}}>

<img src={preview} width={'150px'} height={'150px'} style={{margin:"3% 5% 3% 5%"}}></img>
</div>
<label htmlFor="upload">Upload Image</label>
<input type="file"  id='upload' onChange={(e)=>{uploadImage(e)}}  className='form form-control' required/>
<br/>
<input type="text" id="name" className="form-control form" onChange={(e)=>{setCustomerName(e.target.value)}} placeholder='Customer Name'></input>
<br/>
<input type="text" id='amount' className='form form-control' onChange={(e)=>{setAmount(e.target.value)}} placeholder='Amount' />
<br/>
<select className='form form-control' onChange={(e)=>{setStatus(e.target.value)}}>
  <option value="None">Select the payment status</option>
  <option value="Paid"> Paid</option>
  <option value="Unpaid"> Unpaid </option>
</select>
<br />
<input type="text" id='duration' className='form form-control' onChange={(e)=>{setDuration(e.target.value)}} placeholder='Duration In Days'/>
<button className='btn btn-success' onClick={makePost} style={{marginTop:"10px"}}>Upload Post</button>



        <CurrentAdvertisements newPosts={newPosts}/>
    </div>  
  )
}
