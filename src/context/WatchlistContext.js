import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const WatchlistContext = createContext();

export const WatchlistProvider = (props) => {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', []);

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        setWatchlist,
      }}
    >
      {props.children}
    </WatchlistContext.Provider>
  );
};
