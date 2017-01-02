import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// //not ideal since we overwrite store.dispatch
// const addLoggingToDispatch = (store) => {
//   const disp = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(disp(action));
//     console.log(store.getState());
//   };
// };




document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // //using applyMiddleware with logger instead
  // store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
