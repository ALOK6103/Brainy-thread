const CategoryCard=({imageUrl,name})=>{
    
    const handleClick=(el)=>{
        //console.log(el)
        console.log("hello")
    }

    return <div >
        <img src={imageUrl} alt="pic" style={{height:"200px" , width:"250px" ,borderRadius:"20px" ,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}  onClick={handleClick} />
        <p>{name}</p>
        
       
    </div>
}

export default CategoryCard