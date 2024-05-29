import React from "react";

export const Buttons = () => {

    return (
     <body className="flex flex-col items-center bg-black min-h-screen py-8">
    
        <div className="max-w-lg">
          <div className="border-4 glow1 border-gray-400 rounded-lg p-4 mb-8 animate-border">
            <a className="block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg text-center" href="/Houses">RHouses</a>
            <p className="text-lg text-center text-white p-4">RHouses is a website that displays my ability to organize divs into rows and my ability to use CSS/Tailwind to place text and sub-images in the correct places, as well as creating a dynamic sub-header that breaks off and tracks while scrolling.</p>
          </div>
          <div className="glow2 border-4 border-gray-400 rounded-lg p-4 mb-8 animate-border">
            <a className="text-center block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg" href="/Cars2">UCars</a>
            <p className="text-lg text-center text text-white p-4">UCars is a mock car rental website main page. This website showcases my ability to display and filter data files onto a webpage, as well as create individualized description button activations regardless of the fact that all the buttons activate together because it's being displayed as 1 data file.</p>
          </div>
          <div className="glow3 border-4 border-gray-400  rounded-lg p-4 animate-border">
            <a className="text-center block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg" href="https://stellar-cascaron-b8b10c.netlify.app/">CryptoShop</a>
            <p className="text-lg text text-white text-center p-4">CryptoShop is a mock cryptocurrency trading website equipped with a crypto API connection, a search filter, and a payment card fill out page.</p>
          </div>
        </div>
      </body>



    )

};
