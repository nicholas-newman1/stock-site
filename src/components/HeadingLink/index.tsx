import React from 'react';
import './headingLink.css';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

const HeadingLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link className='heading-link' to={to}>
      {children}
    </Link>
  );
};

export default HeadingLink;
