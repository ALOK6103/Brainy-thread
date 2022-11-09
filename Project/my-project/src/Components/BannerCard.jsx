
const BannerCard=({image})=>{
    
    const handleClick=(el)=>{
        //console.log(el)
        console.log("hello")
    }

    return <div >
        <img src={image} alt="pic" style={{height:"250px" , width:"450px" ,borderRadius:"20px" }}  onClick={handleClick} />
        
       
    </div>
}

export default BannerCard