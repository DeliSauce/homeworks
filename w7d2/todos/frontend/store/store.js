import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import {applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, applyMiddleware(logger));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
