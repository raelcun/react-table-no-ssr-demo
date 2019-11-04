import { AppAction } from '../types';
import { MockResult } from '../../../server/types';

export type ItemsApiState = {
    fetching: boolean;
    items: MockResult[];
    error: string | undefined;
};

export const FETCHING_ITEMS = 'FETCHING_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';

export type FetchItemsAction = AppAction<typeof FETCHING_ITEMS, void>;
export type FetchItemsSuccessAction = AppAction<typeof FETCH_ITEMS_SUCCESS, MockResult[]>;
export type FetchItemsErrorAction = AppAction<typeof FETCH_ITEMS_ERROR, string>;

export type ItemsApiActions = FetchItemsAction | FetchItemsSuccessAction | FetchItemsErrorAction;
