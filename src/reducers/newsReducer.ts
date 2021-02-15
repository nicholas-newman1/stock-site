import { NewsActionTypes } from '../types/actionTypes';
import { NewsItem } from '../types/APITypes';

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

// export const newsReducer = (state = initialState, action: NewsActionTypes) => {
//   switch (action.type) {
//     case 'SET_NEWS_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_NEWS_DATA':
//       return { ...state, data: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

export const newsReducer = (state = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
