import Product from "./Product"
const CategoryCard=({imageUrl,name,discountText})=>{
    
    const handleClick=(el)=>{
        //console.log(el)
      <a><Product /></a> 
        //<a src="https://www.cricbuzz.com/"></a>
        console.log("hello")
        
    }

    return <div >
        <img src={imageUrl} alt="pic" style={{height:"200px" , width:"250px" ,borderRadius:"20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"  }}  onClick={handleClick} />
        <p >{name}</p>
        <h4>{discountText}</h4>
        
       
    </div>
}

export default CategoryCard