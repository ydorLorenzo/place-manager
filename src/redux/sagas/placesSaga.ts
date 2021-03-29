import { call, put, takeLatest } from 'redux-saga/effects';
import { CallReturnType } from '../../types/sagas';

import { ActionType, placeRequestType, } from '../../types/action';
import { fetchApiCall, placeRoute } from '../../services/ApiService';

function * fetchPlacesAsync (): Generator {
  try {
    const response = yield call(fetchApiCall, placeRoute);
    console.log(response);
    yield put({ type: ActionType.PLACES_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: ActionType.PLACES_FAILURE, payload: e.message });
  }
}

function * fetchPlaceAsync (action: placeRequestType): Generator {
  try {
    const response: CallReturnType<typeof fetchApiCall> = yield call(fetchApiCall, placeRoute + '/' + action.payload);
    console.log(response);
    yield put({ type: ActionType.PLACE_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: ActionType.PLACES_FAILURE, payload: e.message });
  }
}

export default function * placesWatcher (): Generator {
  yield takeLatest(ActionType.PLACES_REQUEST, fetchPlacesAsync);
  yield takeLatest(ActionType.PLACE_REQUEST, fetchPlaceAsync);
}
