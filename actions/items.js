export const ActionTypes = {
  FavItemAdded: "FAV_ITEM_ADDED",
  FavItemRemoved: "FAV_ITEM_REMOVED"
};

export function favItemAdded(item) {
  return {
    type: ActionTypes.FavItemAdded,
    item
  };
}

export function favItemRemoved(item) {
  return {
    type: ActionTypes.FavItemRemoved,
    item
  };
}
