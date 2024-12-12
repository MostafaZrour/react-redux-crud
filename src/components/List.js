import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Action";
import { Link } from "react-router-dom";

const List = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="text-center">
      <h2 className="my-2">User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>UserName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td key={user.id}>{user.name}</td>
              <td className="d-flex gap-2 justify-content-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
                <Link
                  className="btn btn-primary"
                  to={`update/${user.id}`}
                >
                  <i className="bi bi-pencil"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
