import React from 'react'
import CarsNav from './CarsNav'


function CarsHeader() {
  return (
    <header className=" z-30  sticky top-0  mx-auto  flex w-full max-w-7xl bg-red-500  flex-wrap items-center justify-between border-b border-gray-100 bg-background p-4 font-sans font-bold uppercase text-text-primary dark:border-gray-800  dark:text-d-text-primary">
      <div className='flex row-auto'><a href='./Houses'><img className='p-0 size-14 bg-white border-violet-600 border-2 m-0' src=".\images\pngtree-wash-car-logo-design-png-image_5820924.png" alt=""  /></a>  <h1 className=' font-serif text-white text-4xl pt-2 pl-6'>UCars</h1> </div> 
      <form className='pl-48'> <h1 className='pr-28 text-2xl text-white'>Call to rent 954-305-0786</h1>
        
        
        </form>

        
       

      <CarsNav/>
      
    </header>
  )
}

export default CarsHeader