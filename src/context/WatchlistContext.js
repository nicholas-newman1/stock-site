import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const WatchlistContext = createContext();

export const WatchlistProvider = (props) => {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', []);

  // if symbol is in watchlist, remove it. If it isn't, add it.
  const updateWatchlist = (symbol) => {
    if (watchlist.includes(symbol)) {
      const index = watchlist.findIndex((item) => item === symbol);
      setWatchlist((prevWatchlist) => {
        const newWatchlist = [...prevWatchlist];
        newWatchlist.splice(index, 1);
        return newWatchlist;
      });
    } else {
      setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
    }
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        updateWatchlist,
      }}
    >
      {props.children}
    </WatchlistContext.Provider>
  );
};
