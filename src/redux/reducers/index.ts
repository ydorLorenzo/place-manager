import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { placesReducer } from './places';
import { authReducer } from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer,
  user: userReducer,
  form
});

export default rootReducer;
