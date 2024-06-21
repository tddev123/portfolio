import React, { useState } from 'react';
import FooterClothes from './FooterClothes';




const CheckoutPage = ({ cartItems, onPlaceOrder }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  

  // Calculate the total price
  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.price, 0) : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(shippingInfo);
  };

  return (

<body>
  


    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
<div className='flex items-center'>
  <a href="/ClothesHome" className='flex items-center'>
    <img src="./images/icons8-clothes-100.png" alt="Clothesicon" className="h-8 w-auto" />
    <p className='text-2xl text-pretty font-bold ml-2'>ClothesLand</p>
  </a>
</div>

     
       
      </header>







    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span className="text-sm">{item.name}</span>
                  <span className="font-semibold">${item.price.toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-600">No items in cart.</p>
            )}
          </div>
          <div className="flex justify-between items-center border-t pt-2 mt-4">
            <span className="font-semibold">Total</span>
            <span className="font-semibold text-xl">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  value={shippingInfo.zip}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={shippingInfo.country}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <h1 className='absolute text-2xl left-10 bottom-1/3'>Database required to transfer cart items to checkout</h1>
    </div>

    <FooterClothes/>

    </body>
  );
};

export default CheckoutPage;
