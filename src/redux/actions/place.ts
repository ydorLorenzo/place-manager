import { ActionType, placeRequestType, removingPlaceType } from '../../types/action';
import { Place } from '../../types/places';

export function addPlaceAction (place: Place): placeRequestType {
  return {
    type: ActionType.PLACE_REQUEST,
    payload: place
  };
}

export function removePlaceAction (id: number): removingPlaceType {
  return {
    type: ActionType.REMOVING_PLACE,
    payload: id
  };
}
