import React, { useState } from 'react';
import { SearchStyle } from './HeaderStyle';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchStyle>
      <input
        type="search"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <IoSearch />
      </button>
    </SearchStyle>
  );
};

export default SearchBar;
