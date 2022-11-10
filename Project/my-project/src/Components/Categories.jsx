import React,{useState} from "react"
import { useEffect } from "react"
import CategoryCard from "./CategoryCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/categories`)
  .then((res)=>res.json())
}

const Categories=()=>{
    
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
        <div style={{overflow:"hidden" , marginTop:"30px"  }}>
            <h1 style={{marginLeft:"-1170px"  , color:"#30363C" , fontFamily:"sans-serif"}}>Shop by Categories</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <CategoryCard  key={el.id} imageUrl={el.imageUrl} name={el.name} discountText={el.discountText}></CategoryCard>
            })}
        </div>
        </div>
    )
}

export default Categories