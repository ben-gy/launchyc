/**
 * Aggregator of reducers, sagas to build a store for the app
 * returns a store which is passed down to the props
 *
 **/
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers';
import {sagaMiddleware, sagas} from './sagas';

let createStoreWithMiddleware;

export default initialState => {
  createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

  let store = createStoreWithMiddleware(allReducers, initialState);

  // Start all sagas.
  for (let saga of sagas) {
    sagaMiddleware.run(saga);
  }

  return store;
};
