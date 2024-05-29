import React, { useState } from 'react'


const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button className='pr-14 flex flex-row' onClick={toggleDropDown}><img className='size-4 justify-center items-center pt-5' src=".\images\icons8-menu-50.png" alt="" /><img className='size-8  items-center justify-center' src=".\images\icons8-test-account-32.png" alt="" /></button>
        {isOpen && (
          <div className="flex flex-col absolute bg-white text-black space-y-4  w-44 right-0 mr-4 ">
            <a href="">Sign up</a>
            <a href="">Log in</a>
            <a href="">Help</a>
          </div>
        )}
      </div>
    );
  };
  

export default DropDown