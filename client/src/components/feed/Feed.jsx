import React from 'react';
import Masonry from 'react-masonry-css';

import ImageCard from './ImageCard';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Feed = ({ photos, setId }) => {
  if (photos.length === 0) return (
    <div className='min-h-[100vh] pt-40 md:pt-44 w-full xl:w-[1200px] mx-auto px-4 md:p-0 text-center'>
      <h2 className='text-2xl font-bold'>{'Opps! It seems photo list is empty :('}</h2>
    </div>
  )

  return (
    <div className='min-h-[100vh] pt-20 md:pt-24 w-full xl:w-[1200px] mx-auto px-4 md:p-0'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => (
          <ImageCard key={photo._id} id={photo._id} setId={setId} label={photo.label} url={photo.photoUrl} />
        ))}
      </Masonry>
    </div>
  )
}

export default Feed