import React from "react";
import avatar from "../assets/avatar-placeholder.png";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";
import { useParams } from "react-router-dom";

const Profile = ({data}) => {
  const NavigateTo = useMyNavigate();

  const {id} = useParams();
  const user = data.find(user => user.id === Number(id));

  return (
    <div className="profile">
      <p className="profile__title">Profile</p>
      <div className="profile__data">
        <img src={avatar} alt="avatar" className="profile--avatar" />
        <div className="profile__fullname">
          <p className="profile__fullname--name">{user.name}</p>
          <p className="profile__fullname--surname">{user.surname}</p>
        </div>
        <div className="profile__actions">
          <MyButton disabled className="m-10">My achievements</MyButton>
          <MyButton disabled className="m-10">My tasks</MyButton>
          <MyButton className="m-10" onClick={() => NavigateTo(`/settings/${id}`)}>
            Settings
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
