import React, { useState } from 'react';

const ShoppingCartDropdown = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Calculate total number of items in the cart
  const totalItems = cartItems.length;

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="relative">
      <button className="relative z-10 block p-2 bg-white rounded-full shadow focus:outline-none" onClick={toggleCart}>
        <img src="./images/icons8-shopping-cart-100.png" alt="Cart" className="h-8 w-8" />
        {/* Render red circle with totalItems if cart is not empty */}
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg">
          <div className="p-4">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="mt-4">
                  {/* Checkout button */}
                  <a href="/ClothesCheckout" className="block w-full bg-blue-500 text-white py-2 rounded text-center hover:bg-blue-700">
                    Checkout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartDropdown;
