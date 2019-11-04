import { Reducer } from 'redux';
import { ItemsApiState, ItemsApiActions, FETCHING_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from './types';

const initialState: ItemsApiState = {
    fetching: false,
    items: [],
    error: undefined,
};

export const reducer: Reducer<ItemsApiState, ItemsApiActions> = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ITEMS:
            return { fetching: true, items: [], error: undefined };
        case FETCH_ITEMS_SUCCESS:
            return { fetching: false, items: action.payload, error: undefined };
        case FETCH_ITEMS_ERROR:
            return { fetching: false, items: [], error: action.payload };
        default:
            return state;
    }
};
