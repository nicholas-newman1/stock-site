import { RealDataActionTypes } from '../types/actionTypes';

const initialState = {
  status: true,
  error: 'Calls to a REST API will be simulated using local JSON files',
};

export const realDataReducer = (
  state = initialState,
  action: RealDataActionTypes
) => {
  switch (action.type) {
    case 'ENABLE_REAL_DATA':
      return { ...state, status: true };
    case 'DISABLE_REAL_DATA':
      return { ...state, status: false, error: action.payload };
    default:
      return state;
  }
};
