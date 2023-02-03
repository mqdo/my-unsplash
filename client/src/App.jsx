import React, { useState } from 'react'

import { Header, Feed, AddNewForm, DeleteForm } from './components'

const App = () => {
  const [addNew, setAddNew] = useState(false);
  const [deletePhoto, setDeletePhoto] = useState(true);

  const handleClosePopup = (e) => {
    if (e.target.dataset.type === 'new' || e.target.dataset.type === 'delete') return;
    setAddNew(false);
    setDeletePhoto(false);
  }

  return (
    <div className=' bg-gray-50 text-gray-900 relative'>
      <div onClick={handleClosePopup} className={addNew || deletePhoto ? 'bg-gray-300 bg-opacity-20' : ''}>
        <Header setAddNew={setAddNew} />
        <main>
          <Feed />
        </main>
      </div>
      <div className='w-full p-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        {addNew ?
          <AddNewForm setAddNew={setAddNew} /> :
          null
        }
        {deletePhoto ?
          <DeleteForm setDeletePhoto={setDeletePhoto} /> :
          null
        }
      </div>
    </div>
  )
}

export default App