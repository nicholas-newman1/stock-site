import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../app/rootReducer';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router-dom';
import { fetchQuoteAndQuoteNews } from './quoteSlice';
import BottomNews from '../../common/components/BottomNews';
import useScrollTop from '../../common/hooks/useScrollTop';
import QuoteChartContainer from '../../features/QuoteChart/QuoteChartContainer';
import QuoteFinancialsContainer from '../../features/QuoteFinancials/QuoteFinancialsContainer';
import QuoteProfileContainer from '../../features/QuoteProfile/QuoteProfileContainer';
import QuoteValuationContainer from '../../features/QuoteValuation/QuoteValuationContainer';
import { WatchlistBtnContainer } from '../../features/Watchlist';
import Quote from '../../common/components/Quote';
import QuoteSummary from '../../common/components/QuoteSummary';
import './quotePage.css';
import FetchErrorContainer from '../../common/containers/FetchErrorContainer';
import BtnBarTwo from '../../common/components/BtnBarTwo';

interface MatchProps {
  symbol: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const QuotePage: React.FC<Props> = ({ match }) => {
  useScrollTop(); // scrolls to top of page on component mount

  const symbol: string = match.params.symbol;
  const [tab, setTab] = useState('Summary');

  const dispatch = useDispatch();

  const {
    quote: {
      quoteData: { data: quoteData, loading: loadingQuote },
      newsData: { data: newsData, loading: loadingNews, error: newsError },
      isStock,
    },
    realData,
  } = useSelector((state: AppState) => state);

  const quote = quoteData[0] || {};

  useEffect(() => {
    dispatch(fetchQuoteAndQuoteNews(symbol));
    //eslint-disable-next-line
  }, [realData.status]);

  return (
    <div className='quote-page'>
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
          <Quote quote={quote} loading={loadingQuote} />
          <WatchlistBtnContainer symbol={symbol} />
        </div>

        {isStock && (
          <BtnBarTwo
            btns={[
              { text: 'Summary' },
              { text: 'Financials' },
              { text: 'Profile' },
              { text: 'Valuation' },
            ]}
            setState={setTab}
          />
        )}
        {tab === 'Summary' && (
          <>
            <QuoteChartContainer symbol={symbol} />
            <QuoteSummary quote={quote} loading={loadingQuote} />
          </>
        )}
        {tab === 'Financials' && <QuoteFinancialsContainer symbol={symbol} />}
        {tab === 'Profile' && <QuoteProfileContainer symbol={symbol} />}
        {tab === 'Valuation' && <QuoteValuationContainer symbol={symbol} />}

        {newsError ? (
          <FetchErrorContainer error='Failed to fetch news' />
        ) : (
          <BottomNews newsData={newsData} loading={loadingNews} />
        )}
      </>
    </div>
  );
};

export default QuotePage;
