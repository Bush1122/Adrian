// SearchContext.js
import React, { createContext, useState, useContext } from 'react';
import data from './data'; // Import your data

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredData, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
