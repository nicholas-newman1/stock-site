import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

interface FetchProfileRequest {
  type: typeof FETCH_PROFILE_REQUEST;
}
interface FetchProfileSuccess {
  type: typeof FETCH_PROFILE_SUCCESS;
  payload: KeyValueObject[];
}
interface FetchProfileFailure {
  type: typeof FETCH_PROFILE_FAILURE;
  payload: string;
}

export type ProfileActionTypes =
  | FetchProfileRequest
  | FetchProfileSuccess
  | FetchProfileFailure;

interface ProfileState {
  loading: boolean;
  data: KeyValueObject[];
  error: string;
}

// initial state
const initialState: ProfileState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const quoteProfileReducer = (
  state = initialState,
  action: ProfileActionTypes
) => {
  switch (action.type) {
    case 'FETCH_PROFILE_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PROFILE_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_PROFILE_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteProfileReducer;

// actions
export const fetchProfileRequest = (): FetchProfileRequest => ({
  type: 'FETCH_PROFILE_REQUEST',
});

export const fetchProfileSuccess = (
  data: KeyValueObject[]
): FetchProfileSuccess => ({
  type: 'FETCH_PROFILE_SUCCESS',
  payload: data,
});

export const fetchProfileFailure = (error: string): FetchProfileFailure => ({
  type: 'FETCH_PROFILE_FAILURE',
  payload: error,
});

export const fetchProfile = (symbol: string) => {
  return fetchFromAPI(
    `profile/${symbol}`,
    'profile',
    fetchProfileRequest,
    fetchProfileSuccess,
    fetchProfileFailure
  );
};
