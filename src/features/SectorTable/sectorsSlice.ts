import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_SECTORS_REQUEST = 'FETCH_SECTORS_REQUEST';
const FETCH_SECTORS_SUCCESS = 'FETCH_SECTORS_SUCCESS';
const FETCH_SECTORS_FAILURE = 'FETCH_SECTORS_FAILURE';

interface FetchSectorsRequest {
  type: typeof FETCH_SECTORS_REQUEST;
}
interface FetchSectorsSuccess {
  type: typeof FETCH_SECTORS_SUCCESS;
  payload: SectorQuote[];
}
interface FetchSectorsFailure {
  type: typeof FETCH_SECTORS_FAILURE;
  payload: string;
}

export type SectorsActionTypes =
  | FetchSectorsRequest
  | FetchSectorsSuccess
  | FetchSectorsFailure;

interface SectorsState {
  loading: boolean;
  data: SectorQuote[];
  error: string;
}

// initial state
const initialState: SectorsState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const sectorsReducer = (state = initialState, action: SectorsActionTypes) => {
  switch (action.type) {
    case 'FETCH_SECTORS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SECTORS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_SECTORS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default sectorsReducer;

// actions
export const fetchSectorsRequest = (): FetchSectorsRequest => ({
  type: 'FETCH_SECTORS_REQUEST',
});

export const fetchSectorsSuccess = (
  data: SectorQuote[]
): FetchSectorsSuccess => ({
  type: 'FETCH_SECTORS_SUCCESS',
  payload: data,
});

export const fetchSectorsFailure = (error: string): FetchSectorsFailure => ({
  type: 'FETCH_SECTORS_FAILURE',
  payload: error,
});

export const fetchSectors = () => {
  return fetchFromAPI(
    'sectors-performance',
    'sectors',
    fetchSectorsRequest,
    fetchSectorsSuccess,
    fetchSectorsFailure
  );
};
