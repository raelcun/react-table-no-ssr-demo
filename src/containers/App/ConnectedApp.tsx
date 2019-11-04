import { App } from './App';
import { StateProps, DispatchProps, OwnProps } from './types';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/itemsApi/actions';

export const ConnectedApp = connect<StateProps, DispatchProps, OwnProps, AppState>(
    state => ({
        fetchingItems: state.itemsApi.fetching,
        items: state.itemsApi.items,
        error: state.itemsApi.error,
    }),
    dispatch => ({
        fetchItems: fetchItems(dispatch),
    }),
)(App);
