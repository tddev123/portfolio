import React from 'react';

const FooterClothes = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        {/* Footer Sections */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Customer Service</a></li>
            <li><a href="#" className="hover:text-gray-300">Returns</a></li>
            <li><a href="#" className="hover:text-gray-300">Shipping Information</a></li>
            <li><a href="#" className="hover:text-gray-300">Track Order</a></li>
            <li><a href="#" className="hover:text-gray-300">International Shipping</a></li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Sign In</a></li>
            <li><a href="#" className="hover:text-gray-300">Order Status</a></li>
            <li><a href="#" className="hover:text-gray-300">My Profile</a></li>
            <li><a href="#" className="hover:text-gray-300">Rewards</a></li>
            <li><a href="#" className="hover:text-gray-300">ClothesLand Rewards</a></li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Women</a></li>
            <li><a href="#" className="hover:text-gray-300">Men</a></li>
            <li><a href="#" className="hover:text-gray-300">Kids</a></li>
            <li><a href="#" className="hover:text-gray-300">Baby</a></li>
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">ClothesLand</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About ClothesLand</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">Company Info</a></li>
            <li><a href="#" className="hover:text-gray-300">Investors</a></li>
            <li><a href="#" className="hover:text-gray-300">Newsroom</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} ClothesLand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterClothes;
