import React,{useState} from "react"
import { useEffect } from "react"
import BannerCard from "./BannerCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/LabelBanner`)
  .then((res)=>res.json())
}

const Banner=()=>{
    
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
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <BannerCard  key={el.id} image={el.image} ></BannerCard>
            })}
        </div>
        </div>
    )
}

export default Banner