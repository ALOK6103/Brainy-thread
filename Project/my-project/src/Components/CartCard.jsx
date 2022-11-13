import { json } from "react-router-dom"

const CartCard = ({ url, name, price }) => {
    // let toy = JSON.parse(localStorage.getItem("products3"))

    // function Display(Data) {

    //     Data.forEach(function (elem, index) {

    //         let btn = document.createElement("button")
    //         btn.setAttribute = ("id", "remove_product")
    //         btn.innerText = "Remove"
    //         btn.addEventListener("click", function () {
    //             removeData(index)
    //         })

    //     })
    // }

    // Display(toy)

    function removeData(index) {
        let data = JSON.parse(localStorage.getItem("products3")) || []
        let newData = data.filter(function (el, i) {

            return  index!==i

        })


        localStorage.setItem("products3", JSON.stringify(newData))
        // Display(newData)
        console.log("deleted")

    }

    return <div >
        <img src={url} alt="pic" style={{ height: "180px", width: "180px", borderRadius: "20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} />
        <p >{name}</p>
        <h4 >{price}</h4>
        <button onClick={removeData}>Remove</button>


    </div>
}

export default CartCard