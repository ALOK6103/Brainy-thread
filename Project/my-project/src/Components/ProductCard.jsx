import { json } from "react-router-dom"

const ProductCard=({url,name,price})=>{
    
    const handleClick=()=>{
        //console.log(el)
       let toy=JSON.parse(localStorage.getItem("products3")) ||[]
        
       //let arr=[]
       
      //console.log(price)
        
      //let toy=localStorage.setItem(("products2"),JSON.stringify({name,price,url}))
      toy.push({price,url,name})
      
      localStorage.setItem(("products3"),JSON.stringify(toy))
      
      
      
    }
    
    
    return <div >
        <img src={url} alt="pic" style={{height:"180px" , width:"180px" ,borderRadius:"20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"  }}  />
        <p >{name}</p>
        <h4 >{price}</h4>
        <button onClick={handleClick}>Add To Cart</button>

      
    </div>
}

export default ProductCard