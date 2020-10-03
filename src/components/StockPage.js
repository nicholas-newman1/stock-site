import React, { useEffect, useState } from 'react';
import IntradayChart from './IntradayChart';

const StockPage = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchIntradayResults = async () => {
    setLoading(true);
    const res = await fetch(
      `https://cloud.iexapis.com/v1/stock/${match.params.ticker}/intraday-prices?token=${process.env.REACT_APP_IEX_CLOUD_KEY}&chartInterval=5&filter=date,minute,open,close`
    );
    const data = await res.json();
    console.log(data);
    setData(data.filter((item) => item.open && item.close));
    setLoading(false);
  };

  useEffect(() => {
    fetchIntradayResults();
    //eslint-disable-next-line
  }, [match.params.ticker]);

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
