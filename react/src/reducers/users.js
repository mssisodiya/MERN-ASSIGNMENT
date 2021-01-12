const initState = { users: [] };

export const usersReducer = (state = initState.users, action) => {
  switch (action.type) {
    case "SET_USERS":
      return [...action.payload];

    case "ADD_NEW_USER":
      return [...state, action.payload];
   
    default:
      return state;
  }
};
