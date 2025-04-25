import React from "react";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";

const Settings = () => {
    const NavigateTo = useMyNavigate();

  return (
    <div className="settings">
      <p className="settings__title">Settings</p>
      <div className="settings__options">
        <MyButton onClick={()=> NavigateTo('/')} colors={true} className="m-10 bg-grey">Log out</MyButton>
        <MyButton onClick={()=> NavigateTo('/')} colors={true} className="bg-red">Delete accaunt</MyButton>
      </div>
      <MyButton onClick={()=> NavigateTo('/profile')}>Back</MyButton>
    </div>
  );
};

export default Settings;
