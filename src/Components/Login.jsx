import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";
import { useMyNavigate } from "../useMyNavigate";

const Login = ({ data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NavigateTo = useMyNavigate();

  const tryToLogIn = () => {
    let flag = false; //флаг для определения наличия емаила
    data.forEach((element) => {
      if (email === element.email) {
        flag = true; //емаил есть
      }
    });
    if (!flag) {
      console.log("ban");
      return null;
    }
    const targetItem = data.find((item) => item.email === email);
    if (targetItem.password === Number(password)) {
        NavigateTo(`/${targetItem.id}`);
    } else {
      console.log("ban");
    }
  };

  return (
    <div className="login">
      <p className="login__title">Log in</p>
      <div className="login__inputs">
        <MyInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <MyButton onClick={tryToLogIn}>Start</MyButton>
      <span className="link">
        <Link to="/signup">Sign up</Link>
      </span>
    </div>
  );
};

export default Login;
