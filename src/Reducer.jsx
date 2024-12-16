const initialState = []; // Directly set the initial state as an empty array

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload]; // Add new user
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      ); // Update user
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload); // Delete user
    default:
      return state;
  }
};

export default userReducer;
