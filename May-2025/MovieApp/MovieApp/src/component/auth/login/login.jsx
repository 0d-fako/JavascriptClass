import React from "react";
import style from "./login.module.css";
import CustomButton from "../../../reuseable/CustomButton";
import { useState } from "react";

const Login = () => {

    const loginDetails = {
        email: "",
        password: "",
    };
    const [loginData, setLoginData] = useState(loginDetails);
    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value.trim(),
        }));
    }

    console.log(loginData);

    return (
        <div className={style.login}>
        <h2>Login</h2>
        <form>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} required />
            </div>
            <CustomButton text="Sign Up" type="submit" className="sign-up-button" />
        </form>
        </div>
    );
}


export default Login;