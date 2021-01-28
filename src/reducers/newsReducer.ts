import { NewsActionTypes } from '../types/actionTypes';

interface NewsState {
  loading: boolean;
  data: NewsItem[];
  error: string;
}

const initialState: NewsState = {
  loading: true,
  data: [],
  error: '',
};

export const newsReducer = (state = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case 'SET_NEWS_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_NEWS_DATA':
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
