import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    
    <div className="row">
    <div className="col-3">
    <Link
    to={`/users/newUser`}
    className="btn btn-primary btn-sm"
  >
    Add New User
  </Link>
  </div>
      <ul>
        {
    users.map((user) => (
          <li key={user._id}>
            <Link to={`albums/${user._id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
