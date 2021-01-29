import { DisplayMobileNavActionTypes } from '../types/actionTypes';

export const displayMobileNavReducer = (
  state = false,
  action: DisplayMobileNavActionTypes
) => {
  switch (action.type) {
    case 'SET_DISPLAY_MOBILE_NAV':
      return action.payload;
    case 'TOGGLE_DISPLAY_MOBILE_NAV':
      return !state;
    default:
      return state;
  }
};
