import React,{useState} from "react"
import { useEffect } from "react"
import LabTestCard from "./LabTestCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/types`)
  .then((res)=>res.json())
}

const LabTest=()=>{
    
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
        <div style={{backgroundColor:"#F4F8FF" ,margin:"auto" , marginTop:"30px" ,width:"95%"}}>
        <div>
        <h1 style={{marginLeft:"-1020px"  , color:"#30363C" , fontFamily:"sans-serif"}}>Lab Tests by Health Concern</h1>
        </div>
       
            <div style={{display:"flex" , gap:"150px" ,marginLeft:"60px" }}>
                <div>
                    Recommended by <br></br>
                    health experts
                </div>
                <div>
                Report <br></br>
                in 24 hrs
                </div>
                <div>
                Home Sample 
                Pickup
                </div>
                <div>
                World Class <br></br>
                Technologies & labs
                </div>
                <div>
                Highly Skilled <br></br>
                Technicians
                </div>
                <div>
                100% Safe & <br></br>
                Hygienic
                </div>
            </div>
        <div style={{overflow:"hidden"}}>
            
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"100%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <LabTestCard  key={el.id} url={el.url} ></LabTestCard>
            })}
        </div>
        </div>
        <div style={{width:"100%" , height:"200px" , margin:"auto" ,backgroundColor:"#8678DE" , marginTop:"40px" }}>
            <div>
            <p style={{color:"white" , paddingTop:"30px"}}>Save flat 5% extra medicines & enjoy FREE delivery with PLUS membership</p>
            </div>
            <div>
            <img src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0" style={{marginTop:"-22px" , marginLeft:"950px"}}></img>
            </div>
         
        </div>
        </div>
    )
}

export default LabTest