import React from 'react';
import SearchResultItem from './SearchResultItem';
import './searchResults.css';

interface Props {
  searchResults: SearchResult[];
  watchlist: string[];
  addToWatchlist: (symbol: string) => void;
  removeFromWatchlist: (symbol: string) => void;
}

const SearchResults: React.FC<Props> = ({
  searchResults,
  watchlist,
  addToWatchlist,
  removeFromWatchlist,
}) => {
  return (
    <ul className='search-results'>
      {searchResults.map((result: SearchResult, i: number) => {
        return (
          <SearchResultItem
            result={result}
            key={result.symbol}
            isInWatchlist={watchlist.includes(result.symbol)}
            addToWatchlist={() => addToWatchlist(result.symbol)}
            removeFromWatchlist={() => removeFromWatchlist(result.symbol)}
          />
        );
      })}
    </ul>
  );
};

export default SearchResults;
