import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";
import Spinner from "../UI/loadSpinner/Spinner";

const SingUp = ({ add }) => {
  const protoUser = {
    email: "",
    password: "",
    name: "",
    surname: "",
    father: "",
  };

  const [newUser, setNewUser] = useState(protoUser);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState("n");
  const [spin, setSpin] = useState(false);
  const navigateTo = useMyNavigate();

  const addNewUser = (event) => {
    event.preventDefault();
    if (Object.values(newUser).some((val) => val === null || val === "")) {
      setAlert("Fill all the fields");
      return null;
    }
    if (!newUser.email.includes('@')){
      setAlert("Неправильная почта");
      return null;
    }
    if (add(newUser)) {
      setAlert("there is account with this email");
      return null;
    }
    if (newUser.password !== repeatPassword) {
      setAlert("Пароли не совпадают");
      return null;
    }
    console.log(newUser);
    setSpin(true);
    navigateTo('/');
  };

  useEffect(() => {
      setTimeout(() => {
        setAlert("n");
      }, 5000);
    }, [alert]);

  return (
    <div className="singup">
      <Spinner active={spin} />
      <p className="singup__title">Зарегистрироваться</p>
      <p className={`${alert === "n" ? "hide" : "alert"}`}>{alert}</p>
      <form className="singup__wrapper">
        <div className="singup__inputs">
          <div className="singup__name">
            <MyInput
              className="my-5"
              type="text"
              placeholder="Введите имя"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <MyInput
              type="text"
              placeholder="Введите фамилию"
              value={newUser.surname}
              onChange={(e) =>
                setNewUser({ ...newUser, surname: e.target.value })
              }
            />
          </div>
          <MyInput
            type="text"
            placeholder="Введите отчество"
            value={newUser.father}
            onChange={(e) => setNewUser({ ...newUser, father: e.target.value })}
          />
          <MyInput
            cond={!newUser.email.includes("@") && newUser.email.length}
            type="email"
            placeholder="Введите email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <MyInput
            cond={newUser.password !== repeatPassword}
            type="password"
            placeholder="Введите пароль"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <MyInput
            cond={newUser.password !== repeatPassword}
            type="password"
            placeholder="Повторите пaроль"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <span className="link">
          <Link to="/">Уже есть аккаунт?</Link>
          <MyButton onClick={addNewUser} type="submit">
            Отправить
          </MyButton>
        </span>
      </form>
    </div>
  );
};

export default SingUp;
