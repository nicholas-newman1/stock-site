import React, { useEffect, useContext } from 'react';
import Quote from './Quote';
import QuoteDetails from './QuoteDetails';
import QuoteNews from './QuoteNews';
import '../../css/quote/quotePage.css';
import { QuoteContext } from '../../context/QuoteContext';
import QuoteChart from './QuoteChart';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const { fetchQuote } = useContext(QuoteContext);

  useEffect(() => {
    fetchQuote(symbol);
    //eslint-disable-next-line
  }, []);

  return (
    <div className='quote'>
      <div className='quote-column-1'>
        <Quote symbol={symbol} />

        <div className='quote-content'>
          <QuoteDetails symbol={symbol} />
          {/* <QuoteChart symbol={symbol} /> */}
          <QuoteChart symbol={symbol} />
        </div>
      </div>

      <div className='quote-column-2'>
        <QuoteNews symbol={symbol} />
      </div>
    </div>
  );
};

export default QuotePage;
