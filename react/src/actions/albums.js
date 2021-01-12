import axios from "axios";

export const fetchAlbums = () => {
  return async function (dispatch) {
    const { data: albums } = await axios.get(
      `http://localhost:8000/api/albums/`
    );
    dispatch(setAlbums(albums));
  };
};

const setAlbums = (albums = null) => {
  if (albums) {
    return {
      type: "SET_ALBUMS",
      payload: albums,
    };
  }
};

//fetch albums of a particular user
export const fetchAlbumsById = (id) => {
  return async function (dispatch) {
    const { data: album } = await axios.get(
      `http://localhost:8000/api/albums/${id}`
    );
    dispatch(setUserAlbum(album));
  };
};

export const setUserAlbum = (albums = null) => {
  if (albums) {
    return {
      type: "SET_ALBUMS_BY_ID",
      payload: albums,
    };
  }
};

export const addNewAlbum = (newAlbum) => {
  return async function (dispatch) {
    const { data: res } = await axios.post(
      `http://localhost:8000/api/albums/`,
      newAlbum
    );
    dispatch(addAlbum(res));
    alert("added " + res.name);
  };
};

export const addAlbum = (albums = null) => {
  if (albums) {
    return {
      type: "ADD_NEW_ALBUM",
      payload: albums,
    };
  }
};
