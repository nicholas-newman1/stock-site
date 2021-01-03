import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface WatchlistContextInterface {
  watchlist: string[];
  updateWatchlist: (symbol: string) => void;
}

export const WatchlistContext = createContext<WatchlistContextInterface>(
  {} as WatchlistContextInterface
);

export const WatchlistProvider: React.FC = (props) => {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', []);

  // if symbol is in watchlist, remove it. If it isn't, add it.
  const updateWatchlist = (symbol: string) => {
    if (watchlist.includes(symbol)) {
      const index = watchlist.findIndex((item: string) => item === symbol);
      setWatchlist((prevWatchlist: string[]) => {
        const newWatchlist = [...prevWatchlist];
        newWatchlist.splice(index, 1);
        return newWatchlist;
      });
    } else {
      setWatchlist((prevWatchlist: string[]) => [...prevWatchlist, symbol]);
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
