import React, { useState } from 'react';

const WhoTubeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="./images/aiLOGO.png" alt="Logo" className="h-8 w-8 invert" />
        <h1 className="text-3xl font-bold">AI Technologies</h1>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Services</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
        <a href="/Projects" className="hover:text-gray-200">BACK TO PROJECTS</a>
      </nav>
      <div className="relative flex items-center space-x-4">
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded bg-white text-gray-700 focus:outline-none"
          />
        </div>
        <button className="md:hidden bg-gray-200 p-2 rounded-md" onClick={toggleSearch}>
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2 2 2m-2-2V6m0 8h2m-2 2h2m-4-4h2" />
          </svg>
        </button>
        <img
          src="./images/icons8-male-user-24.png"
          alt="Profile"
          className="h-8 w-8 rounded-full invert cursor-pointer"
          onClick={toggleDropdown}
        />
        {isSearchOpen && (
          <div className="absolute top-full mt-2 mr-14 w-full bg-white border-gray-500 border-4 rounded-md shadow-lg z-50 p-2 md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className=" px-2 py-1 rounded bg-white text-gray-700 focus:outline-none"
            />
          </div>
        )}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border-gray-500 border-4 rounded-md shadow-lg z-50">
            <a href="/WhoTubeLogSign" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</a>
            <a href="/WhoTubeLogSign" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default WhoTubeHeader;
