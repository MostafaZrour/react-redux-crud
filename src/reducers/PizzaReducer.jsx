const initialState = 100;

function PizzaReducer(state = initialState, action) {
    const {type , payload } = action ;
    switch(type){
        case "ORDER_PIZZA":
            return state > 0 && payload <= state ? state - payload : state ;
        default :
            return state ;
    }
}

export default PizzaReducer;
