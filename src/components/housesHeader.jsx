import React from 'react'
import HousesNav from './housesNav'

const HousesHeader = () => {
  return (
    <header className=" z-30  sticky top-0  mx-auto  flex w-full max-w-7xl bg-red-50 flex-wrap items-center justify-between border-b border-gray-100 bg-background p-4 font-sans font-bold uppercase text-text-primary dark:border-gray-800  dark:text-d-text-primary">
      <div className='flex row-auto'><a href='./Houses'><img className='p-0' src="./images/icons8-home-64.png" alt=""  /></a>  <h1 className=''>RHouses</h1> </div> 
      <form className='pl-48'>
        <input className='border-stone-800 text-center border-2 rounded-3xl' type="text" placeholder='Enter a city...' />
        <button className='rounded-3xl m-3 w-10 bg-white border-2 border-neutral-700 ' type='Submit'>Go</button>
        </form>

        
       

      <HousesNav />
      
    </header>
  )
}

export default HousesHeader