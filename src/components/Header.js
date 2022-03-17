import React from 'react';

const Header = ({showAdd, setShowAdd}) => {
  return (
    <div className='header'>
        <h1>Task Tracker</h1>
        <button onClick={() => setShowAdd(!showAdd)} className={`btn ${showAdd ? 'btn-red' : 'btn-blue'}`} >{showAdd ? 'Close' : 'Add'}</button>
    </div>
  )
}

export default Header;