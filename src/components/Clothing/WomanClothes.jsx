import React, { useState } from 'react';
import ProductCard from './ProductCard';

import ShoppingCartDropdown from './ClothesCart';
import FooterClothes from './FooterClothes';

const WomensClothes = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
      console.log('Cart Items:', [...cartItems, product]);
    };



    const productsData = [
        { id: 4, name: 'Womens White T', image: './images/Woman White T.jpg', price: 19.99 },
        { id: 5, name: 'Womens Black T', image: './images/Woman Black T.jpg', price: 19.99 },
        { id: 6, name: 'Womens Red T', image: './images/Woman Red T.jpg', price: 19.99 },
    
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

export default WomensClothes