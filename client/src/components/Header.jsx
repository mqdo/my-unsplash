import React from 'react';

import { BsSearch } from 'react-icons/bs'
import logo from '../assets/my_unsplash_logo.svg';

const Header = ({ setAddNew }) => {
  return (
    <header className='w-full h-16 md:h-20 fixed px-4 xl:p-0 grid place-items-center'>
      <div className='w-full xl:w-[1200px] mx-auto flex justify-between'>
        <div className='flex'>
          <img src={logo} alt="logo" />
          <div className='max-w-[150px] md:max-w-[300px] h-10 p-2 border-2 border-gray-200 rounded-lg flex items-center'>
            <button className='px-2'>
              <BsSearch fill='rgb(156 163 175)' />
            </button>
            <input type='text' className='px-2 bg-inherit text-sm outline-none placeholder-gray-400 truncate' placeholder='Search by name' />
          </div>
        </div>
        <button className='hidden md:block px-4 bg-green-500 text-white font-bold text-sm rounded-lg' data-type='new' onClick={() => setAddNew(true)}>Add A Photo</button>
        <button className='grid md:hidden px-4 bg-green-500 text-white text-2xl rounded-lg place-items-center' data-type='new' onClick={() => setAddNew(true)}>+</button>
      </div>
    </header>
  )
}

export default Header