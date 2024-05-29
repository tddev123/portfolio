import React from 'react'
import Data from './Data'
import CarsHomePage from './carsHomePage'

function FilterButtons({menuItems, filterItems, setItems}) {
  return (
    <div className='flex justify-center'>
        {

            menuItems.map(val => (
                <button className='p-1 px-2 mx-5 font-bold' onClick={() => filterItems(val)}>
                    
                    {val}
                    </button>
                    
            )
            )
        }
         <button className='p-1 px-2 mx-5 font-bold' onClick={() => setItems(Data)}>
                    All
                    </button>


    </div>
  )
};

export default FilterButtons