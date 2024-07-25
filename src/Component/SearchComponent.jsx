
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import data from './data'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';



const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className='row p-2'>
               
               <div className="col ">
               <div className="input-group">
              <input type="text" className="form-control" placeholder="Search here" 
              alue={searchTerm}
              onChange={handleSearch}/>
              <div className="input-group-append">
                <Button variant="danger">
                  <FontAwesomeIcon icon={faSearch} className="text-light" />
                 
                </Button>
              </div>
            </div>
            </div>
         </div>
    
   
    </div>
  );
};

export default SearchComponent;
