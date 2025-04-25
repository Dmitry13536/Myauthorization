import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";
import { useMyNavigate } from "../useMyNavigate";

const Login = () => {

    const NavigateTo = useMyNavigate();

    return(
        <div className="login">
            <p className="login__title">Log in</p>
            <div className="login__inputs">
                <MyInput type='email' placeholder='Email' />
                <MyInput type='password' placeholder='Password' />
            </div>
            <MyButton
            onClick={()=>NavigateTo('/profile')}
            >Start</MyButton>
            <span className="link"><Link to="/signup">Sign up</Link></span>
            

        </div>
    )
};

export default Login