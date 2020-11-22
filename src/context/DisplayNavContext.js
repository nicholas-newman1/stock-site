import React, { createContext, useState } from 'react';

export const DisplayNavContext = createContext();

export const DisplayNavProvider = (props) => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <DisplayNavContext.Provider
      value={{
        displayNav,
        setDisplayNav,
      }}
    >
      {props.children}
    </DisplayNavContext.Provider>
  );
};
