import React from 'react';

import { BsSearch } from 'react-icons/bs'
import logo from '../assets/my_unsplash_logo.svg';

const Header = ({ setAddNew, query, setQuery, getPhotos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotos();
  }

  return (
    <header className='w-full h-16 bg-gray-50 md:h-20 fixed px-4 xl:p-0 grid place-items-center z-20'>
      <div className='w-full xl:w-[1200px] mx-auto flex justify-between'>
        <div className='flex'>
          <img src={logo} alt="logo" onClick={getPhotos} />
          <form onSubmit={handleSubmit} className='max-w-[150px] md:max-w-[300px] h-10 p-2 border-2 border-gray-200 rounded-lg flex items-center'>
            <button type='submit' className='px-2'>
              <BsSearch fill='rgb(156 163 175)' />
            </button>
            <input
              type='text'
              className='px-2 bg-inherit text-sm outline-none placeholder-gray-400 truncate'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search by name'
            />
          </form>
        </div>
        <button className='hidden md:block px-4 bg-green-500 text-white font-bold text-sm rounded-lg' data-type='new' onClick={() => setAddNew(true)}>Add A Photo</button>
        <button className='grid md:hidden px-4 bg-green-500 text-white text-2xl rounded-lg place-items-center' data-type='new' onClick={() => setAddNew(true)}>+</button>
      </div>
    </header>
  )
}

export default Header