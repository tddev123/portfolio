import React, { useState } from "react";
import Data from "./Data";



const TitleFilter = () => {
  const [TitleFilter, setTitleFilter] = useState("All");

  const handleTitleChange = (Title) => {
    setTitleFilter(Title);
  };



  return (
    <div className="">
      <h1>Car Catalog</h1>
      <div className="flex justify-center top-0 ">
        <button onClick={() => handleTitleChange("All")}>All</button>
        <button onClick={() => handleTitleChange("kia")}>kia</button>
        <button onClick={() => handleTitleChange("ram")}>ram</button>
        <button onClick={() => handleTitleChange("ford")}>ford</button>
      </div>
      
    </div>
  );
};

export default TitleFilter;
