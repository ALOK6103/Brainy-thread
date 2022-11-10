import React,{useState} from "react"
import { useEffect } from "react"
import Banner1Card from "./Banner1Card"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/banner1`)
  .then((res)=>res.json())
}

const Banner1=()=>{
    
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
            <h1 style={{marginLeft:"-1190px" , color:"#30363C" , fontFamily:"sans-serif"}}>Offers Just for You</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <Banner1Card  key={el.id} image={el.image} ></Banner1Card>
            })}
        </div>
        </div>
    )
}

export default Banner1