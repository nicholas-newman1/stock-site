import React, { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = (props) => {
  const [text, setText] = useState('');
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        text,
        setText,
        displayMobileMenu,
        setDisplayMobileMenu,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};
