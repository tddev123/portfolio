import React, { useState } from 'react';
import ShoppingCartDropdown from './ClothesCart';

const HeaderClothes = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Function to handle smooth scrolling
  const scrollToCoupons = (event) => {
    event.preventDefault();
    document.getElementById('coupons-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGiftcards = (event) => {
    event.preventDefault();
    document.getElementById('gift-cards-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDeals = (event) => {
    event.preventDefault();
    document.getElementById('Deals').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className='flex'>
        <img src="./images/icons8-clothes-100.png" alt="Clothesicon" className="h-8 w-auto" />
        <p className='text-2xl text-pretty font-bold'>ClothesLand</p>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900" onClick={scrollToDeals}>Deals</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900" onClick={scrollToCoupons}>Coupons</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900" onClick={scrollToGiftcards}>Gift Cards</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Registry</a></li>
          {/* Add more navigation items */}
        </ul>
      </nav>
      <ShoppingCartDropdown cartItems={cartItems} removeFromCart={removeFromCart} />
    </header>
  );
};

export default HeaderClothes;
