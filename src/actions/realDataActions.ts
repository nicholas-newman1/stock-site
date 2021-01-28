import { DisableRealData, EnableRealData } from '../types/actionTypes';

export const enableRealData = (): EnableRealData => ({
  type: 'ENABLE_REAL_DATA',
});

export const disableRealData = (
  error = 'Something went wrong... Try refreshing.'
): DisableRealData => ({
  type: 'DISABLE_REAL_DATA',
  payload: error,
});
