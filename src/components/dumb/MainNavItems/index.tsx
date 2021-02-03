import React from 'react';
import { NavItem } from '../../../types/propTypes';

interface Props {
  render: (NavItems: NavItem[]) => JSX.Element;
  hideNav?: () => void;
}

const MainNavItems: React.FC<Props> = ({ render, hideNav = () => {} }) => {
  const NavItems = [
    { text: 'Home', link: '/', onClick: hideNav },
    { text: 'Indexes', link: '/indexes', onClick: hideNav },
    { text: 'Stocks', link: '/stocks', onClick: hideNav },
    { text: 'Forex', link: '/forex', onClick: hideNav },
    { text: 'Cryptocurrencies', link: '/cryptocurrencies', onClick: hideNav },
    { text: 'Commodities', link: 'commodities', onClick: hideNav },
  ];

  return render(NavItems);
};

export default MainNavItems;
