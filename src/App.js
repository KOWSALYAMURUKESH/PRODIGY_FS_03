import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/common/nav";
import Home from "./Components/pages/home";
import Baby from "./Components/pages/baby's collections";
import Mom from "./Components/pages/mom's collections";
import Maternity from "./Components/pages/maternity collections";
import Cart from "./Components/pages/cart";
import { useState } from "react";
import { CartProvider } from "./CartContext";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/common/footer";




function App() {
       
     const [cartIterms,setCartItems] = useState([])

     const handleAddToCart = (product) => {
      setCartItems((prevCart) => [...prevCart, product])
     }
    
  return (
    <div>
      
    <BrowserRouter>

    <Nav></Nav>
    <CartProvider>
       <Routes>
        
         <Route path="/" element={<Home onAddToCart={handleAddToCart}/>}></Route>
         <Route path="/babycollection" element={<Baby onAddToCart={handleAddToCart}/>}></Route>
         <Route path="/momcollection" element={<Mom onAddToCart={handleAddToCart}/>}></Route>
         <Route path="/maternity" element={<Maternity onAddToCart={handleAddToCart}/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
        
       </Routes>

       <ToastContainer />

</CartProvider>

<Footer></Footer>
    </BrowserRouter>

    


    </div>
  );
}

export default App;
