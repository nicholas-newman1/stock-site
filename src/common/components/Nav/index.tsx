import React from 'react';
import NavItem from './NavItem';
import { NavItemType } from './NavItem';
import './nav.css';

interface Props {
  navItems: NavItemType[];
  hideNav?: () => void;
}

const Nav: React.FC<Props> = ({ navItems, hideNav }) => {
  return (
    <ul className='main-nav'>
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} hideNav={hideNav} />
      ))}
    </ul>
  );
};

export default Nav;
