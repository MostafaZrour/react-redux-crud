import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

export default function Reduxer() {
  const ORDER_PIZZA = "ORDER_PIZZA";
  const ORDER_BURGER = "ORDER_BURGER";

  const orderPizza = () => ({ type: ORDER_PIZZA });
  const orderBurger = () => ({ type: ORDER_BURGER });
  const initialPizzaState = {
    PizzaSlices: 100,
  };
  const initialBurgerState = {
    burgers: 200,
  };

  const PizzaReducer = (state = initialPizzaState, action) => {
    switch (action.type) {
      case ORDER_PIZZA:
        return {
          ...state,
          PizzaSlices: state.PizzaSlices - 1,
        };
      default:
        return state;
    }
  };

  const BurgerReducer = (state = initialBurgerState, action) => {
    switch (action.type) {
      case ORDER_BURGER:
        return {
          ...state,
          burgers: state.burgers - 1,
        };
      default:
        return state;
    }
  };
  const reducer = combineReducers({
    pizza : PizzaReducer ,
    burger : BurgerReducer ,
  })

  const store = createStore(reducer , applyMiddleware(logger));

  console.log("initial State : ", store.getState());
  const unsubscribe = store.subscribe(() => {});
  store.dispatch(orderPizza());
  store.dispatch(orderBurger());
  unsubscribe();
}

//  Component → dispatch(action) → Reducer → Store (New State) → Component
