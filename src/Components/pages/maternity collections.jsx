import maternity1 from '../../assets/maternity1.jpg'
import maternity2 from '../../assets/maternity2.jpg'
import maternity3 from '../../assets/maternity3.jpg'

import { useContext } from 'react'
import { CartContext } from '../../CartContext' 



function Maternity() {

    const {addToCart} = useContext(CartContext)

const maternity = [ 
    {
        product : maternity3,
        description : "Maternity dress",
        Price : "$10"
    },
    {
        product : maternity1,
        description : "Maternity Exercise dress",
        Price : "$10"
    },
    {
        product : maternity2,
        description : "Maternity Yoga dress",
        Price : "$5"
    },
]


    return(
         
                <div className="mt-16 bg-orange-50 "> 
                    <h1 className="text-3xl font-bold text-center font-serif mt-2 p-10 text-orange-800 ">Maternity's collections</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 md:grid-cols-3  space-y-2 ">
        {maternity.map((products) => (
            
                
                
                <div className="flex flex-col justify-center items-center  gap-5 h-auto  text-xl font-bold" >
                    <img className="w-full max-h-80 object-contain rounded-lg" src={ products.product} alt="Baby products"/>
        
                    <h1 >{products.description}</h1>
        
                    <h1>Price:{products.Price}</h1>
        
                
                
                <button className="bg-orange-200 p-2 rounded-xl cursor-pointer"
                onClick={() => addToCart(products)}>Add to Cart</button>
                </div>
                
        
        
        ))};
                 </div>
                 </div>
            
        
    )
}
export default Maternity;
