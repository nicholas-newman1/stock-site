import React from 'react';
import './heading.css';

const Heading = ({ text }) => {
  return (
    <div>
      <h1 className='page-heading'>{text}</h1>
    </div>
  );
};

export default Heading;
