import React from 'react'
import DropDown from './dropDown'

const HousesNav = () => {
  return (
    <nav className=" justify-end ">
    <div className="flex space-x-5 ">
      <a  className=' hover:text-blue-700' href="/"> Back To Porfolio </a>
      <a className=' hover:text-blue-700' href="/About">  </a>
      <a className=' hover:text-blue-700' href="/Projects">  </a>
    


  <DropDown/>

  

     

    


    </div>
  </nav>
  )
}

export default HousesNav