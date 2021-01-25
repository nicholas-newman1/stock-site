import { NewsActionTypes } from '../types/news';

let initialState: KeyValueObject[] = [];

const newsReducer = (state = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case 'FETCH_NEWS':
  }
};

export default newsReducer;
