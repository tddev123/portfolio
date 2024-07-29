import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700  text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-12 h-12" src="./images/icons8-t-80 (1).png" alt="" />
        <nav className="pl-8 md:pl-32">
          <a href="#" className="text-lg md:text-xl mx-2 block">Contact Me - Tyler26daniel@gmail.com</a>
        </nav>
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
