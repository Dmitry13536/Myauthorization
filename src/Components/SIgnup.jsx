import React from "react";
import { Link } from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const SingUp = () => {
    return (
        <div className="singup">
            <p className="singup__title">Sign up</p>
            <div className="singup__inputs">
                <MyInput type='text' placeholder='Name' />
                <MyInput type='email' placeholder='Email' />
                <MyInput type='password' placeholder='Password' />
                <MyInput type='password' placeholder='Repeat password' />
                
            </div>
            <MyButton>Register</MyButton>
            <span className="link"><Link to="/">Log in</Link></span>
            

        </div>
    )
}

export default SingUp;