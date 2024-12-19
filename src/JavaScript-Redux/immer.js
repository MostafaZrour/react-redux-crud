import { produce } from "immer";
import { createStore } from "redux";

const FILL_UPDATE = "FILL_UPDATE";

const updateFill = (filling) => ({ type: FILL_UPDATE, payload: filling });

const initialState = {
  type: "Veggie",
  ingredients: {
    bread: "whole",
    filling: "Lettuce and Tomato",
    sauce: "Mustard'",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_UPDATE:
    //   return {
    //     ...state,
    //     ingredients: {
    //       ...state.ingredients,
    //       filling: action.payload,
    //     },
    //   };
    return produce( state , (draft) => {
        draft.ingredients.filling = action.payload ;
    })
    default:
      return state;
  }
};

const store = createStore(reducer);

const subscribe = store.subscribe(() => {
  console.log("Updated State : ", store.getState());
});

console.log("Initiale State : ", store.getState());
store.dispatch(updateFill("Grilled Veggies and Cheese"));
subscribe();
