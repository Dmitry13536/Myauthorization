import React, { useEffect } from "react";
import avatar from "../assets/avatar-placeholder.png";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";
import { useParams } from "react-router-dom";

const Profile = ({ data = [] }) => {
  const NavigateTo = useMyNavigate();
  const { id } = useParams();

  const user = data.find((user) => user.id === Number(id));

  useEffect(() => {
    if (!user) NavigateTo("/");
  }, [user, NavigateTo]);

  if (!user) {
    //optional
    return (
      <div className="profile">
        <p>User is not found.</p>
        <MyButton onClick={() => NavigateTo("/")}>На главную</MyButton>
      </div>
    );
  }

  return (
    <div className="profile">
      <p className="profile__title">Личный кабинет</p>
      <div className="profile__data">
        <img src={avatar} alt="avatar" className="profile--avatar" />
        <div className="profile__fullname">
          <p className="profile__fullname--name">{user.name || "Не указано"}</p>
          <p className="profile__fullname--surname">
            {user.surname || "Не указано"}
          </p>
        </div>
        <div className="profile__actions">
          <MyButton
            className="m-10"
            onClick={() => NavigateTo(`/showusers/${id}`)}
          >
            Пользователи
          </MyButton>
          <MyButton disabled className="m-10">
            My tasks
          </MyButton>
          <MyButton
            className="m-10"
            onClick={() => NavigateTo(`/settings/${id}`)}
          >
            Настройки
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
