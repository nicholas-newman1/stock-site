import React from 'react';
import { Link } from 'react-router-dom';
import './navItem.css';

export interface NavItemType {
  text: string;
  link: string;
}

interface Props {
  item: NavItemType;
  hideNav?: () => void;
}

const NavItem: React.FC<Props> = ({ item, hideNav = () => {} }) => {
  return (
    <li className='main-nav-item'>
      <Link className='main-nav-item__link' to={item.link} onClick={hideNav}>
        {item.text}
      </Link>
    </li>
  );
};

export default NavItem;
