import React, { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center"></div>
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-bold hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              Home
            </a>
       
            <a
              href="/Projects"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-bold hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              Projects
            </a>
            <a
              href="/Contact"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-bold hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200`}
      >
        <a
          href="/"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          Home
        </a>
        <a
          href="/Projects"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
     
          Projects
        </a>
        <a
          href="/Contact"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
