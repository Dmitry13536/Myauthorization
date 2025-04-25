import React from "react";
import MyButton from "../UI/button/MyButton";
import { useMyNavigate } from "../useMyNavigate";
import { useParams } from "react-router-dom";

const Settings = () => {
    const NavigateTo = useMyNavigate();
    const {id} = useParams();

  return (
    <div className="settings">
      <p className="settings__title">Settings</p>
      <div className="settings__options">
        <MyButton onClick={()=> NavigateTo('/')} colors={true} className="m-10 bg-grey">Log out</MyButton>
        <MyButton onClick={()=> NavigateTo('/')} colors={true} className="bg-red">Delete accaunt</MyButton>
      </div>
      <MyButton onClick={()=> NavigateTo(`/${id}`)}>Back</MyButton>
    </div>
  );
};

export default Settings;
