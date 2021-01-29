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
    case 'SET_PRICE_OVERVIEW_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PRICE_OVERVIEW_DATA':
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
