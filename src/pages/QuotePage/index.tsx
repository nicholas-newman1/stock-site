import React, { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import { QuoteContext } from '../../context/QuoteContext';
import { Helmet } from 'react-helmet-async';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import QuoteDetails from '../../components/Quote';
import QuoteSummary from '../../components/QuoteSummary';
import QuoteNav from '../../components/QuoteNav';
import BottomNews from '../../components/BottomNews';
import useScrollTop from '../../hooks/useScrollTop';
import QuoteChartContainer from '../../containers/QuoteChartContainer';
import QuoteFinancialsContainer from '../../containers/QuoteFinancialsContainer';
import QuoteProfileContainer from '../../containers/QuoteProfileContainer';
import { Quote } from '../../types/APITypes';
import QuoteValuationContainer from '../../containers/QuoteValuationContainer';
import QuoteWatchlistBtnContainer from '../../containers/QuoteWatchlistBtnContainer';
import './quotePage.css';

interface MatchProps {
  symbol: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const QuotePage: React.FC<Props> = ({ match }) => {
  useScrollTop(); // scrolls to top of page on component mount

  const symbol: string = match.params.symbol;
  const [tab, setTab] = useState('Summary');
  const {
    fetchQuote,
    isStock,
    isQuoteFetched,
    setIsQuoteFetched,
    quote,
  } = useContext(QuoteContext);

  const dispatch = useDispatch();

  const { data: newsData, loading: loadingNews } = useSelector(
    (state: AppState) => state.news
  );

  useEffect(() => {
    isQuoteFetched &&
      dispatch(
        fetchNews(
          isStock
            ? `tickers=${symbol}&limit=10`
            : 'limit=10&tickers=AAPL,FB,AMZN,TSLA'
        )
      );
    //eslint-disable-next-line
  }, [isQuoteFetched]);

  useEffect(() => {
    fetchQuote(symbol);

    return () => {
      setIsQuoteFetched(false);
    };
    //eslint-disable-next-line
  }, []);

  return quote !== null ? (
    <>
      <Helmet>
        {'symbol' in quote && 'name' in quote && (
          <>
            <title>{`${quote.symbol} | ${quote.name} | Free Quote | Stock Site`}</title>{' '}
            <meta
              name='description'
              content={`${quote.symbol} free quote. ${quote.name} quote. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
            />
          </>
        )}
      </Helmet>
      <>
        <div className='quote-page__flex'>
          <QuoteDetails
            quote={{
              price: quote.price,
              change: quote.change,
              changesPercentage: quote.changesPercentage,
              symbol: quote.symbol,
              name: quote.name,
              exchange: quote.exchange,
              color: quote.color,
            }}
          />
          <QuoteWatchlistBtnContainer symbol={symbol} />
        </div>

        {isStock && <QuoteNav setTab={setTab} />}
        {tab === 'Summary' && (
          <>
            <QuoteChartContainer symbol={symbol} />
            <br />
            <QuoteSummary quote={quote as Quote} />
          </>
        )}
        {tab === 'Financials' && <QuoteFinancialsContainer symbol={symbol} />}
        {tab === 'Profile' && <QuoteProfileContainer symbol={symbol} />}
        {tab === 'Valuation' && <QuoteValuationContainer symbol={symbol} />}

        <BottomNews
          newsData={newsData}
          loading={!isQuoteFetched || loadingNews}
        />
      </>
    </>
  ) : (
    <Redirect to='/' />
  );
};

export default QuotePage;
