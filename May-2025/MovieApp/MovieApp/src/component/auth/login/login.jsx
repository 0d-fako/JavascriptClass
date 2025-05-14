import React from "react";
import style from "./login.module.css";
import CustomButton from "../../../reuseable/CustomButton";
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const loginDetails = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(loginDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  console.log(loginData);

  return (
    <div className={style.login}>
      <h2>Login</h2>
      <form>
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton text="Login" type="submit" className="sign-up-button" />
        <Link to="/signup" className={style.link}>
          Dont have an account? Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
