import { Action } from 'redux';
import { ItemsApiActions } from './itemsApi/types';

export interface AppAction<T, P> extends Action<T> {
    payload: P;
}

export type AllActions = ItemsApiActions;
