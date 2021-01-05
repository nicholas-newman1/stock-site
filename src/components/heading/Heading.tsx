import React from 'react';
import './heading.css';

interface Props {
  text: string;
}

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h1 className='page-heading'>{text}</h1>
    </div>
  );
};

export default Heading;
