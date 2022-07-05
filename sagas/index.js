import launchesSagas from './launches';
import createSagaMiddleware from '@redux-saga/core';
import {takeEvery} from 'redux-saga/effects';

export let sagaMiddleware = createSagaMiddleware();

export let sagas = [
  ...launchesSagas,
].map(createWatcher);

// For each action/saga pair, the action should trigger the saga each time
function createWatcher(actionSagaPair) {
  return function* () {
    yield takeEvery(...actionSagaPair);
  };
}
