import React from 'react';
import { NavItem as NavItemType } from '../../../types/propTypes';
import NavItem from './NavItem';
import './nav.css';

interface Props {
  navItems: NavItemType[];
}

const Nav: React.FC<Props> = ({ navItems }) => {
  return (
    <ul className='main-nav'>
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} />
      ))}
    </ul>
  );
};

export default Nav;
