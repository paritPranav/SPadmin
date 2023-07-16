import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillFileSlidesFill } from 'react-icons/bs';
import BillCard from './BillCard';

export default function AllBills() {

  const [bills, setbills]=useState([]);

  const baseurl=process.env.REACT_APP_API_URL+"/advertise/bills";
  const getdata=()=>{
    axios.get(baseurl)
  .then((res)=>{
     console.log(res.data);
     setbills(res.data);
  })
  }

  useEffect(()=>{
    getdata();
  },[])
  return (
    <div style={{textAlign:"center", marginTop:"15px"}}>
    <u>  <h1>MANAGE BILLS </h1></u>
      { 

        bills.map((bill)=>{
          return(
            <>
             <BillCard bill={bill}></BillCard>
            </>
          )
        })

      }

    </div>
  )
}
