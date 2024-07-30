import React from 'react'
import CarsDropdown from './CarsDropdown'

function CarsNav() {
  return (
    <nav className=" md:justify-end ">
    <div className="justify-end space-x-5 ">
      <a  className=' text-white hover:text-blue-700' href="/Projects"> BACK TO PROJECTS </a>
      <a className=' hover:text-blue-700' href="/About">  </a>
      <a className=' hover:text-blue-700' href="/Projects">  </a>
    


  <CarsDropdown/>

  

     

    


    </div>
  </nav>
  )
}

export default CarsNav
