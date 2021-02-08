import { fetchFromAPI } from '../utils/api';
import {
  SetPriceOverviewData,
  SetPriceOverviewLoading,
} from '../types/actionTypes';
import { Quote } from '../types/APITypes';

export const setPriceOverviewLoading = (
  status: boolean
): SetPriceOverviewLoading => ({
  type: 'SET_PRICE_OVERVIEW_LOADING',
  payload: status,
});

export const setPriceOverviewData = (data: Quote[]): SetPriceOverviewData => ({
  type: 'SET_PRICE_OVERVIEW_DATA',
  payload: data,
});

export const fetchPriceOverviewData = (symbols: string[]) => {
  return fetchFromAPI(
    `quote/${symbols.join()}`,
    'priceOverview',
    setPriceOverviewLoading,
    setPriceOverviewData
  );
};
