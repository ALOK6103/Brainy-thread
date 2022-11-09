const CategoryCard=({imageUrl,name})=>{
    
    const handleClick=(el)=>{
        //console.log(el)
        console.log("hello")
    }

    return <div >
        <img src={imageUrl} alt="pic" style={{height:"250px" , width:"450px" ,borderRadius:"20px" }}  onClick={handleClick} />
        <p>{name}</p>
        
       
    </div>
}

export default CategoryCard