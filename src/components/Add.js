import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Action";
import List from "./List";


const Add = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    const newUser = { id: Date.now(), name };
    dispatch(addUser(newUser));
    setName("");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
      <form className="border rounded p-3 w-100">
        <input
          type="text"
          placeholder="Enter name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-primary w-100"
        >
          Add User
        </button>
      </form>
    </div>
      <List />
    </>
  );
};

export default Add;
