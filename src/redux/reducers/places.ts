import { ActionType, placesRequestType, placesSuccessType, placesFailureType } from '../../types/action';
import { Place } from '../../types/places';

export interface PlacesReducerType {
  list: Place[],
  loading: boolean,
  error?: string,
}

const defaultState: PlacesReducerType = {
  list: [],
  loading: false,
  error: undefined
}

export function placesReducer(
  state=defaultState,
  action: placesRequestType | placesSuccessType | placesFailureType): PlacesReducerType {
  switch (action.type) {
    case ActionType.PLACES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionType.PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        list: action.payload
      }
    case ActionType.PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
