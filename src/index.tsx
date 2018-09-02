import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import * as actions from './redux/actions';
import { IStoreState } from './types/index';

import './index.css';

const store = createStore<IStoreState, any, any, any>(reducers, {
  todo: {
    count: 1,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
