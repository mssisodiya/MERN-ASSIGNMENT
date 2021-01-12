import axios from "axios";

export const fetchUsers = () => {
  return async function (dispatch) {
    const { data: users } = await axios.get(
      "http://localhost:8000/api/users/"
    );
    dispatch(setUsers(users));
  };
};

const setUsers = (users = null) => {
  if (users) {
    return {
      type: "SET_USERS",
      payload: users,
    };
  }
};

export const addNewUser = (newUser) => {
  return async function (dispatch) {
    const { data: res } = await axios.post(
      `http://localhost:8000/api/users/`,
      newUser
    );
    dispatch(addUser(res));
    alert("added " + res.name);
  };
};

export const addUser = (users = null) => {
  if (users) {
    return {
      type: "ADD_NEW_USER",
      payload: users,
    };
  }
};
 