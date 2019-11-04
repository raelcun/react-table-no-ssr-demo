import 'unfetch/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './containers/App';
import { createAppStore } from './store';
import { Provider } from 'react-redux';

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <App title="Increment and Decrement" />
    </Provider>,
    document.getElementById('root'),
);
