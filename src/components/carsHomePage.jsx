import { useState } from "react"
import React from 'react'
import Data from "./Data"
import Card from "./card"
import FilterButtons from "./FilterButtons"


const CarsHomePage = () => {
    const [item, setItems] = useState(Data)
    const menuItems = [...new Set(Data.map((val) => val.category))]
    const filterItems = (cat) => {
        const newItems = Data.filter((newval) = newval.category === cat)
        setItems(newItems)
    }

  return (
    <div className="container">
        <div className="row">
            <h1 className=" text-center col-12 justify-center font-bold mt-3 mb-5 ">car filter</h1>
            <FilterButtons
            menuItems = {menuItems}
            filterItems = {filterItems}
            setItems = {setItems}
            />
            <Card item={item}/>


        </div>


    </div>
    
  )
}

export default CarsHomePage