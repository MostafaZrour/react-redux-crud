import { useDispatch, useSelector } from "react-redux";
import { order } from "../Action";

export default function PizzaBox() {
  const pizza = useSelector((state) => state.PizzaReducer);
  const dispatch = useDispatch();

  return (
    <div className="fw-bold text-center p-5 border border-2 border-primary my-4 rounded">
      <p className="h1">Number of Pizza base available - {pizza}</p>
      <button
        onClick={() => dispatch(order())}
        className="btn btn-outline-primary mt-4 w-50"
      >
        Order
      </button>
    </div>
  );
}
