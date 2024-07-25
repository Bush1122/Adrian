import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, max }) => {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    if (i <= value) {
      stars.push(<FaStar key={i} color="gold" />);
    } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      stars.push(<FaRegStar key={i} color="gold" />);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
