// Importing createStore from the Redux library to create a store.
import { createStore } from "redux";

// A React component to demonstrate the use of Redux.
export default function Reduxer() {
  // Define an action type. This is a string that identifies the type of action.
  const ORDER_PIZZA = "ORDER_PIZZA";

  // Define an action creator. This is a function that creates an action object.
  const orderPizza = () => ({ type: ORDER_PIZZA });

  // Define the initial state of the application. This is the default state.
  const initialState = {
    PizzaSlices: 100, // Start with 100 pizza slices.
  };

  // Define a reducer function. This function determines how the state changes
  // in response to actions.
  const reducer = (state = initialState, action) => {
    // Use a switch statement to handle different action types.
    switch (action.type) {
      case ORDER_PIZZA: // If the action is "ORDER_PIZZA",
        return {
          ...state, // Copy the current state,
          PizzaSlices: state.PizzaSlices - 1, // Decrease the number of pizza slices by 1.
        };
      default: // If the action type is not recognized, return the current state unchanged.
        return state;
    }
  };

  // Create a Redux store using the reducer. The store manages the state and actions.
  const store = createStore(reducer);

  // Log the initial state of the store to the console.
  console.log("Initial State:", store.getState());

  // Subscribe to the store. This allows you to run a function every time the state changes.
  const unsubscribe = store.subscribe(() => {
    // Log the updated state to the console whenever it changes.
    console.log("Updated State:", store.getState());
  });

  // Dispatch the "ORDER_PIZZA" action to update the state.
  store.dispatch(orderPizza());

  // Unsubscribe from the store. This stops listening for state updates.
  unsubscribe();
}
