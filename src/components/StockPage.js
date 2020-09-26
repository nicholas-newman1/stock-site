import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import IntradayChart from './IntradayChart';

const StockPage = ({ match }) => {
  const [data, setData] = useState([]);
  const { APIKey } = useContext(SearchContext);

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/v1/stock/${match.params.ticker}/intraday-prices?token=${APIKey}&chartInterval=5&filter=date,minute,open,close`
    )
      .then((res) => res.json())
      .then((data) => setData(data.filter((item) => item.open && item.close)));
  }, []);

  return (
    <div>
      <IntradayChart data={data} ticker={match.params.ticker} />
    </div>
  );
};

export default StockPage;
