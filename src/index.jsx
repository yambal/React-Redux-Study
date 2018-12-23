import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SearchPage from './components/SearchPage';
import reducer from './reducers/';

ReactDom.render(
  <Provider store={createStore(reducer)}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>,
  document.querySelector('.container'),
);
