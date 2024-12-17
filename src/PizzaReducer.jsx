const initialState = 100;

function PizzaReducer(state = initialState, action) {
    switch(action.type){
        case "ORDER_PIZZA":
            return state !== 0 ? state - 1 : state ;
        default :
            return state ;
    }
}

export default PizzaReducer;
