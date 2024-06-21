import React, { useState } from 'react';
import ProductCard from './ProductCard';

import ShoppingCartDropdown from './ClothesCart';
import FooterClothes from './FooterClothes';

const KidsClothes = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
      console.log('Cart Items:', [...cartItems, product]);
    };



    const productsData = [
        { id: 7, name: 'Kids white T', image: './images/Kids White T.jpg', price: 9.99 },
        { id: 8, name: 'Kids Black T', image: '../images/Kids Black T.jpg', price: 9.99 },
        { id: 9, name: 'Kids Red T', image: './images/Kids Red T.jpg', price: 9.99 },
    
      ];

     
      
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

    <body>

<header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
<div className='flex items-center'>
  <a href="/ClothesHome" className='flex items-center'>
    <img src="./images/icons8-clothes-100.png" alt="Clothesicon" className="h-8 w-auto" />
    <p className='text-2xl text-pretty font-bold ml-2'>ClothesLand</p>
  </a>
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
        
   



    <div  className="flex flex-nowrap justify-center gap-8 overflow-x-auto mb-64 mt-20">

    


    {productsData.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
  
      
  
   
  </div>

  <FooterClothes/>

  </body>
  )
}

export default KidsClothes