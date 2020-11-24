import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DisplayNavContext } from '../../../context/DisplayNavContext';

const MainNavItem = ({ item }) => {
  const { setDisplayNav } = useContext(DisplayNavContext);

  return (
    <li className='main-nav__item'>
      <Link
        className='main-nav__link'
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        onClick={() => setDisplayNav(false)}
      >
        {item}
      </Link>
    </li>
  );
};

export default MainNavItem;
