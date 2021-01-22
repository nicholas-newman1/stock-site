import React from 'react';
import MainNavItem from '../mainNavItem/MainNavItem';
import './mainNav.css';

interface Props {
  justifyCenter?: boolean;
}

const MainNav: React.FC<Props> = ({ justifyCenter = false }) => {
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
