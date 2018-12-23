import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

import SearchPage from './containers/SearchPage';
import reducer from './reducers/';

ReactDom.render(
  <SearchPage
    history={history}
    location={location}
    store={createStore(reducer)}
  />,
  document.querySelector('.container'),
);
