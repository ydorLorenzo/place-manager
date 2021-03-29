import { all } from 'redux-saga/effects';

import placesWatcher from './placesSaga';
import authWatcher from './authSaga';


function* rootSagas(): Generator {
  yield all([
    placesWatcher(),
    authWatcher(),
  ]);
}

export default rootSagas;
