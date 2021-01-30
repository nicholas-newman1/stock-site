import React from 'react';
import MainNavItem from '../MainNavItem';
import './mainNav.css';

interface Props {
  links: string[];
}

const MainNav: React.FC<Props> = ({ links }) => {
  return (
    <ul className='main-nav'>
      {links.map((item, i) => (
        <MainNavItem key={i} item={item} />
      ))}
    </ul>
  );
};

export default MainNav;
