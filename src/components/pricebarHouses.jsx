import React from 'react'

const PricebarHouses = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex justify-between items-center p-4  rounded-xl w-[600px] h-16'>
            <div className='flex justify-start'>
              <p className='border-r-2 pr-4 text-base font-medium'>Display total price</p>
              <p className='pl-4 text-gray-400 text-base'>Include all fees, before taxes</p>
              
            </div>
            <img className='size-6' src=".\images\icons8-toggle-off-24.png" alt="" /> 

        </div>


    </div>
  )
}

export default PricebarHouses