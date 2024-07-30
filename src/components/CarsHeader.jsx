import React from 'react';
import CarsNav from './CarsNav';

function CarsHeader() {
  return (
    <header className="z-30 sticky top-0 mx-auto flex w-full max-w-7xl bg-gray-800 flex-wrap items-center justify-between border-b border-gray-100 bg-background p-4 font-sans font-bold uppercase text-text-primary dark:border-gray-800 dark:text-d-text-primary">
      <div className="flex items-center space-x-4">
        <a href='./Houses'>
          <img className="p-0 w-14 h-14 bg-white border-violet-600 border-2" src="./images/pngtree-wash-car-logo-design-png-image_5820924.png" alt="Car Logo" />
        </a>
        <h1 className="font-serif text-white text-4xl">RCars</h1>
      </div>
      
      <div className="hidden md:block">
        <h1 className="text-2xl text-white">Call to rent 954-305-0786</h1>
      </div>
      
      <CarsNav />

      <div className="block md:hidden mt-4 w-full text-center">
        <h1 className="text-xl text-white">Call to rent 954-305-0786</h1>
      </div>
    </header>
  );
}

export default CarsHeader;
