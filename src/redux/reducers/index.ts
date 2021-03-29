import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { placesReducer } from './places';
import { authReducer } from './auth';
import userReducer from './user';
import { placeReducer } from './place';

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer,
  user: userReducer,
  place: placeReducer,
  form
});

export default rootReducer;
