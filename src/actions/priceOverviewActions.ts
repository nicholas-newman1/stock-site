import { fetchFromAPI } from '../common/utils/api';
import {
  FetchPriceOverviewRequest,
  FetchPriceOverviewSuccess,
  FetchPriceOverviewFailure,
  // SetPriceOverviewData,
  // SetPriceOverviewLoading,
} from '../types/actionTypes';
import { Quote } from '../types/APITypes';

// export const setPriceOverviewLoading = (
//   status: boolean
// ): SetPriceOverviewLoading => ({
//   type: 'SET_PRICE_OVERVIEW_LOADING',
//   payload: status,
// });

// export const setPriceOverviewData = (data: Quote[]): SetPriceOverviewData => ({
//   type: 'SET_PRICE_OVERVIEW_DATA',
//   payload: data,
// });

const fetchPriceOverviewRequest = (): FetchPriceOverviewRequest => ({
  type: 'FETCH_PRICE_OVERVIEW_REQUEST',
});
const fetchPriceOverviewSuccess = (
  data: Quote[]
): FetchPriceOverviewSuccess => ({
  type: 'FETCH_PRICE_OVERVIEW_SUCCESS',
  payload: data,
});
const fetchPriceOverviewFailure = (
  error: string
): FetchPriceOverviewFailure => ({
  type: 'FETCH_PRICE_OVERVIEW_FAILURE',
  payload: error,
});

export const fetchPriceOverviewData = (symbols: string[]) => {
  return fetchFromAPI(
    `quote/${symbols.join()}`,
    'priceOverview',
    fetchPriceOverviewRequest,
    fetchPriceOverviewSuccess,
    fetchPriceOverviewFailure
  );
};
