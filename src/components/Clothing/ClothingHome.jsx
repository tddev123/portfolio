import React, { useRef, useEffect, useState } from 'react';
import ShoppingCartDropdown from './ClothesCart';
import ProductCard from './ProductCard';



const ClothingHome = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log('Cart Items:', [...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

 
  const divRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    if (divRef.current) {
      const scrollContainer = divRef.current;
      const scrollStep = 1;
      const scrollDelay = 20; // Adjust scroll speed by changing this value (smaller value means slower scroll)

      let scrollPosition = 0;

      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          if (scrollPosition < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollPosition += scrollStep;
            scrollContainer.scrollLeft = scrollPosition;
          } else {
            clearInterval(scrollInterval);
          }
        }, scrollDelay);
      };


      const handleClick = (event) => {
        // Check if click occurred inside the scroll container or its children
        if (divRef.current.contains(event.target)) {
          stopScrolling();
        }
      };

      // Add event listener for mousedown on the scroll container
      divRef.current.addEventListener('mousedown', handleClick);

      const stopScrolling = () => {
        clearInterval(scrollInterval);
      };

  

      divRef.current.addEventListener('click', handleClick);

      startScrolling(); // Start scrolling initially

      return () => {
        divRef.current.removeEventListener('click', handleClick);
        clearInterval(scrollInterval);
      };
    }
  }, []);
  
 


  const productsData = [
    { id: 1, name: 'Mens hite T', image: './images/White T Male.jpg', price: 19.99 },
    { id: 2, name: 'Mens Black T', image: './images/Black T shirt Male.jpg', price: 19.99 },
    { id: 3, name: 'Mens Red T', image: './images/Red Male T.jpg', price: 19.99 },
    { id: 4, name: 'Womens White T', image: './images/Woman White T.jpg', price: 19.99 },
    { id: 5, name: 'Womens Black T', image: './images/Woman Black T.jpg', price: 19.99 },
    { id: 6, name: 'Womens Red T', image: './images/Woman Red T.jpg', price: 19.99 },
    { id: 7, name: 'Kids white T', image: './images/Kids White T.jpg', price: 9.99 },
    { id: 8, name: 'Kids Black T', image: '../images/Kids Black T.jpg', price: 9.99 },
    { id: 9, name: 'Kids Red T', image: './images/Kids Red T.jpg', price: 9.99 },
    { id: 10, name: 'Baby Jammy Lime', image: './images/Baby Jammy Lime.jpg', price: 14.99 },
    { id: 11, name: 'Baby Jammy Red', image: './images/Baby Jammy Red.jpg', price: 14.99 },
    { id: 12, name: 'Baby Jammy Multi', image: './images/Baby Jammy Striped.jpg', price: .99 },
    // ...
  ];
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className='flex items-center'>
  <a href="/ClothesHome" className='flex items-center'>
    <img src="./images/icons8-clothes-100.png" alt="Clothesicon" className="h-8 w-auto" />
    <p className='text-2xl text-pretty font-bold ml-2'>ClothesLand</p>
  </a>
</div>

        <nav>
          <ul className="flex space-x-4">
            <li><a href="#Deals" className="text-gray-600 hover:text-gray-900" >Deals</a></li>
            <li><a href="#coupons-section" className="text-gray-600 hover:text-gray-900" >Coupons</a></li>
            <li><a href="#gift-cards-section" className="text-gray-600 hover:text-gray-900" >Gift Cards</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Registry</a></li>
            <li><a href="/Projects" className="text-gray-600 hover:text-gray-900">BACK TO PROJECTS</a></li>
            {/* Add more navigation items */}
          </ul>
        </nav>
        <ShoppingCartDropdown cartItems={cartItems} removeFromCart={removeFromCart} />
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Banner */}
        <div className="bg-blue-500 text-white py-4 px-8 mb-8">
          <h2 className="text-3xl font-semibold">SALE ALERT!</h2>
          <p>Up to 80% off on select items. Limited time offer.</p>
        </div>

        {/* Featured Categories */}
              <section className="flex flex-wrap justify-center items-center text-center mb-28 space-y-10 md:space-y-0 md:space-x-10">
  <div className="w-full md:w-auto bg-white shadow-md p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Men</h3>
    <a href="/MensClothes">
      <img src="./images/CLOTHESMAN.jpg" alt="Men" className="w-full md:w-60 h-96 hover:scale-110 transition duration-500 object-cover mb-4" />
    </a>
  </div>
  <div className="w-full md:w-auto bg-white shadow-md p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Women</h3>
    <a href="/WomensClothes">
      <img src="./images/CLOTHESWOMAN.jpg" alt="Women" className="w-full md:w-60 h-96 hover:scale-110 transition duration-500 object-cover mb-4" />
    </a>
  </div>
  <div className="w-full md:w-auto bg-white shadow-md p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Kids</h3>
    <a href="/KidsClothes">
      <img src="./images/CLOTHESKIDS.jpg" alt="Kids" className="w-full md:w-60 h-96 hover:scale-110 transition duration-500 object-cover mb-4" />
    </a>
  </div>
  <div className="w-full md:w-auto bg-white shadow-md p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Babies</h3>
    <a href="/BabyClothes">
      <img src="./images/ClothesBaby.jpg" alt="Babies" className="w-full md:w-60 h-96 hover:scale-110 transition duration-500 object-cover mb-4" />
    </a>
  </div>
</section>

        {/* Featured Products */}
        <section id="Deals" className="space-y-8">
        <p className='text-7xl text-center'>Summer Deals! Up to <span className="text-green-500 text-8xl">80% off!</span> </p>

  
  
  <div ref={divRef}  className="flex flex-nowrap gap-8 overflow-x-auto">


  {productsData.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}

    

 
</div>





</section>

      </main>

      {/* Coupons Section */}
      <section id="coupons-section" className="my-8 mt-28 text-center items-center content-center justify-center">
        <h2 className="text-5xl font-bold text-green-600 mb-6 font-serif">Printable Coupons</h2>
        <div className="flex">
          {/* Coupon Images */}
          <div className="bg-white  rounded-lg p-4">
            <img src="./images/COUPONS 1.jpg" alt="Coupon 1" className="w-full h-auto hover:scale-110" />
          </div>
          <div className="bg-white  rounded-lg p-4">
            <img src="./images/COUPONS 2.jpg" alt="Coupon 2" className="w-full h-auto hover:scale-110" />
          </div>
          <div className="bg-white  rounded-lg p-4">
            <img src="./images/COUPONS 3.jpg" alt="Coupon 3" className="w-full h-auto hover:scale-110" />
          </div>
          {/* Add more coupon images as needed */}
        </div>
      </section>

       {/* Gift Cards Section */}
       <section id="gift-cards-section" className="my-8 mt-20 text-center items-center content-center justify-center">
        <h2 className="text-5xl font-bold text-blue-600 mb-6 font-serif">Gift Cards</h2>
        <div className="flex justify-center">
          {/* Gift Card Images */}
          <div className="  p-4">
          <a href="your_destination_url">
            <img src="./images/gift cards 1.png" alt="Gift Card 1" className="w-full h-auto hover:scale-110" />
            </a>
          </div>
          <div className="bg-white  rounded-lg p-4">
          <a href="your_destination_url">
            <img src="./images/gift cardss 2.png" alt="Gift Card 2" className="w-full h-auto hover:scale-110" />
            </a>
          </div>
          <div className="bg-white  rounded-lg p-4">
          <a href="your_destination_url">
            <img src="./images/gift cardss 3.png" alt="Gift Card 3" className="w-full h-auto hover:scale-110" />
            </a>
          </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Footer Sections */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Customer Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Returns</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping Information</a></li>
              <li><a href="#" className="hover:text-gray-300">Track Order</a></li>
              <li><a href="#" className="hover:text-gray-300">International Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Sign In</a></li>
              <li><a href="#" className="hover:text-gray-300">Order Status</a></li>
              <li><a href="#" className="hover:text-gray-300">My Profile</a></li>
              <li><a href="#" className="hover:text-gray-300">Rewards</a></li>
              <li><a href="#" className="hover:text-gray-300">ClothesLand Rewards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Women</a></li>
              <li><a href="#" className="hover:text-gray-300">Men</a></li>
              <li><a href="#" className="hover:text-gray-300">Kids</a></li>
              <li><a href="#" className="hover:text-gray-300">Baby</a></li>
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
            </ul>
          </div>
          <div>
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
    </div>
  );
};

export default ClothingHome;

