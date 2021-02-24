import { Quote } from '../../common/types/APITypes';
import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_CRYPTO_REQUEST = 'FETCH_CRYPTO_REQUEST';
const FETCH_CRYPTO_SUCCESS = 'FETCH_CRYPTO_SUCCESS';
const FETCH_CRYPTO_FAILURE = 'FETCH_CRYPTO_FAILURE';

interface FetchCryptoRequest {
  type: typeof FETCH_CRYPTO_REQUEST;
}
interface FetchCryptoSuccess {
  type: typeof FETCH_CRYPTO_SUCCESS;
  payload: Quote[];
}
interface FetchCryptoFailure {
  type: typeof FETCH_CRYPTO_FAILURE;
  payload: string;
}

export type CryptoActionTypes =
  | FetchCryptoRequest
  | FetchCryptoSuccess
  | FetchCryptoFailure;

interface CryptoState {
  loading: boolean;
  data: Quote[];
  error: string;
}

// initial state
const initialState: CryptoState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const cryptoReducer = (state = initialState, action: CryptoActionTypes) => {
  switch (action.type) {
    case 'FETCH_CRYPTO_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CRYPTO_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_CRYPTO_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cryptoReducer;

// actions
export const fetchCryptoRequest = (): FetchCryptoRequest => ({
  type: 'FETCH_CRYPTO_REQUEST',
});

export const fetchCryptoSuccess = (data: Quote[]): FetchCryptoSuccess => ({
  type: 'FETCH_CRYPTO_SUCCESS',
  payload: data,
});

export const fetchCryptoFailure = (error: string): FetchCryptoFailure => ({
  type: 'FETCH_CRYPTO_FAILURE',
  payload: error,
});

export const fetchCrypto = () => {
  return fetchFromAPI(
    'quotes/crypto',
    'crypto',
    fetchCryptoRequest,
    fetchCryptoSuccess,
    fetchCryptoFailure
  );
};
