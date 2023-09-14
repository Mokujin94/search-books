import React from 'react'
import './search.scss';

function Search() {
  return (
    <div className='search'>
        <input className='search__input' type="text" placeholder='Search books...'/>
    </div>
  )
}

export default Search