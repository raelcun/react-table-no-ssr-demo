import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducer } from './itemsApi/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    itemsApi: reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const createAppStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware()));
