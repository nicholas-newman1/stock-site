import { useState, useContext, useEffect } from 'react';
import { RealDataContext } from '../context/RealDataContext';

const useFetchAndSet = (endpoint, dummyData, params = '') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data;
      if (realData) {
        const res = await fetch(
          `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
            process.env.REACT_APP_FMP_KEY
          }${params && '&' + params}`
        );
        data = await res.json();
      } else {
        data = [...dummyData];
      }
      setData(data);
      setLoading(false);
    })();

    //eslint-disable-next-line
  }, []);

  return [data, setData, loading];
};

export default useFetchAndSet;
