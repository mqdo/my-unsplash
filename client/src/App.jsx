import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header, Feed, AddNewForm, DeleteForm } from './components'

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [id, setId] = useState('');
  const [addNew, setAddNew] = useState(false);

  const handleClosePopup = (e) => {
    if (e.target.dataset.type === 'new' || e.target.dataset.type === 'delete') return;
    setAddNew(false);
    setId('');
  }

  const getPhotos = async () => {
    const url = query === '' ? '/all' : `?label=${query}`;
    const endpoint = import.meta.env.VITE_API_URL + 'photo' + url;
    let result = await axios.get(endpoint);
    setPhotos(result.data);
    setAddNew(false);
    setId('');
    setQuery('');
  }

  useEffect(() => {
    getPhotos();
  }, [])

  return (
    <div className=' bg-gray-50 text-gray-900 relative'>
      <div onClick={handleClosePopup} className={addNew || id !== '' ? 'bg-gray-300 bg-opacity-20' : ''}>
        <Header setAddNew={setAddNew} query={query} setQuery={setQuery} getPhotos={getPhotos} />
        <main>
          <Feed photos={photos} setId={setId} />
        </main>
      </div>
      <div className={`${!addNew && id === '' ? 'hidden' : 'block'} w-full p-4 fixed top-[20%] left-[50%] -translate-x-[50%]`}>
        {addNew ?
          <AddNewForm setAddNew={setAddNew} getPhotos={getPhotos} /> :
          null
        }
        {id !== '' ?
          <DeleteForm id={id} setId={setId} getPhotos={getPhotos} /> :
          null
        }
      </div>
    </div>
  )
}

export default App