import {put, call} from 'redux-saga/effects';
import { Actions, ActionTypes } from '../action';
import { getAllLaunches } from './network';

function* loadAllLaunches() {
  yield put(Actions.loadingAllLaunches());

  const response = yield call(getAllLaunches);

  if (!response.successful) {
    console.log('Error', response.code);
    yield put(Actions.errorLoadingAllLaunches());
  } else {
    yield put(Actions.loadedAllLaunches(response.data));
  }
}

export default [
  [ActionTypes.GET_ALL_LAUNCHES, loadAllLaunches],
];
