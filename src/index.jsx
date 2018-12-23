import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SearchPage from './components/SearchPage';
import reducer from './reducers/';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDom.render(
  <Provider store={store}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>,
  document.querySelector('.container'),
);
