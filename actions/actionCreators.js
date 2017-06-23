import { favItemAdded, favItemRemoved } from "./items";

export function addFav(item) {
  return dispatch => {
    dispatch(favItemAdded(item));
  };
}

export function removeFav(item) {
  return dispatch => {
    dispatch(favItemRemoved(item));
  };
}
