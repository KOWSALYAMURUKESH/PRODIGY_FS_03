import { useContext } from "react";
import { CartContext } from "../../CartContext";



function Cart() {
  const { cartItems,  removeFromCart,   } = useContext(CartContext);

  return (
    <div className="mt-16 bg-blue-50">
      <h1 className="text-3xl font-bold text-center font-serif mt-2 p-10 text-blue-800 ">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl font-semibold">No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 md:grid-cols-3  space-y-2 pb-10">
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center  gap-5 h-auto  text-xl font-bold">
              <img src={item.product} alt="product" className="w-full max-h-80 object-contain rounded-lg"/>
              <h2>{item.description}</h2>
              <p>{item.Price}</p>
              <button
                onClick={() => removeFromCart(index)}
                className=" bg-red-300 p-2 rounded-xl cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
