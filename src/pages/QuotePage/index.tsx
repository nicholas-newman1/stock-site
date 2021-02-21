import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router-dom';
import { fetchQuoteAndQuoteNews } from '../../actions/quoteActions';
import QuoteNav from '../../components/QuoteNav';
import BottomNews from '../../components/BottomNews';
import useScrollTop from '../../hooks/useScrollTop';
import QuoteChartContainer from '../../containers/QuoteChartContainer';
import QuoteFinancialsContainer from '../../containers/QuoteFinancialsContainer';
import QuoteProfileContainer from '../../containers/QuoteProfileContainer';
import QuoteValuationContainer from '../../containers/QuoteValuationContainer';
import QuoteWatchlistBtnContainer from '../../containers/QuoteWatchlistBtnContainer';
import QuoteContainer from '../../containers/QuoteContainer';
import QuoteSummaryContainer from '../../containers/QuoteSummaryContainer';
import './quotePage.css';

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
      quoteData: { data: quoteData },
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
          <QuoteContainer />
          <QuoteWatchlistBtnContainer symbol={symbol} />
        </div>

        {isStock && <QuoteNav setTab={setTab} />}
        {tab === 'Summary' && (
          <>
            <QuoteChartContainer symbol={symbol} />
            <QuoteSummaryContainer />
          </>
        )}
        {tab === 'Financials' && <QuoteFinancialsContainer symbol={symbol} />}
        {tab === 'Profile' && <QuoteProfileContainer symbol={symbol} />}
        {tab === 'Valuation' && <QuoteValuationContainer symbol={symbol} />}

        <BottomNews
          newsData={newsData}
          loading={loadingNews}
          error={newsError}
        />
      </>
    </>
  );
};

export default QuotePage;
