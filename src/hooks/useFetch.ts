import { useState, useContext, useEffect } from 'react';
import { RealDataContext } from '../context/RealDataContext';

const useFetch = (
  initialValue: any,
  endpoint: string,
  dummyData: any,
  params = '',
  dependencies = []
) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const { realData, setRealData, setError } = useContext(RealDataContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data: any;
      if (realData) {
        try {
          const res = await fetch(
            `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
              process.env.REACT_APP_FMP_KEY
            }${params && '&' + params}`
          );
          data = await res.json();

          /* API sometimes sends an error message */
          if (data['Error Message']) throw data['Error Message'];
        } catch (error) {
          console.log(new Error(error));
          setError(error); // Error will be accesible by tooltip in header
          data = [...dummyData];

          /* It is assumed API will continue returning errors, so the site will
          use dummy data for every request until the site is refreshed */
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
