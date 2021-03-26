import { ActionType, placesRequestType } from '../../types/action';

export function getPlacesAction(): placesRequestType {
  return {
    type: ActionType.PLACES_REQUEST
  }
}
