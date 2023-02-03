import React from 'react'

const AddNewForm = ({ setAddNew }) => {
  return (
    <div className='w-full md:w-[620px] bg-white mx-auto p-8 rounded-lg flex flex-col gap-8 text-sm'>
      <h2 className=' text-2xl font-bold'>Add a new photo</h2>
      <div className='flex flex-col gap-4'>
        <label htmlFor='label' className='font-medium'>Label</label>
        <input type="text" name="label" id="label" placeholder="Label of the new photo" className='border-2 border-gray-500 p-2 md:p-4 rounded-lg' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='label' className='font-medium'>Photo URL</label>
        <input type="text" name="photoUrl" id="photoUrl" placeholder="URL of the new photo" className='border-2 border-gray-500 p-2 md:p-4 rounded-lg' />
      </div>
      <div className='flex justify-end text-base'>
        <button className='py-2 px-4 text-gray-400 font-medium rounded-lg' onClick={() => setAddNew(false)}>Cancel</button>
        <button className='py-2 px-4 bg-green-500 text-white font-bold rounded-lg' onClick={() => setAddNew(false)}>Submit</button>
      </div>
    </div>
  )
}

export default AddNewForm