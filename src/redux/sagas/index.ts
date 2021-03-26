import { all } from 'redux-saga/effects';

import placesSaga from './placesSaga';


function* rootSagas(): Generator {
  yield all([
    placesSaga()
  ]);
}

export default rootSagas;
