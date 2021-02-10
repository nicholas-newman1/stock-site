import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromWatchlist,
  addToWatchlist,
} from '../../actions/watchlistActions';
import QuoteWatchlistBtn from '../../components/dumb/QuoteWatchlistBtn';
import { AppState } from '../../reducers/rootReducer';

interface Props {
  symbol: string;
}

const QuoteWatchlistBtnContainer: React.FC<Props> = ({ symbol }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: AppState) => state.watchlist);
  const isInWatchlist = watchlist.includes(symbol);

  return (
    <QuoteWatchlistBtn
      onClick={() =>
        isInWatchlist
          ? dispatch(removeFromWatchlist(symbol))
          : dispatch(addToWatchlist(symbol))
      }
    >
      {isInWatchlist ? 'Remove From Watchlist' : 'Add to Watchlist'}
    </QuoteWatchlistBtn>
  );
};

export default QuoteWatchlistBtnContainer;
