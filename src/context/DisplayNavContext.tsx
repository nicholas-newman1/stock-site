import React, { createContext, useState } from 'react';

interface DisplayNavContextInterface {
  displayNav: boolean;
  setDisplayNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DisplayNavContext = createContext<DisplayNavContextInterface>(
  {} as DisplayNavContextInterface
);

export const DisplayNavProvider: React.FC = (props) => {
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
