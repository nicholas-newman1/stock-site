import React from 'react';
import MainNavItem from './MainNavItem';
import './mainNav.css';

const MainNav = ({ justifyCenter }) => {
  const links = [
    'Home',
    'Indexes',
    'Stocks',
    'Forex',
    'Cryptocurrencies',
    'Commodities',
  ];

  return (
    <ul
      className={`main-nav__list ${
        justifyCenter && 'main-nav__list--centered'
      }`}
    >
      {links.map((item, i) => (
        <MainNavItem key={i} item={item} />
      ))}
    </ul>
  );
};

export default MainNav;