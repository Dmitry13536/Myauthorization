import React, { useEffect, useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";
import { useMyNavigate } from "../useMyNavigate";

const Login = ({ data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("n");

  const NavigateTo = useMyNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAlert("n");
    }, 5000);
  }, [alert]);

  const tryToLogIn = (event) => {
    event.preventDefault();
    setAlert("n");
    if (!email || !password) {
      setAlert("Fill all the fields");
      return null;
    }
    console.log(alert);
    const user = data.find((user) => user.email === email);
    console.log(user);
    if (!user) {
      setAlert("Incorrect login or password");
      return null;
    }
    if (user.password === password) {
      NavigateTo(`/${user.id}`);
    } else {
      setAlert("Incorrect login or password");
    }
  };

  return (
    <>
      <div className="login">
        <p className="login__title">Авторизоваться</p>
        <form className="login__wrapper">
          <div className="login__inputs">
            <p className={`${alert==='n'? 'hide' : 'alert' }`}>{alert}</p>
            <MyInput
              cond={email.length >= 5 && email.includes("@")}
              required
              type="email"
              placeholder="Введите имя или email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MyInput
              required
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="link">
            <Link to="/signup">Нет аккаунта?</Link>
            <MyButton onClick={tryToLogIn}>Отправить</MyButton>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
