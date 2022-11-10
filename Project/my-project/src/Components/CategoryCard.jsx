const CategoryCard=({imageUrl,name})=>{
    
    const handleClick=(el)=>{
        //console.log(el)
        console.log("hello")
    }

    return <div >
        <img src={imageUrl} alt="pic" style={{height:"200px" , width:"250px" ,borderRadius:"20px", boxShadow: " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}  onClick={handleClick} />
        <p >{name}</p>
        
       
    </div>
}

export default CategoryCard