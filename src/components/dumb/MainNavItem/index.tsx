import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDisplayMobileNav } from '../../../actions/displayMobileNavActions';
import './mainNavItem.css';

interface Props {
  item: string;
}

const MainNavItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className='main-nav-item'>
      <Link
        className='main-nav-item__link'
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        onClick={() => dispatch(setDisplayMobileNav(false))}
      >
        {item}
      </Link>
    </li>
  );
};

export default MainNavItem;
