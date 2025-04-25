import React from "react";
import avatar from "../assets/avatar-placeholder.png";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";

const Profile = () => {
  const NavigateTo = useMyNavigate();

  return (
    <div className="profile">
      <p className="profile__title">Profile</p>
      <div className="profile__data">
        <img src={avatar} alt="avatar" className="profile--avatar" />
        <div className="profile__fullname">
          <p className="profile__fullname--name">Name</p>
          <p className="profile__fullname--surname">Surname</p>
        </div>
        <div className="profile__actions">
          <MyButton className="m-10">My achievements</MyButton>
          <MyButton className="m-10">My tasks</MyButton>
          <MyButton className="m-10" onClick={() => NavigateTo("/settings")}>
            Settings
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
