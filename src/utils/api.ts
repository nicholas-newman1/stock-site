import { Dispatch } from 'redux';
import { AppState } from '../reducers/rootReducer';
import { AppActions } from '../types/actionTypes';

export const fetchFromAPI = (
  endpoint: string,
  dummyDataEndpoint: string,
  onRequest: () => AppActions,
  onSuccess: (data: any) => AppActions,
  onFailure: (error: string) => AppActions,
  { params = '' } = {}
) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(onRequest());

    if (getState().realData.status) {
      return fetch(
        `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
          process.env.REACT_APP_FMP_KEY
        }${params && '&' + params}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data['Error Message']) {
            dispatch(onFailure(data['Error Message']));
          } else if (data.hasOwnProperty('error')) {
            dispatch(onFailure(data.error));
          } else {
            dispatch(onSuccess(data));
          }
        })
        .catch((err) => dispatch(onFailure(err.message)));
    } else {
      return fetch(`../dummyData/${dummyDataEndpoint}.json`)
        .then((res) => res.json())
        .then((data) => dispatch(onSuccess(data)))
        .catch((err) => dispatch(onFailure(err.message)));
    }
  };
};
