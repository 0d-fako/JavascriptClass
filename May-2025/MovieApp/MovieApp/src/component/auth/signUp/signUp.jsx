import React from "react";
import style from "./signUp.module.css";
import CustomButton from "../../../reuseable/CustomButton";
import { useState } from "react";
import { useSignupMutation } from "../../../service/userAuthApi";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "bidder",
  };

  const [userData, setUserData] = useState(userDetails);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [signUp, { isLoading, isError, error }] = useSignupMutation();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));

    if (name === "confirmPassword" || name === "password") {
      const otherField = name === "password" ? "confirmPassword" : "password";
      setPasswordsMatch(
        value === userData[otherField] || !userData[otherField]
      );
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await signUp(userData).unwrap();
      console.log("Response:", response);
      if (response.id) {
        navigate("/login");
      }
      console.log("Signup successful:", response);
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <div className={style.signUp}>
      <h2>Bidvado Auction SignUp</h2>
      <form onSubmit={submitHandler}>
        <div className={style.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInput}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInput}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInput}
            required
          />
          {!passwordsMatch && (
            <p className={style.errorMessage}>Passwords do not match</p>
          )}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={userData.role}
            onChange={handleInput}
          >
            <option value="bidder">Bidder</option>
            <option value="auctioneer">Auctioneer</option>
          </select>
        </div>

        <CustomButton
          text={isLoading ? "Signing Up..." : "Sign Up"}
          type="submit"
          className="sign-up-button"
          disabled={isLoading || !passwordsMatch}
        />

        <Link to="/login" className={style.link}>
          Already have an account? Login
        </Link>

        {isError && (
          <p className={style.errorMessage}>
            {error?.data?.error || "An error occurred during signup"}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
