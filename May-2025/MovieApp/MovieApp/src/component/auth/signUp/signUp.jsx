import React from "react";
import style from "./signUp.module.css";
import CustomButton from "../../../reuseable/CustomButton";
import { useState } from "react";
import { useSignupMutation } from "../../../service/userAuthApi";




const SignUp = () => {


    const userDetails = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [userData, setUserData] = useState(userDetails);

    const res = useSignupMutation();
    console.log(res);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value.trim(),
        }));
    }


    console.log(userData);


    return (
        <div className={style.signUp}>
        <h2>SignUp</h2>
        <form>

            <div className={style.formGroup}>
                <label htmlFor="fullName">Full Name </label>
                <input type="fullName" id="fullName" name="fullName" onChange ={handleInput} required />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="email">Email </label>
                <input type="email" id="email" name="email" onChange ={handleInput} required />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="password">Password </label>
                <input type="password" id="password" name="password" onChange ={handleInput} required />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input type="password" id="confirmPassword" name="confirmPassword" onChange ={handleInput} required />
            </div>

            <CustomButton text="Sign Up" type="submit" className="sign-up-button" />
        </form>
        </div>
    );
}

export default SignUp;