import React,{useState} from "react"
import { useEffect } from "react"
import ProductCard from "./ProductCard"
import css from "./Banner.css"
import {Link} from "react-router-dom"
const getData=async()=>{
  return fetch(`http://localhost:5000/product`)
  .then((res)=>res.json())
}

const Product=()=>{
    
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
        <div style={{overflow:"hidden",width:"95%", margin:"auto" ,marginBottom:"300px" ,}} >
            <h1 style={{marginLeft:"-920px"  , color:"#30363C" , fontFamily:"sans-serif" , fontSize:"26px"}}>Dogs Essentials</h1>
        <div id="img" style={{ overflow:"hidden", display:"flex" ,width:"95%" , margin:"auto" , gap:"20px" , marginTop:"20px"  }} >


            {banner.map((el)=>{
                return <ProductCard  key={el.id} url={el.url} name={el.name} price={el.price}></ProductCard>
                
                
            })}
            
        </div>
       
        </div>
    )
}

export default Product