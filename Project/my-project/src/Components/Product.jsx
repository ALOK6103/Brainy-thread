import React,{useState} from "react"
import { useEffect } from "react"
import ProductCard from "./ProductCard"
import css from "./Banner.css"
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
        <div style={{overflow:"hidden"}}>
            <h1 style={{marginLeft:"-920px"  , color:"#30363C" , fontFamily:"sans-serif"}}>Supradyn Daily Multivitamin Tablets</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <ProductCard  key={el.id} url={el.url} name={el.name} price={el.price}></ProductCard>
            })}
        </div>
        </div>
    )
}

export default Product