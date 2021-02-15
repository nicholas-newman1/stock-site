import { PriceOverviewActionTypes } from '../types/actionTypes';
import { Quote } from '../types/APITypes';

interface PriceOverviewState {
  loading: boolean;
  data: Quote[];
  error: string;
}

const initialState: PriceOverviewState = {
  loading: true,
  data: [],
  error: '',
};

export const priceOverviewReducer = (
  state = initialState,
  action: PriceOverviewActionTypes
) => {
  switch (action.type) {
    case 'FETCH_PRICE_OVERVIEW_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PRICE_OVERVIEW_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_PRICE_OVERVIEW_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
