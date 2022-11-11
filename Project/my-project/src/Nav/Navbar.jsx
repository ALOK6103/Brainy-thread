import {Link,NavLink} from "react-router-dom"

let links=[
    {
        to:"/",
        title:"Home"
       
    },
    {
       to:"/",
       title:"________________________________________________"
       
    },
    {
        to:"/product",
        title:"Product"
        
    },
    {
        to:"/",
        title:"_________________________________________________"
        
     },
    {
        to:"/cart",
        title:"Cart"
        
    }
   
]

function Navbar(){
    return (
        <div style={{display:"flex"}}>
           
        <div style={{width:"95%" , height:"100px" ,margin:"auto" , border:"1px solid blue",backgroundColor:"#C3F0FA"}}>
        <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" style={{marginLeft:"-1200px" , marginTop:"20px" }}></img>
        <div >
            {links.map((link)=>(
                <NavLink key={link.to} to={link.to}  end>
                    {link.title}
                </NavLink>
            ))}
        </div>
        </div>
        </div>
    )
}

export default Navbar