import { call, put, takeLatest } from 'redux-saga/effects';
import { CallReturnType } from '../../types/sagas';

import { ActionType, placeRequestType, removingPlaceType, } from '../../types/action';
import { addApiCall, placeRoute, removeApiCall } from '../../services/ApiService';

function * addPlaceAsync (action: placeRequestType): Generator {
  try {
    const response: CallReturnType<typeof addApiCall> = yield call(addApiCall, placeRoute, action.payload);
    if(response.statusText === 'Created') {
      yield put({ type: ActionType.PLACE_SUCCESS, payload: response });
      yield put({type: ActionType.PLACES_REQUEST});
    } else {
      yield put({type: ActionType.PLACES_FAILURE, payload: 'unexpected error: '+response.statusText})
    }
  } catch (e) {
    yield put({ type: ActionType.PLACES_FAILURE, payload: e.message });
  }
}

function * removePlaceAsync (action: removingPlaceType): Generator {
  try {
    const response: CallReturnType<typeof removeApiCall> = yield call(removeApiCall, placeRoute + '/' + action.payload);
    if (response.statusText === 'No Content') {
      yield put({ type: ActionType.REMOVED_PLACE });
      yield put({type: ActionType.PLACES_REQUEST});
    } else {
      yield put({ type: ActionType.REMOVE_PLACE_ERROR, payload: 'unexpected error: '+response.statusText });
    }
  } catch (e) {
    yield put({ type: ActionType.REMOVE_PLACE_ERROR, payload: e.message });
  }
}

export default function * placeWatcher (): Generator {
  yield takeLatest(ActionType.PLACE_REQUEST, addPlaceAsync);
  yield takeLatest(ActionType.REMOVING_PLACE, removePlaceAsync);
}
