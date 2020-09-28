import React, { useEffect, useContext, useState } from 'react';
import { APIKeyContext } from '../context/APIKeyContext';
import IntradayChart from './IntradayChart';

const StockPage = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { iexCloudKey } = useContext(APIKeyContext);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://cloud.iexapis.com/v1/stock/${match.params.ticker}/intraday-prices?token=${iexCloudKey}&chartInterval=5&filter=date,minute,open,close`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.filter((item) => item.open && item.close));
        setLoading(false);
      });
  }, [iexCloudKey, match.params.ticker]);

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
