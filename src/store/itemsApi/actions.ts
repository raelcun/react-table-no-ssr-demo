import { Dispatch } from 'redux';
import { AllActions } from '../types';
import { FetchItemsAction, FetchItemsSuccessAction, FetchItemsErrorAction } from './types';
import { MockResult } from '../../../server/types';

const createFetchItemsAction = (): FetchItemsAction => ({
    type: 'FETCHING_ITEMS',
    payload: undefined,
});

const createFetchItemsSuccessAction = (results: MockResult[]): FetchItemsSuccessAction => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload: results,
});

const createFetchItemsErrorAction = (error: string): FetchItemsErrorAction => ({
    type: 'FETCH_ITEMS_ERROR',
    payload: error,
});

export const fetchItems = (dispatch: Dispatch<AllActions>) => (count: number) => {
    dispatch(createFetchItemsAction());

    fetch(`http://localhost:3000/items?count=${count}`)
        .then(res => {
            if (res.status !== 200) {
                throw new Error('server returned garbage');
            }
            console.log(res.body);
            return res;
        })
        .then(res => res.json())
        .then(res => {
            dispatch(createFetchItemsSuccessAction(res));
        })
        .catch(err => {
            const message = err instanceof Error ? err.message : 'unknown error';
            dispatch(createFetchItemsErrorAction(message));
        });
};
