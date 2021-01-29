import { Dispatch } from 'redux';
import { disableRealData } from './actions/realDataActions';
import { AppState } from './reducers/rootReducer';
import { AppActions } from './types/actionTypes';

export const fetchFromAPI = (
  endpoint: string,
  dummyEndpoint: string,
  setLoading: (status: boolean) => any,
  setData: (data: any) => any,
  params = ''
) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setLoading(true));
    if (getState().realData.status) {
      fetch(
        `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
          process.env.REACT_APP_FMP_KEY
        }${params && '&' + params}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data['Error Message']) {
            dispatch(disableRealData(data['Error Message']));
            fetch(`../dummyData/${dummyEndpoint}.json`)
              .then((res) => res.json())
              .then((data) => dispatch(setData(data)));
          } else {
            dispatch(setData(data));
          }
        })
        .catch((err) => dispatch(disableRealData(err.message)));
    } else {
      fetch(`../dummyData/${dummyEndpoint}.json`)
        .then((res) => res.json())
        .then((data) => dispatch(setData(data)));
    }
  };
};
