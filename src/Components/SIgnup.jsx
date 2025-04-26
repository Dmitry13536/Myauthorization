import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const SingUp = ({ add }) => {
  const protoUser = {
    email: "",
    password: "",
    name: "",
    surname: "",
  };

  const [newUser, setNewUser] = useState(protoUser);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState("");

  const addNewUser = () => {
    if (Object.values(newUser).every((val) => !val)) {
      setAlert("Fill all the fields");
      return null;
    }
    console.log(newUser, repeatPassword);
    if (add(newUser)) setAlert("there is account with this email");
    setNewUser(protoUser);
    setRepeatPassword("");
  };

  return (
    <div className="singup">
      <p className="singup__title">Sign up</p>
      {alert && <p className="alert m-10">{alert}</p>}
      <div className="singup__inputs">
        <div className="singup__name">
          <MyInput
            className="my-5"
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <MyInput
            type="text"
            placeholder="Surname"
            value={newUser.surname}
            onChange={(e) =>
              setNewUser({ ...newUser, surname: e.target.value })
            }
          />
        </div>
        <MyInput
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <MyInput
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <MyInput
          type="password"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
      <MyButton onClick={addNewUser}>Register</MyButton>
      <span className="link">
        <Link to="/">Log in</Link>
      </span>
    </div>
  );
};

export default SingUp;
