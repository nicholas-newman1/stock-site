export const FETCH_NEWS = 'FETCH_NEWS';

export interface FetchNewsAction {
  type: typeof FETCH_NEWS;
  payload: string;
}

export type NewsActionTypes = FetchNewsAction;

export type AppActionTypes = NewsActionTypes;
