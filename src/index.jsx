import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

// import App from './components/App';
import SearchPage from './components/SearchPage';
import reducer from './reducers/';

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  ReactDom.render(
    <SearchPage
      place={state.place}
      history={history}
      location={location}
      onPlaceChange={place => store.dispatch({ type: 'CHANGE_PLACE', place })}
    />,
    document.querySelector('.container'),
  );
};

render();
store.subscribe(render);
