import React,{useState} from "react"
import { useEffect } from "react"
import LiveEasyCard from "./LiveEasyCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/damImages`)
  .then((res)=>res.json())
}

const LiveEasy=()=>{
    
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
            <h1 style={{marginLeft:"-1150px"  , color:"#30363C" , fontFamily:"sans-serif"}}>LiveEasy Essentials</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <LiveEasyCard  key={el.sequence} url={el.url} ></LiveEasyCard>
            })}
        </div>
        </div>
    )
}

export default LiveEasy