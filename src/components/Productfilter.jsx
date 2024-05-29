
import React, { useState } from "react";
import Data from "./Data";
import TitleFilter from "./TitleFilter";
import CarsHeader from "./CarsHeader";
import CarsBgVid from "./CarsBgVid";

  

export const CarList = ({ cars, filterTitleCars, filterColorCars }) => {
  // Merge the two filtered car arrays to get a combined filter effect
  const combinedFilteredCars = cars.filter((car) =>
    filterTitleCars.includes(car) && filterColorCars.includes(car)
  );

  const [openDescriptionId, setOpenDescriptionId] = useState(null);

  const toggleDescription = (carId) => {
    setOpenDescriptionId(openDescriptionId === carId ? null : carId);
  };

  return (
    <body>
      <div className="container  mx-auto flex flex-wrap justify-center items-center  space-x-14 space-y-8">
        {combinedFilteredCars.map((car) => (
          <div className={`flex flex-col  w-72 h-auto mt-8 ml-14  ${openDescriptionId === car.id ? 'h-full' : 'h-auto'} border-4 border-black p-4`} key={car.id}>
            <img className="rounded-2xl" src={car.img} alt={car.title} />
            <h2 className="text-2xl">{car.title}</h2>
            <p>Color: {car.color}</p>
            <p>Doors: {car.category}</p>
            <p>Price: {car.price}</p>
            <button className="border-2 border-purple-600 p-2  mt-2" onClick={() => toggleDescription(car.id)}>
              {openDescriptionId === car.id ? "Hide Description" : "Show Description"}
            </button>
            {openDescriptionId === car.id && <p className="size-40 text-2xl">{car.desc}</p>}
          </div>
        ))} 
      </div>
    </body>
  );
};


const App = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [titleFilter, setTitleFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("All");

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handleTitleChange = (Title) => {
      setTitleFilter(Title);
    };

    const handleColorChange = (Color) => {
      setColorFilter(Color);
    };

  const filteredCars = categoryFilter === "All" ? Data : Data.filter((car) => car.category === categoryFilter);
  const filterTitleCars = titleFilter === "All" ? Data : Data.filter((car) => car.title === titleFilter);
  const filterColorCars = colorFilter === "All" ? Data : Data.filter((car) => car.color === colorFilter);

  return (
    <body>
    
      <CarsBgVid/>
   
    <CarsHeader/>
    <div className="">
      <h1></h1>

      <div className=" text-4xl font-medium text-center flex justify-center pt-40 pb-40">Choose what kind of car or truck you would like to rent.</div>
      <div className="flex justify-center  top-0 space-x-10 ">
        <p className="font-bold">Brand</p>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${titleFilter === "All" ? "bg-red-500" : ""}`} onClick={() => handleTitleChange("All")}>All</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${titleFilter === "Honda" ? "bg-red-500" : ""}`} onClick={() => handleTitleChange("Honda")}>Honda</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${titleFilter === "Chevy" ? "bg-red-500" : ""}`} onClick={() => handleTitleChange("Chevy")}>Chevy</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${titleFilter === "Ford" ? "bg-red-500" : ""}`} onClick={() => handleTitleChange("Ford")}>Ford</button>
</div>
<div className="flex justify-center pt-7 top-0 space-x-10 ">
  <p className="font-bold">Color</p>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${colorFilter === "All" ? "bg-red-500" : ""}`} onClick={() => handleColorChange("All")}>All</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${colorFilter === "Black" ? "bg-red-500" : ""}`} onClick={() => handleColorChange("Black")}>Black</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${colorFilter === "Blue" ? "bg-red-500" : ""}`} onClick={() => handleColorChange("Blue")}>Blue</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${colorFilter === "Red" ? "bg-red-500" : ""}`} onClick={() => handleColorChange("Red")}>Red</button>
</div>
      <div className="flex justify-center pt-7 top-0 space-x-10 ">
        <p className="font-bold" >Doors</p>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${categoryFilter === "All" ? "bg-red-500" : ""}`} onClick={() => handleCategoryChange("All")}>All</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${categoryFilter === "4 door" ? "bg-red-500" : ""}`} onClick={() => handleCategoryChange("4 door")}>4 Door</button>
    <button className={`border-2 border-sky-800 pl-6 pr-6 pt-1 pb-1 ${categoryFilter === "2 door" ? "bg-red-500" : ""}`} onClick={() => handleCategoryChange("2 door")}>2 Door</button>
    
</div>

      <div className="flex justify-center pt-16">
      <CarList cars={filteredCars} filterTitleCars={filterTitleCars} filterColorCars={filterColorCars} /></div>
    </div>
    </body>
  );
};



export default App;


