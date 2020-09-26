import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import IntradayChart from './IntradayChart';

const StockPage = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { APIKey } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://sandbox.iexapis.com/v1/stock/${match.params.ticker}/intraday-prices?token=${APIKey}&chartInterval=5&filter=date,minute,open,close`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data.filter(item => item.open && item.close));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <IntradayChart
        data={data}
        ticker={match.params.ticker}
        loading={loading}
      />
    </div>
  );
};

export default StockPage;
