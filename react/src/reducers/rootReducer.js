import { usersReducer } from "../reducers/users";
import { albumsReducer } from "../reducers/albums";
import { photosReducer } from "../reducers/photos";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

export default rootReducer;
