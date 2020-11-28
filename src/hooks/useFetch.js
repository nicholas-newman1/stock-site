import { useState, useContext, useEffect } from 'react';
import { RealDataContext } from '../context/RealDataContext';

const useFetch = (
  initialValue,
  endpoint,
  dummyData,
  params = '',
  dependencies = []
) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const { realData, setRealData } = useContext(RealDataContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data;
      if (realData) {
        try {
          const res = await fetch(
            `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
              process.env.REACT_APP_FMP_KEY
            }${params && '&' + params}`
          );
          data = await res.json();
        } catch (error) {
          data = [...dummyData];
          setRealData(false);
        }
      } else {
        data = [...dummyData];
      }
      setData(data);
      setLoading(false);
    })();

    //eslint-disable-next-line
  }, dependencies);

  return { data, setData, loading };
};

export default useFetch;
