import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchSearchGiphys} from './util/api_util';
import {fetchSearchGiphys, receiveSearchGiphys} from './actions/giphy_actions';

// window.fetchSearchGiphys = fetchSearchGiphys;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));

  window.store = store;
  // window.fetchSearchGiphys = fetchSearchGiphys;
  // window.receiveSearchGiphys = receiveSearchGiphys;
});
