import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); 
  };

  return (
      <input
        type='text'
        className='SearchBox'
        placeholder='Search For Books'
        value={searchTerm}
        onChange={handleChange}
      />
  );
}

export default SearchBox;
