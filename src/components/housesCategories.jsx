import React from 'react'

const HousesCategories = () => {
  return (

    <div className=' sticky top-24 flex items-center justify-center w-1/2 mx-auto rounded-3xl h-20 space-x-5 gap-2 pl-16 bg-slate-50 '>
        <div className='flex items-center justify-center space-x-10'>
            <div className='flex flex-col items-center text-gray-400 hover:text-black'>
                <img className='h-6 w-6' src="./images/icons8-mansion-50.png" alt="" />
                <p className='text-xs font-normal'>Mansion</p>
            </div>
            <div className='flex flex-col  items-center text-gray-400 hover:text-black'>
                <img className='h-6 w-6' src=".\images\icons8-home-50.png" alt="" />
                <p className='text-xs font-normal'>Middle Class</p>
            </div>
            <div className='flex flex-col items-center text-gray-400 hover:text-black'>
                <img className='h-6 w-6' src=".\images\icons8-home-50 (1).png" alt="" />
                <p className='text-xs font-normal'>Studio</p>
            </div>
            <div className='flex flex-col items-center text-gray-400 hover:text-black'>
                <img className='h-6 w-6' src=".\images\icons8-apartment-50.png" alt="" />
                <p className='text-xs font-normal'>Apartment</p>
            </div>
        </div>


     
        <div className='flex justify-around items-center rounded-xl shadow-md  h-12 w-24 border border-black'>
          
        <img className='pl-2' src=".\images\sync_alt_FILL0_wght400_GRAD0_opsz24.png" alt="" />
        <p className='text-xs font-medium pr-2'>Filters</p>


        </div>

    </div>
  )
}

export default HousesCategories