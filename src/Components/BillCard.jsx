import React from 'react'
import { useState } from 'react';

export default function BillCard(props) {
    const [name,setname]=useState(props.bill.Provider_Name);
    const [id, setid]=useState(props.bill._id);
    const [amount,setamount]=useState(props.bill.adAmount);
    const [status,setstate]=useState(props.bill.paymentStatus);
    const [duration, setduration] =useState(props.bill.adDuration)

  return (
    
    <div>
       <div className='card' style={{margin:"8px 5px"}}>
                <div className='row container' style={{margin:"5px",textAlign:"center",paddingTop:"auto"}}>
                  <div className='col-4'>{name}</div>
                  <div className='col-4'>{amount}</div>
                  <div className='col-4'>{duration}  Days</div>
                  {/* {
                  status=="Paid"?<><div className='col-4'><button className='btn btn-success' disabled>Paid</button></div></>:<><div className='col-4'> <button className=' btn-success btn btn-sm'> Mark as Paid</button> </div></>
                  } */}
                </div>
              </div>
    </div>
  )
}
