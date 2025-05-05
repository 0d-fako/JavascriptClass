import React from "react";
import style from "./login.module.css";
import CustomButton from "../../../reuseable/CustomButton";



const Login = () => {
    return (
        <div className="login">
        <h2>Login</h2>
        <form>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <CustomButton text="Sign Up" type="submit" className="sign-up-button" />
        </form>
        </div>
    );
    }
export default Login;