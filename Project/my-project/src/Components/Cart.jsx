import React from "react"
import CartCard from "./CartCard"
let total=0
const Cart=()=>{
    
    let toy=JSON.parse(localStorage.getItem("products3"))
    console.log(toy)
    
    function Display(Data) {

      total = 0
      Data.forEach(function (elem, index) {


          total = total + elem.price
          // // console.log(total)
          // let btn = document.createElement("button")
          // btn.setAttribute = ("id", "remove_product")
          // btn.innerText = "Remove"
          // btn.addEventListener("click", function () {
          //     removeData(index)
          // })


      })
  }
  console.log(total)
  Display(toy)
    
    
   return (
    <div style={{overflow:"hidden",width:"100%"}}>
      <div style={{width:"100%" , height:"500px", margin:"auto", marginLeft:"40px", display:"flex", gap:"20px",marginBottom:"40px"}}>
      {toy.map((el)=>{
                return <CartCard  key={el.id} url={el.url} name={el.name} price={el.price} ></CartCard>
                
                
            })}
      </div>
      <div style={{marginBottom:"600px"}}>
       Total Amount - {total}
      </div>
    </div>
   )

}

export default Cart