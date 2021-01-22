import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DisplayNavContext } from '../../context/DisplayNavContext';
import './mainNavItem.css';

interface Props {
  item: string;
}

const MainNavItem: React.FC<Props> = ({ item }) => {
  const { setDisplayNav } = useContext(DisplayNavContext);

  return (
    <li className='main-nav-item'>
      <Link
        className='main-nav-item__link'
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        onClick={() => setDisplayNav(false)}
      >
        {item}
      </Link>
    </li>
  );
};

export default MainNavItem;
