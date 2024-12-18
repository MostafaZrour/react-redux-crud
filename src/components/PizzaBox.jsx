import { useDispatch, useSelector } from "react-redux";
import { order } from "../Action";
import { useState } from "react";

export default function PizzaBox() {
  const pizza = useSelector((state) => state.PizzaReducer);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="fw-bold text-center p-5 border border-2 border-primary my-4 rounded">
      <p className="h1">Number of Pizza base available : {pizza}</p>
      <form className="input-group mt-4">
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          className="form-control"
          value={number}
        />
        <button
          type="button"
          onClick={() => dispatch(order(number))}
          className="btn btn-outline-primary"
        >
          Order
        </button>
      </form>
    </div>
  );
}
