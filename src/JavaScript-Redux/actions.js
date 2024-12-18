import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { useDispatch } from "react-redux";

// Action Types
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

// Initial State
const initialState = {
  loading: false,
  products: [],
  error: false,
};

// Action Creators
const fetchRequest = () => ({ type: FETCH_REQUEST });
const fetchSuccess = (products) => ({ type: FETCH_SUCCESS, payload: products });
const fetchError = () => ({ type: FETCH_ERROR });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

// Thunk Function
const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest()); 
    fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((products) => {
        console.log("id : " , products.id);
        dispatch(fetchSuccess([products]));
    })
      .catch(() => dispatch(fetchError()));
  };
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));

// // React Component
// const App = () => {
//   const dispatch = useDispatch();
//   dispatch(fetchProducts());
// };

export default App;
export { store };
