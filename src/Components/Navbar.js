import React from 'react'

function Navbar({onSearch}) {
  return (
    <nav className='navbar'>
        <h1 className='navbar__brand'>Personal Notes App</h1>
        <div className='search-group'>
            <label><i className='bx bx-search-alt' ></i></label>
            <input type="text" name='search-notes' className="navbar__search" onChange={onSearch} placeholder='Search notes...' />
        </div>
    </nav>
  )
}

export default Navbar