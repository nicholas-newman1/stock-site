import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../app/rootReducer';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router-dom';
import { fetchQuoteAndQuoteNews } from './quoteSlice';
import { QuoteChartContainer } from '../../features/QuoteChart';
import { QuoteFinancialsContainer } from '../../features/QuoteFinancials';
import { QuoteProfileContainer } from '../../features/QuoteProfile';
import { QuoteValuationContainer } from '../../features/QuoteValuation';
import { QuoteSummaryContainer } from '../../features/QuoteSummary';
import { QuoteContainer } from '../../features/Quote';
import { QuoteNewsContainer } from '../../features/QuoteNews';
import { WatchlistBtnContainer } from '../../features/Watchlist';
import BtnBarTwo from '../../common/components/BtnBarTwo';
import useScrollTop from '../../common/hooks/useScrollTop';
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

  const realData = useSelector((state: AppState) => state.realData.status);
  const quote = useSelector((state: AppState) => state.quote.quoteData.data[0]);
  const isStock = useSelector((state: AppState) => state.quote.isStock);

  useEffect(() => {
    dispatch(fetchQuoteAndQuoteNews(symbol));
    //eslint-disable-next-line
  }, [realData]);

  return (
    <div className='quote-page'>
      <Helmet>
        {quote && 'symbol' in quote && 'name' in quote && (
          <>
            <title>{`${quote.symbol} | ${quote.name} | Free Quote | Stock Site`}</title>{' '}
            <meta
              name='description'
              content={`${quote.symbol} free quote. ${quote.name} quote. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
            />
          </>
        )}
      </Helmet>

      <div className='quote-page__flex'>
        <div className='quote-page__quote'>
          <QuoteContainer />
        </div>

        <WatchlistBtnContainer symbol={symbol} />
      </div>

      <div className='quote-page__grid'>
        {isStock && (
          <div className='quote-page__nav'>
            <BtnBarTwo
              btns={[
                { text: 'Summary' },
                { text: 'Financials' },
                { text: 'Profile' },
                { text: 'Valuation' },
              ]}
              setState={setTab}
            />
          </div>
        )}

        {tab === 'Summary' && (
          <>
            <QuoteChartContainer symbol={symbol} />
            <QuoteSummaryContainer />
          </>
        )}
        {tab === 'Financials' && <QuoteFinancialsContainer symbol={symbol} />}
        {tab === 'Profile' && <QuoteProfileContainer symbol={symbol} />}
        {tab === 'Valuation' && <QuoteValuationContainer symbol={symbol} />}

        <QuoteNewsContainer />
      </div>
    </div>
  );
};

export default QuotePage;
