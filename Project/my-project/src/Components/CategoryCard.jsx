import Product from "./Product"
import { Link } from "react-router-dom"
const CategoryCard=({imageUrl,name,discountText})=>{
    
    const handleClick=(el)=>{
        //console.log(el)
      
        //<a src="https://www.cricbuzz.com/"></a>
        <Link><Product></Product></Link>
        console.log(Product)
        
    }

    return <div >

        <img src={imageUrl} alt="pic" style={{height:"200px" , width:"250px" ,borderRadius:"20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"  }}  onClick={handleClick} />
        <p >{name}</p>
        <h4>{discountText}</h4>

        

        
       
    </div>
}

export default CategoryCard