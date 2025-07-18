import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { CartContext, SearchContext } from '../../Context/Context' //context hook
import { MdShoppingCart, MdPerson, MdAccessTime, MdOutlineAssignmentTurnedIn } from 'react-icons/md';
import Banner from '../../components/Banner/Banner'
import amul from '/images/products/amul.png'
import bakers from '/images/products/bakers.png'
import cheese from '/images/products/cheese.png'
import Juices from '/images/products/Juices.png'
import lays from '/images/products/lays.png'
import pasta from '/images/products/pasta.png'
import rich from '/images/products/rice.png'
import sauces from '/images/products/sauces.png'
import soup from '/images/products/soup.png'
import spices from '/images/products/spices.png'
import Navbar2 from '../../components/Navbar2/Navbar2'

const Home = () => {

  //all products
  const [products, setProducts] = useState([
    {
      productName: "Knorr - Hot and Soups",
      img_url: soup,
      price: 50,
      quantity: 1
    },
    {
      productName: "Amul Taaza Milky Milk",
      img_url: amul,
      price: 28,
      quantity: 1
    },
    {
      productName: "Amul Diced Cheese",
      img_url: cheese,
      price: 120,
      quantity: 1
    },
    {
      productName: "Bread - Baker's Choice",
      img_url: bakers,
      price: 35,
      quantity: 1
    },
    {
      productName: "Pasta - Pastalicious",
      img_url: pasta,
      price: 90,
      quantity: 1
    },
    {
      productName: "Rice - Bharat Rice",
      img_url: rich,
      price: 60,
      quantity: 1
    },
    {
      productName: "Sauces",
      img_url: sauces,
      price: 85,
      quantity: 1
    },
    {
      productName: "Spices",
      img_url: spices,
      price: 40,
      quantity: 1
    },
    {
      productName: "Juices - Maaza",
      img_url: Juices,
      price: 70,
      quantity: 1
    },
    {
      productName: "Lays",
      img_url: lays,
      price: 20,
      quantity: 1
    }
  ])

  // cart
  const { cart, setToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext)

  //search function
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Add to Cart
  const handleAdd = (product, index) => {
    const existingIndex = cart.findIndex(item => item.productName === product.productName);

    if (existingIndex !== -1) {
      const existingProduct = cart[existingIndex];
      //change the quantity when different
      if (existingProduct.quantity !== product.quantity) {
        setToCart(prevCart => {
          const updatedCart = [...prevCart];
          updatedCart[existingIndex].quantity = product.quantity;
          return updatedCart;
        });
        toast.success("Item quantity updated in the cart");
      } else {
        toast.warning("Item already added to the cart");
      }
      return;
    }

    // New product add to cart
    setToCart(prevCart => [...prevCart, product]);

    toast.success("Item added to the cart");
  };

  // Quantity Change Handler
  const handleChangeQuantity = (index, newQuantity) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].quantity = newQuantity > 0 ? newQuantity : 1;
      return updatedProducts;
    });
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar2 /> {/*navbar 2 for different type of products */}

      {/* intro */}
      <div className='w-full bg-gradient-to-r from-red-600 to-red-700 text-white flex flex-col items-center p-4 font-normal'>
        <h1 className='font-semibold text-2xl sm:text-4xl'>Groceries Ready <span className='text-yellow-300'>When You Are</span></h1>
        <p className='py-4 text-xs sm:text-sm opacity-95'>Order online, skip the wait - Pink up at your convenience!</p>
        <a href="#products"
          className='bg-white text-[#ff4c4c] font-semibold text-lg py-2 px-6 rounded-3xl shadow-sm'>Start Your Order Now</a>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-3'>
          <p className='text-sm flex gap-2 items-center font-medium'>
            <MdShoppingCart className="text-lg" /> Instant Pickup Ready
          </p>
          <p className='text-sm flex gap-2 items-center font-medium'>
            <MdPerson className="text-lg" /> No Delivery Wait
          </p>
          <p className='text-sm flex gap-2 items-center font-medium'>
            <MdAccessTime className="text-lg" /> Saves Time & Energy
          </p>
          <p className='text-sm flex gap-2 items-center font-medium'>
            <MdOutlineAssignmentTurnedIn className="text-lg" /> Safe & Contactless
          </p>
        </div>
      </div>
      {/* banner */}
      <Banner />

      {/* products */}
      <div className='w-[99%] rounded-xl bg-white m-4 px-2 py-5' id='products'>
        <h1 className='text-2xl m-3 font-bold relative inline-flex pb-1 after:absolute after:bottom-0 after:right-0 after:w-[70%] after:h-[2px] after:bg-[#b83a08]'>Our Products</h1>
        <div
          className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 px-4 sm:px-6 md:px-10 py-5'>
          {
            filteredProducts.length > 0 && filteredProducts.map((product, index) => (
              <div
                key={index}
                className='bg-[#f6f5f3] flex flex-col justify-evenly items-center gap-5 p-3 rounded-xl transition-all border-[0.4px] shadow-lg hover:border-indigo-500 hover:scale-[1.02] max-sm:p-2 w-full'
              >
                <div>
                  <img
                    src={product.img_url}
                    alt={product.productName}
                    className='h-[150px] w-[150px] rounded-lg hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <div className='text-center'>
                  <h1 className='text-xl font-semibold max-sm:text-sm'>{product.productName}</h1>
                  <h2 className='text-lg max-sm:text-sm'>Price - ₹{product.price}</h2>
                </div>
                <div className='flex justify-center items-center gap-3 flex-wrap'>
                  <div>
                    <label htmlFor="quantity">Quantity - </label>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) => handleChangeQuantity(index, parseInt(e.target.value) || 1)}
                      className="w-16 text-center border rounded-md px-2 py-1 bg-white text-gray-700"
                    />
                  </div>
                  <button
                    className='py-2 px-4 bg-[#f63302] text-white font-medium rounded-md hover:bg-[#e30000] transition-all'
                    onClick={() => handleAdd(product, index)}
                  >Add to cart</button>
                </div>
              </div>
            ))
          }
          {
            filteredProducts.length === 0 && (
              <div className='col-span-full text-center text-gray-500'>
                No products found for "{searchTerm}"
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;