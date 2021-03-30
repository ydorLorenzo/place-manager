import { call, put, takeLatest } from 'redux-saga/effects';

import { ActionType, } from '../../types/action';
import { fetchApiCall, placeRoute } from '../../services/ApiService';
import { CallReturnType } from '../../types/sagas';

function * fetchPlacesAsync (): Generator {
  try {
    const response: CallReturnType<typeof fetchApiCall> = yield call(fetchApiCall, placeRoute);
    console.log([response, response.statusText, response.data]);
    if (response.statusText === 'OK') {
      yield put({ type: ActionType.PLACES_SUCCESS, payload: response.data.results });
    } else {
      yield put({type: ActionType.PLACES_FAILURE, payload: 'unexpected error: '+response.statusText})
    }
  } catch (e) {
    yield put({ type: ActionType.PLACES_FAILURE, payload: e.message });
  }
}

export default function * placesWatcher (): Generator {
  yield takeLatest(ActionType.PLACES_REQUEST, fetchPlacesAsync);
}
