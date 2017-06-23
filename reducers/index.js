import { combineReducers } from "redux";
import { flights, favorites } from "./items";

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    flights,
    favorites
  });
}
