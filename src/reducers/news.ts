import { NewsActionTypes } from '../types/news';

const newsReducer = (state: KeyValueObject = [], action: NewsActionTypes) => {
  switch (action.type) {
    case 'FETCH_NEWS':
      return state;
    default:
      return state;
  }
};

export default newsReducer;
