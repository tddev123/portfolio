import React, { useState } from 'react';
import ShoppingCartDropdown from './ClothesCart';

const HeaderClothes = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-white shadow-md py-4 px-4 md:px-8 flex justify-between items-center relative">
      <div className="flex items-center">
        <img src="./images/icons8-clothes-100.png" alt="Clothesicon" className="h-8 w-auto" />
        <p className="text-lg md:text-xl text-pretty font-bold ml-2">ClothesLand</p>
      </div>
      <div className="md:hidden relative">
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {/* Mobile Dropdown Menu */}
        {showMobileMenu && (
          <div className="absolute right-0 top-full mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50">
            <div className="px-2 py-2">
              <a
                href="#"
                onClick={(e) => scrollToSection(e, 'Deals')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Deals
              </a>
              <a
                href="#"
                onClick={(e) => scrollToSection(e, 'coupons-section')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Coupons
              </a>
              <a
                href="#"
                onClick={(e) => scrollToSection(e, 'gift-cards-section')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Gift Cards
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Registry
              </a>
              {/* Add more navigation items */}
            </div>
          </div>
        )}
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'Deals')}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Deals
        </a>
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'coupons-section')}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Coupons
        </a>
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'gift-cards-section')}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Gift Cards
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Registry
        </a>
        {/* Add more navigation items */}
      </nav>
      {/* Shopping Cart Icon */}
      <ShoppingCartDropdown cartItems={cartItems} removeFromCart={removeFromCart} />
    </header>
  );
};

export default HeaderClothes;

