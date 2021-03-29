import { call, put, takeLatest} from 'redux-saga/effects';

import { ActionType } from '../../types/action';
import { loginApiCall } from '../../services/ApiService';
import { userSet, userUnset } from '../actions/user';
import { AnyAction } from 'redux';
import { User } from '../../types/user';

function * logoutAsync (): Generator {
  yield put(userUnset());
  localStorage.removeItem('token');
}

function * loginAsync (action: AnyAction): Generator {
  let token;
  try {
    const response: any = yield call(
      loginApiCall, action.email, action.password
    );
    token = response.data.data.tokens.accessToken;
    console.log(token);
    const user: User = response.data.data.user;
    if (response.status === 200) {
      yield put(userSet(user, token))
      yield put({ type: ActionType.LOGIN_SUCCESS, token: token });
      localStorage.setItem('token', token);
      // browserHistory.push('/places');
    } else {
      yield put({ type: ActionType.LOGIN_FAILURE, error: 'error in request data' });
      localStorage.removeItem('token');
    }
  } catch (e) {
    yield put({ type: ActionType.LOGIN_FAILURE, error: 'error' });
    localStorage.removeItem('token');
  }
  return token;
}

export default function * authWatcher (): Generator {
  yield takeLatest(ActionType.LOGIN_REQUEST, loginAsync);
  // yield takeLatest(ActionType.USER_UNSET, logoutAsync)
}
