import React,{useState} from "react"
import { useEffect } from "react"
import PaymentOfferCard from "./PaymentOfferCard"
import css from "./Banner.css"
const getData=async()=>{
  return fetch(`http://localhost:5000/paymentOfferBanner`)
  .then((res)=>res.json())
}

const PaymentOffer=()=>{
    
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
            <h1 style={{marginLeft:"-1230px"  , color:"#30363C" , fontFamily:"sans-serif"}}>Payment Offers</h1>
        <div id="img" style={{ overflow:"auto", display:"flex" , width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,}} >


            {banner.map((el)=>{
                return <PaymentOfferCard  key={el.id} image={el.image} ></PaymentOfferCard>
            })}
        </div>
        </div>
    )
}

export default PaymentOffer