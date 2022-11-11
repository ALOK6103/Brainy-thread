import React,{useState} from "react"
import { useEffect } from "react"
import MultiVitaminCard from "./MultiVitaminCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/multiVitamins`)
  .then((res)=>res.json())
}

const MultiVitamin=()=>{
    
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
        <div style={{overflow:"hidden"}}>
            <h1 style={{marginLeft:"-1000px"  , color:"#30363C" , fontFamily:"sans-serif" , fontSize:"26px"}}>Supradyn Daily Multivitamin Tablets</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <MultiVitaminCard  key={el.sequence} url={el.url} ></MultiVitaminCard>
            })}
        </div>
        </div>
    )
}

export default MultiVitamin