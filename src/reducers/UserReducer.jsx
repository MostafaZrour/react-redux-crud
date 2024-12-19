import { produce } from "immer";

const initialState = [];

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "ADD_USER":
        draft.push(action.payload);
        break;
      case "UPDATE_USER":
        return draft.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      case "DELETE_USER":
        return draft.filter((user) => user.id !== action.payload);
      default:
        return state;
    }
  });

export default userReducer;
