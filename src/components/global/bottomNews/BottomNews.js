import React, { useEffect, useState, useContext } from 'react';
import BottomNewsItem from './BottomNewsItem';
import BottomNewsLoading from './BottomNewsLoading';
import { dummyStockNews } from '../../../dummyData';
import './bottomNews.css';
import { RealDataContext } from '../../../context/RealDataContext';

const BottomNews = ({ symbol, shift = false }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { realData } = useContext(RealDataContext);

  const fetchNewsData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      /* Depending on the page, sometimes a symbol prop is passed. In that case,
      the API call should include the ticker paramater. If no symbol is passed,
      the ticker paramater should not be included so that the API returns
      general stock news */
      let tickersParam = '';
      if (symbol) tickersParam = `tickers=${symbol}`;
      let res = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_news?${tickersParam}&limit=11&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();

      /* sometimes the API returns less than 10 articles for certain symbols.
      In that case, general stock news articles are pushed into the array until 
      it reaches a length of 10 */
      if (data.length < 10) {
        res = await fetch(
          `https://financialmodelingprep.com/api/v3/stock_news?limit=11&apikey=${process.env.REACT_APP_FMP_KEY}`
        );
        const generalData = await res.json();
        let i = 0;
        while (data.length < 10) {
          data.push(generalData[i]);
          i++;
        }
      }
    } else {
      data = dummyStockNews;
    }

    /* This component is used on the HomePage. The HomePage displays the first
    article in a different format at the top of the screen. To avoid repetition,
    the shift prop is set to true, which will remove the first article. If shift
    is not set to true, the last news item is popped off to keep the array at an
    even length of 10 */
    shift ? data.shift() : data.pop();

    setNewsData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsData();
    //eslint-disable-next-line
  }, [realData]);

  return (
    <div className='bottom-news'>
      {loading ? (
        <BottomNewsLoading />
      ) : (
        <ul className='bottom-news__ul'>
          {newsData.map((newsItem, i) => (
            <BottomNewsItem key={i} newsItem={newsItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BottomNews;
