import React from "react";
import Footer from "./footer";
import Headerr from "./Header";

export const Buttons = () => {

    return (

      <> <Headerr/>
        <body className="flex flex-col items-center pt-12 bg-black min-h-screen py-8">

                <div className="w-full max-w-3xl mb-8">
          <video
            className="w-full h-auto rounded-lg border-4 border-gray-400 shadow-lg"
            controls
          >
            <source src="./public/scheduler video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    
        <div className="max-w-lg mr-6 ml-6">
   
        <div className="border-4 glow1 border-gray-400 rounded-lg p-4 mb-8 animate-border">
            <a className="block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg text-center" href="https://coffeeworld123.netlify.app/">CoffeeWorld</a>
            <p className="text-lg text-center text-white p-4">Coffee World is a website for a mock coffee shop business.</p>
          </div>
        <div className="border-4 glow1 border-gray-400 rounded-lg p-4 mb-8 animate-border">
            <a className="block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg text-center" href="https://neuro-max.netlify.app/">NeuroMax</a>
            <p className="text-lg text-center text-white p-4">NeuroMax is a Artificial Intelligence service company that helps businesses grow. It has all the works of a full scale business website.</p>
          </div>
          <div className="glow3 border-4 border-gray-400  rounded-lg p-4 mb-8 animate-border">
            <a className="text-center block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg" href="/ClothesHome">ClothesLand</a>
            <p className="text-lg text text-white text-center p-4">ClothesLand is a clothing business website equipped with a automatic scrolling bar that stops when you click anywhere on the div, products that can be added to a functioning cart, checkout system, and clickable picture sections that display filtered products. .</p>
          </div>
          <div className="glow3 border-4 border-gray-400  rounded-lg p-4 mb-8 animate-border">
            <a className="text-center block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg" href="/WhoTube">AI Technology</a>
            <p className="text-lg text text-white text-center p-4">AI Technology is a basic AI service homepage equipped with a sidebar, login/signup pages, and a basic layout.</p>
          </div>
          
          <div className="glow3 border-4 border-gray-400  rounded-lg p-4 mb-8 animate-border">
            <a className="text-center block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg" href="https://stellar-cascaron-b8b10c.netlify.app/">CryptoShop</a>
            <p className="text-lg text text-white text-center p-4">CryptoShop is a mock cryptocurrency trading website equipped with a crypto API connection, a search filter, and a payment card fill out page.</p>
          </div>
          <div className="glow2 border-4 border-gray-400 rounded-lg p-4 mb-8 animate-border">
            <a className="text-center block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg" href="/Cars2">UCars</a>
            <p className="text-lg text-center text text-white p-4">UCars is a mock car rental website main page. This website showcases my ability to display and filter data files onto a webpage, as well as create individualized description button activations regardless of the fact that all the buttons activate together because it's being displayed as 1 data file.</p>
          </div>
         
          <div className="border-4 glow1 border-gray-400 rounded-lg p-4 mb-8 animate-border">
            <a className="block p-4 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold text-3xl rounded-t-lg text-center" href="/Houses">RHouses</a>
            <p className="text-lg text-center text-white p-4">RHouses is a website that displays my ability to organize divs into rows and my ability to use CSS/Tailwind to place text and sub-images in the correct places, as well as creating a dynamic sub-header that breaks off and tracks while scrolling.</p>
          </div>
        
          
         


        </div>

        
      </body>

      <Footer/>
      </>
      
      
      
      


    )

};
