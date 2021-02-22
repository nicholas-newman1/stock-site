import React from 'react';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { Quote } from '../../../types/APITypes';
import {
  replaceNullValues,
  shortenNumbers,
} from '../../../common/utils/helpers';
import './quoteSummary.css';
import QuoteSummaryLoading from './QuoteSummaryLoading';

interface Props {
  quote: Quote;
  loading: boolean;
  error: string;
}

const QuoteSummary: React.FC<Props> = ({ quote, loading, error }) => {
  if (loading) return <QuoteSummaryLoading />;
  if (error) return <FetchErrorContainer error='Failed to fetch quote' />;

  const formattedQuote = shortenNumbers(replaceNullValues(quote));

  return (
    <div className='quote-summary'>
      <table className='quote-summary__table'>
        <thead className='quote-summary__thead'>
          <tr className='quote-summary__tr'>
            <th className='quote-summary__th'>Previous Close</th>
            <th className='quote-summary__th'>Open</th>
            <th className='quote-summary__th'>Day High</th>
            <th className='quote-summary__th'>Day Low</th>
            <th className='quote-summary__th'>Year High</th>
            <th className='quote-summary__th'>Year Low</th>
          </tr>
        </thead>
        <tbody className='quote-summary__tbody'>
          <tr className='quote-summary__tr'>
            <td className='quote-summary__td'>
              {formattedQuote.previousClose}
            </td>
            <td className='quote-summary__td'>{formattedQuote.open}</td>
            <td className='quote-summary__td'>{formattedQuote.dayHigh}</td>
            <td className='quote-summary__td'>{formattedQuote.dayLow}</td>
            <td className='quote-summary__td'>{formattedQuote.yearHigh}</td>
            <td className='quote-summary__td'>{formattedQuote.yearLow}</td>
          </tr>
        </tbody>
      </table>

      <table className='quote-summary__table'>
        <thead className='quote-summary__thead'>
          <tr className='quote-summary__tr'>
            <th className='quote-summary__th'>Market Cap</th>
            <th className='quote-summary__th'>PE</th>
            <th className='quote-summary__th'>EPS</th>
            <th className='quote-summary__th'>Shares Outstanding</th>
            <th className='quote-summary__th'>Volume</th>
            <th className='quote-summary__th'>Average Volume</th>
          </tr>
        </thead>
        <tbody className='quote-summary__tbody'>
          <tr className='quote-summary__tr'>
            <td className='quote-summary__td'>{formattedQuote.marketCap}</td>
            <td className='quote-summary__td'>{formattedQuote.pe}</td>
            <td className='quote-summary__td'>{formattedQuote.eps}</td>
            <td className='quote-summary__td'>
              {formattedQuote.sharesOutstanding}
            </td>
            <td className='quote-summary__td'>{formattedQuote.volume}</td>
            <td className='quote-summary__td'>{formattedQuote.avgVolume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteSummary;
