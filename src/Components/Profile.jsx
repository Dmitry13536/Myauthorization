import React from "react";
import avatar from "../assets/avatar-placeholder.png";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";
import { useParams } from "react-router-dom";

const Profile = ({ data = [] }) => {
  // Защита от undefined
  const NavigateTo = useMyNavigate();
  const { id } = useParams();

  // Находим пользователя с защитой от ошибок
  const user = data.find((user) => user.id === Number(id));

  // Если пользователь не найден
  if (!user) {
    return (
      <div className="profile">
        <p>Пользователь не найден</p>
        <MyButton onClick={() => NavigateTo("/")}>На главную</MyButton>
      </div>
    );
  }

  return (
    <div className="profile">
      <p className="profile__title">Profile</p>
      <div className="profile__data">
        <img src={avatar} alt="avatar" className="profile--avatar" />
        <div className="profile__fullname">
          <p className="profile__fullname--name">{user.name || "Не указано"}</p>
          <p className="profile__fullname--surname">
            {user.surname || "Не указано"}
          </p>
        </div>
        <div className="profile__actions">
          <MyButton disabled className="m-10">
            My achievements
          </MyButton>
          <MyButton disabled className="m-10">
            My tasks
          </MyButton>
          <MyButton
            className="m-10"
            onClick={() => NavigateTo(`/settings/${id}`)}
          >
            Settings
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
// помог gpt потому что я уже пол дня сижу и тут опять какаято хз ошибка и мне в падлу разбиратся