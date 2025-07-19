import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


function Nav(){

    const [menuOpen, setMenuOpen] = useState(false)
   

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth",
        });
    };

    return(
        <div>
<nav className="w-full bg-pink-200 text-pink-800 flex fixed top-0 mb-0 p-5 justify-between items-center flex-col text-xl font-bold z-50 ">
 
 <div className="flex flex-row items-center justify-between w-full">
 <div>
 <Link to={"/"} onClick={scrollToTop} className="hover:underline">Home</Link>
</div>
 <div className="md:flex flex-row gap-5  justify-center items-center hidden">
     <Link to={"/babycollection"} onClick={scrollToTop} className="hover:underline">Baby's Collections</Link>
     <Link to={"/momcollection"} onClick={scrollToTop} className="hover:underline">Mom's Collections</Link>
     <Link to={"/maternity"} onClick={scrollToTop} className="hover:underline">Meturnity Collections</Link>
 </div>


<div className="md:hidden">

<button onClick={() => setMenuOpen(!menuOpen)}>

{menuOpen ? <X size={20}></X> : <Menu size={20}></Menu>}

</button>
</div>
<div>
    <Link className="hover:underline" onClick={scrollToTop} to={"/cart"}>🛒 Cart</Link>
 </div>
 </div>


{menuOpen && 



<div className="md:hidden   flex flex-row  h-full mt-5 justify-between w-full  bg-white p-5 px-5 text-blue-800  ">
     <Link to={"/babycollection"} onClick={scrollToTop} className="hover:underline  text-sm">Baby's Collections</Link>
     <Link to={"/momcollection"} onClick={scrollToTop} className="hover:underline text-sm">Mom's Collections</Link>
     <Link to={"/maternity"} onClick={scrollToTop} className="hover:underline  text-sm">Meturnity Collections</Link>
 </div>
}

 

</nav>
        </div>
    )
}
export default Nav;