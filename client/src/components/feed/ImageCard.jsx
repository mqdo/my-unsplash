import React from 'react';

const ImageCard = ({ id, setId, label, url }) => {
  const handleSetId = () => {
    setId(id);
  }

  return (
    <div className='relative rounded-lg'>
      <div className='opacity-0 hover:opacity-100 bg-gray-600 bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>
        <div className='absolute top-4 right-4 border-2  border-red-600 text-red-600 text-sm rounded-full hover:bg-red-600 hover:text-white'>
          <button className=' px-2' data-type='delete' onClick={handleSetId}>delete</button>
        </div>
        <p className='absolute bottom-2 left-4 right-4 text-white text-lg font-bold drop-shadow-lg truncate'>{label}</p>
      </div>
      <img src={url} alt={label} className=' object-cover rounded-lg' />
    </div>
  )
}

export default ImageCard