import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/Context';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, setToCart } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  //Product remove from cart as well as localStorage
  const handleRemove = (product) => {
    const newCart = cart.filter((item) => item.productName !== product.productName);
    setToCart(newCart);
  }

  //Total amount or price
  var totalAmount = 0;
  cart.forEach((cart) => {
    totalAmount += cart.price * cart.quantity;
  })

  //handing quantity change
  // const handleChangeQuantity = (index, newQuantity) => {
  //   setToCart((prevCart) => {
  //     const updatedCart = [...prevCart];
  //     updatedCart[index].quantity = newQuantity > 0 ? newQuantity : 1;
  //     return updatedCart;
  //   });
  // };

  //Checkout function
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty! Please add items before checking out.");
      return;
    }
    setCheckout(true);
  }


  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold text-[#f60202] mb-4">🛒 My Items</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white w-full lg:w-[65%] rounded-xl shadow-md relative">

          {/* cart section */}
          <div className="flex flex-col gap-6 p-4 mb-20 max-h-[60vh] overflow-y-auto">
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <div
                  key={index}
                  className="bg-[#fef6f5] flex flex-col md:flex-row justify-between items-center gap-5 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-2 hover:border-[#f5483f] transition-all"
                >
                  <img
                    src={product.img_url}
                    alt={product.productName}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-xl font-semibold text-[#444]">{product.productName}</h2>
                    <p className="text-lg text-gray-600">₹{product.price}</p>
                    <div>
                      {/* <label htmlFor="quantity">Quantity - </label>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleChangeQuantity(index, parseInt(e.target.value) || 1)}
                        className="w-16 text-center border rounded-md px-2 py-1 bg-white text-gray-700"
                      /> */}
                    </div>
                    <h2 className="text-[17px] font-normal text-[#444]">Quantity - {product.quantity}</h2>
                  </div>
                  <button
                    onClick={() => handleRemove(product)}
                    className="py-2 px-4 mt-6 bg-[#f61a02] text-white font-medium rounded-md hover:bg-[#c30000] transition-all"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 font-medium">Your cart is empty 🛒</p>
            )}
          </div>

          {/* Place Order Button */}
          {cart.length > 0 && (
            <div
              className="absolute bottom-0 bg-white w-full p-3 shadow-inner rounded-b-xl z-10 flex justify-between">
              <p className='flex justify-center items-center text-2xl'>₹{totalAmount}</p>
              <NavLink to='/checkout'
                className="py-2 px-4 mt-6 bg-[#f61a02] text-white font-medium rounded-md hover:bg-[#c30000] transition-all"
                onClick={handleCheckout}>
                Place Order
              </NavLink>
            </div>
          )}
        </div>

        {/* Price Details Section */}
        <div className="w-full lg:w-[30%] bg-[#ffe9e6] p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#333] text-center mb-2">💰 Price Details</h2>
          <div className="h-[1px] bg-[#e05b54] mb-3"></div>

          {cart.map((product, index) => (
            <div className="flex justify-between py-1 text-sm text-gray-800" key={index}>
              <span>{product.productName}</span>
              <span>₹{product.price * product.quantity}</span>
            </div>
          ))}

          <div className="h-[1px] bg-[#e0a954] mt-3 mb-2"></div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      </div>

      <NavLink to='/'><button className="py-2 px-4 mt-6 bg-[#f61a02] text-white font-medium rounded-md hover:bg-[#c30000] transition-all">Add more Products</button></NavLink>
    </div>
  );
};

export default Cart;