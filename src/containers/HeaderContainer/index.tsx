import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/dumb/Header';
import { AppState } from '../../reducers/rootReducer';

const HeaderContainer = () => {
  const realData = useSelector((state: AppState) => state.realData);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <Header
      realData={realData.status}
      mobileNav={mobileNav}
      hideMobileNav={() => setMobileNav(false)}
      toggleMobileNav={() => setMobileNav((prev) => !prev)}
    />
  );
};

export default HeaderContainer;
