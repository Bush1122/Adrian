import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const MyPaginationComponent = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item  key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination className='text-danger bg-danger'>{items}</Pagination>
      <br />

    </div>
  );

  return paginationBasic;
};

export default MyPaginationComponent;
