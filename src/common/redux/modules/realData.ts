// types
const ENABLE_REAL_DATA = 'ENABLE_REAL_DATA';
const DISABLE_REAL_DATA = 'DISABLE_REAL_DATA';

interface EnableRealData {
  type: typeof ENABLE_REAL_DATA;
}

interface DisableRealData {
  type: typeof DISABLE_REAL_DATA;
  payload: string;
}

export type RealDataActionTypes = EnableRealData | DisableRealData;

// intial state
const initialState = {
  status: true,
  error: 'Calls to a REST API will be simulated using local JSON files',
};

// reducer
const realDataReducer = (state = initialState, action: RealDataActionTypes) => {
  switch (action.type) {
    case ENABLE_REAL_DATA:
      return { ...state, status: true };
    case DISABLE_REAL_DATA:
      return { ...state, status: false, error: action.payload };
    default:
      return state;
  }
};

export default realDataReducer;

// actions
export const enableRealData = (): EnableRealData => ({
  type: ENABLE_REAL_DATA,
});

export const disableRealData = (
  error = 'Something went wrong... Try refreshing.'
): DisableRealData => ({
  type: DISABLE_REAL_DATA,
  payload: error,
});
