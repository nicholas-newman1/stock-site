import React, { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import { QuoteContext } from '../../context/QuoteContext';
import { Helmet } from 'react-helmet-async';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import Quote from '../../components/Quote';
import QuoteWatchlistBtn from '../../components/QuoteWatchlistBtn';
import QuoteSummary from '../../components/QuoteSummary';
import QuoteChart from '../../components/QuoteChart';
import QuoteProfile from '../../components/QuoteProfile';
import QuoteValuation from '../../components/QuoteValuation';
import QuoteNav from '../../components/QuoteNav';
import QuoteFinancials from '../../components/QuoteFinancials';
import BottomNews from '../../components/BottomNews';
import useScrollTop from '../../hooks/useScrollTop';

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
      dispatch(fetchNews(isStock ? `tickers=${symbol}&limit=10` : 'limit=10'));
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
        <Quote />
        <QuoteWatchlistBtn symbol={symbol} />
        {isStock && <QuoteNav tab={tab} setTab={setTab} />}
        {tab === 'Summary' && <QuoteSummary />}
        {tab === 'Chart' && <QuoteChart symbol={symbol} />}
        {tab === 'Financials' && <QuoteFinancials symbol={symbol} />}
        {tab === 'Profile' && <QuoteProfile symbol={symbol} />}
        {tab === 'Valuation' && <QuoteValuation symbol={symbol} />}
        {isQuoteFetched && !isStock && (
          <>
            <br />
            <QuoteChart symbol={symbol} />
          </>
        )}

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
