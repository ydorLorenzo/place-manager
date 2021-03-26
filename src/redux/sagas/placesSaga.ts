import { put, takeEvery, call } from 'redux-saga/effects';

import {
  ActionType,
} from '../../types/action';
import { fetchApiCall, placeRoute } from '../../services/ApiService';


function* fetchPlacesAsync(): Generator {
  try {
    const response = yield call(fetchApiCall, placeRoute);
    console.log(response);
    yield put({type: ActionType.PLACES_SUCCESS, payload: response});
  } catch (e) {
    yield put({ type: ActionType.PLACES_FAILURE, payload: e.message })
  }
}

export default function* placesSaga(): Generator {
  yield takeEvery(ActionType.PLACES_REQUEST, fetchPlacesAsync)
}