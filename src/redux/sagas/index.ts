import { all } from 'redux-saga/effects';

import placesWatcher from './placesSaga';
import authWatcher from './authSaga';
import placeWatcher from './placeSaga';


function* rootSagas(): Generator {
  yield all([
    placesWatcher(),
    placeWatcher(),
    authWatcher(),
  ]);
}

export default rootSagas;
