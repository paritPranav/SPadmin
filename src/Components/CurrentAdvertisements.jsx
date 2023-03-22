import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Advertiseblock from './Advertiseblock';

export default function CurrentAdvertisements(props) {
    
    const[advertises,setadvertise]=useState([]);

    const getadvertises=()=>{
            axios.get("http://localhost:3000/advertise/")
            .then((res)=>{
                setadvertise(res.data);
                console.log(advertises);
            })
    }
    let temp=[];
    const deletelocally=(ad)=>{
        temp=advertises;
        temp=temp.filter((e)=>{
                return e._id !=ad._id;
         });
         setadvertise(temp);


    }

    useEffect(() => {
        console.log(advertises);
        console.log(props.newPosts);
        let temp=[];
       
       for(let i=0;i<props.newPosts.length;i++){
        let got=false;
    
        for(let j=0;j<advertises.length ;j++){
                if(props.newPosts[i]._id == advertises[j]._id){
                    got=true;
                }
            }
            if(!got){
                temp.push(props.newPosts[i])
            }

       }

        console.log(temp);

        setadvertise(advertises.concat(temp).reverse())
        console.log(advertises);
    },[props.newPosts])


    
    
    useEffect(()=>{
        getadvertises();
    },[]);

  return (
        <>
            {
                advertises.map((advertise)=>{
                    return(<Advertiseblock add={advertise} deletefunc={deletelocally}/>)
                })
            }

        </>
  )
}
