import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem as NavItemType } from '../../types/propTypes';
import './navItem.css';

interface Props {
  item: NavItemType;
}

const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <li className='main-nav-item'>
      <Link
        className='main-nav-item__link'
        to={item.link}
        onClick={item.onClick}
      >
        {item.text}
      </Link>
    </li>
  );
};

export default NavItem;
