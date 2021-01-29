import {
  SetDisplayMobileNav,
  ToggleDisplayMobileNav,
} from '../types/actionTypes';

export const setDisplayMobileNav = (status: boolean): SetDisplayMobileNav => ({
  type: 'SET_DISPLAY_MOBILE_NAV',
  payload: status,
});

export const toggleDisplayMobileNav = (): ToggleDisplayMobileNav => ({
  type: 'TOGGLE_DISPLAY_MOBILE_NAV',
});
