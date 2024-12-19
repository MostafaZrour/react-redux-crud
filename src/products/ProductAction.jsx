import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./ActionTypes";

export const fetchRequest = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (products) => ({
  type: FETCH_SUCCESS,
  payload: products,
});
export const fetchError = () => ({ type: FETCH_ERROR });

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        dispatch(fetchSuccess(products));
      })
      .catch(() => dispatch(fetchError()));
  };
};
