const initState = { photos: [] };

export const photosReducer = (state = initState.photos, action) => {
  switch (action.type) {
    case "FETCH_ALL_PHOTOS":
      return [...action.payload];
    case "SET_PHOTOS_BY_ID":
      return [...action.payload];
    case "ADD_NEW_PHOTO":
      return [...state, action.payload];
    default:
      return state;
  }
};
