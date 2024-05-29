import React from "react";

export const Buttons = () => {

    return (
      <body>
        
     
       
      <div className="flex justify-center space-x-80 h-40  items-center  text-4xl">
   <a className= "border-2 p-10 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold" href="/Houses">RHouses</a>
   
   <a className= "border-2 p-10 shadow-lg bg-red-700 hover:bg-lime-600 text-white font-bold"   href="/Cars2">UCars</a>
   <a href="/HomePage">HomePage</a>
   </div>

   <div className="flex justify-center  space-x-32 items-center text-4xl">
    <p className="text-xl h-auto w-96 ">RHouses is a website that displays my ability to organize divs into rows and my ability to use css/tailwind to place text and sub images
     in the correct places, aswell as creating a dynamic sub-header that breaks off and tracks while scrolling.</p>
    <p className="text-xl h-auto w-96 ">UCars is a mock car rental website main page. This website showcases my ability to display and filter data files onto a webpage, as well as create individualized description button
       activations regardless of the fact that all the buttons activate together because its being displayed as 1 data file. </p>
   </div>

   <div>


   </div>
        
   </body>


    )

};