import { useState, useContext, useEffect } from 'react';
import { RealDataContext } from '../context/RealDataContext';

const useFetchAndSet = (url, dummyData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data;
      if (realData) {
        const res = await fetch(
          `${url}${url.endsWith('?') ? '&' : '?'}apikey=${
            process.env.REACT_APP_FMP_KEY
          }`
        );
        data = await res.json();
        console.log(data);
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
