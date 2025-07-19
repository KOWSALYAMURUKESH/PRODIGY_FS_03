
import baby1 from '../../assets/baby1.jpg'
import baby2 from '../../assets/baby2.jpg'
import baby3 from '../../assets/baby3.jpg'
import baby4 from '../../assets/baby4.jpg'
import baby5 from '../../assets/baby5.jpg'
import baby6 from '../../assets/baby6.jpg'

import { useContext } from "react";
import { CartContext } from "../../CartContext";





function Baby() {


    const { addToCart } = useContext(CartContext);

const baby = [
{
    product : baby1,
    description : "Organic Kajal",
    Price : "$5",
},
{
    product : baby2,
    description : "Organic diaper",
    Price : "$10",
},
{
    product : baby3,
description : "Organic Reusable diaper",
    Price : "$10",
},
{
    product : baby4,
    description : "Organic Health mix",
    Price : "$10",
},
{
    product : baby5,
    description : "Organic Bath Powder",
    Price : "$5",
},
{
    product : baby6,
    description : "Organic moisturizer",
    Price : "$8",
}

]


    return(
        <div className="mt-16 bg-pink-50 "> 
            <h1 className="text-3xl font-bold text-center font-serif mt-2 p-10 text-pink-800 ">Baby's collections</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 md:grid-cols-3  space-y-2 ">
{baby.map((products) => (
    
        
        
        <div className="flex flex-col justify-center items-center  gap-5 h-auto  text-xl font-bold" >
            <img className="w-full max-h-80 object-contain rounded-lg" src={ products.product} alt="Baby products"/>

            <h1 >{products.description}</h1>

            <h1>Price:{products.Price}</h1>

        
        
        <button className="bg-pink-200 p-2 rounded-xl cursor-pointer"
        onClick={() => addToCart(products)}
        >Add to Cart</button>
        </div>
        

       
))};

</div>
         </div>
         
    )
}
export default Baby;