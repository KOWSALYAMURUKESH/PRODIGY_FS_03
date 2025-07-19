import mom1 from '../../assets/mom1.jpg'
import mom2 from '../../assets/mom2.png'
import mom3 from '../../assets/mom3.jpg'
import mom4 from '../../assets/mom4.jpg'
import mom5 from '../../assets/mom5.jpg'
import mom6 from '../../assets/mom6.jpg'

import { useContext } from 'react'
import { CartContext } from '../../CartContext'


function Mom(){
    
        const { addToCart } = useContext(CartContext)
        
        const baby = [
        {
            product : mom1,
            description : "Organic face cream",
            Price : "$5",
        },
        {
            product : mom2,
            description : "Ayurvedic legiyam",
            Price : "$5",
        },
        {
            product : mom6,
        description : "Mom's Health mix",
            Price : "$5",
        },
        {
            product : mom4,
            description : "Mom's feeding dress",
            Price : "$10",
        },
        {
            product : mom5,
            description : "Mom's health drink",
            Price : "$5",
        },
        {
            product : mom3,
            description : "Ayurvedic hair oil",
            Price : "$8",
        }
        
        ]
        
        
            return(
                <div className="mt-16 bg-green-50 "> 
                    <h1 className="text-3xl font-bold text-center font-serif mt-2 p-10 text-green-800 ">Mom's collections</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 md:grid-cols-3  space-y-2 ">
        {baby.map((products) => (
            
                
                
                <div className="flex flex-col justify-center items-center  gap-5 h-auto  text-xl font-bold" >
                    <img className="w-full max-h-80 object-contain rounded-lg" src={ products.product} alt="Baby products"/>
        
                    <h1 >{products.description}</h1>
        
                    <h1>Price:{products.Price}</h1>
        
                
                
                <button className="bg-green-200 p-2 rounded-xl cursor-pointer"
                onClick={() => addToCart(products)}>Add to Cart</button>
                </div>
                
        
        
        ))};
                 </div>
                 </div>
            
        
        
    )
}
export default Mom;