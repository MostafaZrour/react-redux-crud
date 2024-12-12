import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Action";
import { Link , useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.users.find((user) => Number(user.id) === Number(id))
  );

  const [name, setName] = useState("");

  useEffect(() => {
    user ? setName(user.name) : setName("Undefined") ;
  }, [user]);

  const handleUpdate = () => {
    if (name.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    const updatedUser = { ...user, name };
    dispatch(updateUser(updatedUser));
    alert("User updated successfully");
    navigate("/");
  };

  return (
    <div>
      <h2>Update User</h2>
      <Link className= "btn btn-primary my-3 w-100" to="/" >Back Home</Link>
          <input
            type="text"
            placeholder="Update name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" className="btn btn-success w-100 my-2" onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default Update;
