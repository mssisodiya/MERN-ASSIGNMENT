import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../actions/users";

function UserForm() {
  const dispatch = useDispatch();
  const [newUser, setUser] = useState({
    name: "",
    email: "",
    phone: ''
  });

  function handleChange({ currentTarget: input }) {
    const data = { ...newUser };
    data[input.name] = input.value;
    setUser(data);
  }
  function handleSubmit() {
    dispatch(addNewUser(newUser));
  }

  return (
    <div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={newUser.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={newUser.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={newUser.phone}
          placeholder="Enter phone"
          onChange={handleChange}
        />
        <Link
          to={"/users"}
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default UserForm;
