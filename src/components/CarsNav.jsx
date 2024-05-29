import React from 'react'
import CarsDropdown from './CarsDropdown'

function CarsNav() {
  return (
    <nav className=" justify-end ">
    <div className="flex space-x-5 ">
      <a  className=' text-white hover:text-blue-700' href="/"> Back To Porfolio </a>
      <a className=' hover:text-blue-700' href="/About">  </a>
      <a className=' hover:text-blue-700' href="/Projects">  </a>
    


  <CarsDropdown/>

  

     

    


    </div>
  </nav>
  )
}

export default CarsNav