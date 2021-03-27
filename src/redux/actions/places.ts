import { ActionType, placeRequestType, placesRequestType } from '../../types/action';

export function getPlacesAction(): placesRequestType {
  return {
    type: ActionType.PLACES_REQUEST
  }
}

export function getPlaceAction(id: number): placeRequestType {
  return {
    type: ActionType.PLACE_REQUEST,
    payload: id
  }
}
