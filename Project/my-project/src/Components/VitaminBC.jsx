import React,{useState} from "react"
import { useEffect } from "react"
import VitaminBCCard from "./VitaminBCCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/vitaminBC`)
  .then((res)=>res.json())
}

const VitaminBC=()=>{
    
    const [banner,setBanner]=useState([])
    
    useEffect(()=>{
       getApiData()
    },[])

    async function getApiData(){
        try {
           let data=await getData()
           console.log(data)
           setBanner(data)  
        } catch (error) {
           console.log(error) 
        }
    }

    
   
    return (
        <div style={{overflow:"hidden" , marginTop:"30px"}}>
            <h1 style={{marginLeft:"-600px"  , color:"#30363C" , fontFamily:"sans-serif" , fontSize:"26px"}}>Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C ) Tablets</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <VitaminBCCard  key={el.sequence} url={el.url} ></VitaminBCCard>
            })}
        </div>
        </div>
    )
}

export default VitaminBC