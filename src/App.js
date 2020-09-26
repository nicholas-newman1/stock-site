import React, { useEffect, useState } from 'react';
import Chart from './Chart';

const App = () => {
  const [APIKey] = useState('Tpk_9f992899606244d096283bcf0205cb06');
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [ticker, setTicker] = useState('');

  const getIntradayData = async (ticker) => {
    const res = await fetch(
      `https://sandbox.iexapis.com/v1/stock/${ticker}/intraday-prices?token=${APIKey}&chartInterval=5&filter=date,minute,open,close`
    );
    const data = await res.json();
    const filteredData = data.filter((item) => item.open && item.close);
    setData(filteredData);
  };

  const createChart = async (e) => {
    e.preventDefault();
    getIntradayData(text);
    setTicker(text.toUpperCase());
  };

  return (
    <div>
      <form onSubmit={createChart}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Get Data</button>
      </form>
      {data.length > 0 && <Chart data={data} ticker={ticker} />}
    </div>
  );
};

export default App;
