const initState = { albums: [] };

export const albumsReducer = (state = initState.albums, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return [...action.payload];
    case "SET_ALBUMS_BY_ID":
      return [...action.payload];
    case "ADD_NEW_ALBUM":
      return [...state, action.payload];
    default:
      return state;
  }
};
