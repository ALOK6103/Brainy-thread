import {Link, Route,Routes} from "react-router-dom"
import React from 'react'
import Product from "./Product"
import Cart from "./Cart"
import Alok from "./Home/Alok"

const AllRout=()=>{
    return (
        <div style={{display:"flex" , }}>
        <div>
            <Routes >
                <Route path="/product" element={<Product/>}/>
                
            </Routes>
        </div>
        
        <div>
            <Routes>
                 <Route path="/cart"  element={<Cart/>}/>
            </Routes>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Alok/>}/>
            </Routes>
        </div>
        </div>
    )
}

export default AllRout