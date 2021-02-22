import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disableRealData } from '../../actions/realDataActions';
import { AppState } from '../../reducers/rootReducer';

const useFetch = (
  initialValue: any,
  endpoint: string,
  dummyData: any,
  params = '',
  dependencies = [] as any[]
) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const realData = useSelector((state: AppState) => state.realData);

  useEffect(() => {
    (async () => {
      setLoading(true);

      let data: any;
      if (realData.status) {
        try {
          // const res = await fetch('/.netlify/functions/FMPRequest', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/x-www-form-urlencoded',
          //   },
          //   body: btoa(
          //     JSON.stringify({
          //       endpoint,
          //       params,
          //     })
          //   ),
          // });

          // const res = await fetch('http://localhost:9000/FMPRequest', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/x-www-form-urlencoded',
          //   },
          //   body: btoa(
          //     JSON.stringify({
          //       endpoint,
          //       params,
          //     })
          //   ),
          // });

          const res = await fetch(
            `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
              process.env.REACT_APP_FMP_KEY
            }${params && '&' + params}`
          );

          data = await res.json();

          /* API sometimes sends an error message */
          if (data['Error Message']) throw data['Error Message'];
        } catch (error) {
          data = [...dummyData];
          dispatch(disableRealData(error));
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
