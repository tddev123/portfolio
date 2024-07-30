import React, { useState } from 'react';

const WhoTubeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log('Search text:', searchText); // Replace this with your search logic
      // Close the search bar after searching
      setIsSearchOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11a4 4 0 117.75 2.3l3.3 3.3a1 1 0 11-1.42 1.42l-3.3-3.3A4 4 0 018 11z" />
          </svg>
        </button>
        <img
          src="./images/icons8-male-user-24.png"
          alt="Profile"
          className="h-8 w-8 rounded-full invert cursor-pointer"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border-gray-500 border-4 rounded-md shadow-lg z-50">
            <a href="/WhoTubeLogSign" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</a>
            <a href="/WhoTubeLogSign" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
          </div>
        )}
      </div>
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 flex items-center justify-center">
          <div className="w-11/12 bg-white rounded-md p-4 shadow-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none"
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <button className="ml-2 text-gray-700" onClick={handleSearch}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button className="ml-2 text-gray-700" onClick={toggleSearch}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default WhoTubeHeader;
