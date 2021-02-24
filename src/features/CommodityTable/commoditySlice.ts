import { Quote } from '../../common/types/APITypes';
import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_COMMODITY_REQUEST = 'FETCH_COMMODITY_REQUEST';
const FETCH_COMMODITY_SUCCESS = 'FETCH_COMMODITY_SUCCESS';
const FETCH_COMMODITY_FAILURE = 'FETCH_COMMODITY_FAILURE';

interface FetchCommodityRequest {
  type: typeof FETCH_COMMODITY_REQUEST;
}
interface FetchCommoditySuccess {
  type: typeof FETCH_COMMODITY_SUCCESS;
  payload: Quote[];
}
interface FetchCommodityFailure {
  type: typeof FETCH_COMMODITY_FAILURE;
  payload: string;
}

export type CommodityActionTypes =
  | FetchCommodityRequest
  | FetchCommoditySuccess
  | FetchCommodityFailure;

interface CommodityState {
  loading: boolean;
  data: Quote[];
  error: string;
}

// initial state
const initialState: CommodityState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const commodityReducer = (
  state = initialState,
  action: CommodityActionTypes
) => {
  switch (action.type) {
    case 'FETCH_COMMODITY_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_COMMODITY_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_COMMODITY_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default commodityReducer;

// actions
export const fetchCommodityRequest = (): FetchCommodityRequest => ({
  type: 'FETCH_COMMODITY_REQUEST',
});

export const fetchCommoditySuccess = (
  data: Quote[]
): FetchCommoditySuccess => ({
  type: 'FETCH_COMMODITY_SUCCESS',
  payload: data,
});

export const fetchCommodityFailure = (
  error: string
): FetchCommodityFailure => ({
  type: 'FETCH_COMMODITY_FAILURE',
  payload: error,
});

export const fetchCommodity = () => {
  return fetchFromAPI(
    'quotes/commodity',
    'commodity',
    fetchCommodityRequest,
    fetchCommoditySuccess,
    fetchCommodityFailure
  );
};
