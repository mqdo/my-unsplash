import React from 'react'

const DeleteForm = ({ setDeletePhoto }) => {
  return (
    <div className='w-full md:w-[620px] bg-white mx-auto p-8 rounded-lg flex flex-col gap-8 text-sm'>
      <h2 className=' text-2xl font-bold'>Are you sure?</h2>
      <div className='flex flex-col gap-4'>
        <label htmlFor='label' className='font-medium'>Password</label>
        <input type="password" name="label" id="label" placeholder="Your password" className='border-2 border-gray-500 p-2 md:p-4 rounded-lg' />
      </div>
      <div className='flex justify-end text-base'>
        <button className='py-2 px-4 text-gray-400 font-medium rounded-lg' onClick={() => setDeletePhoto(false)}>Cancel</button>
        <button className='py-2 px-4 bg-red-500 text-white font-bold rounded-lg' onClick={() => setDeletePhoto(false)}>Delete</button>
      </div>
    </div>
  )
}

export default DeleteForm