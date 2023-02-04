import React, { useRef } from 'react';
import axios from 'axios';

const DeleteForm = ({ id, setId, getPhotos }) => {
  const inputRef = useRef();

  const handleDeletePhoto = async () => {
    if (inputRef.current.value === '') return;
    const url = import.meta.env.VITE_API_URL + 'photo/' + id;
    try {
      await axios.delete(url);
      setId('');
      getPhotos();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='w-full md:w-[620px] bg-white mx-auto p-8 rounded-lg flex flex-col gap-8 text-sm'>
      <h2 className=' text-2xl font-bold'>Are you sure?</h2>
      <div className='flex flex-col gap-4'>
        <label htmlFor='label' className='font-medium'>Password</label>
        <input
          type="password"
          name="label"
          id="label"
          placeholder="Your password"
          ref={inputRef}
          className='border-2 border-gray-500 p-2 md:p-4 rounded-lg' />
      </div>
      <div className='flex justify-end text-base'>
        <button className='py-2 px-4 text-gray-400 font-medium rounded-lg' onClick={() => setId('')}>Cancel</button>
        <button className='py-2 px-4 bg-red-500 text-white font-bold rounded-lg' data-type='delete' onClick={handleDeletePhoto}>Delete</button>
      </div>
    </div>
  )
}

export default DeleteForm