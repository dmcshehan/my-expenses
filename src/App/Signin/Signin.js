import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import signUpUserWithProvider from "../../auth/signupUserWithProvider";

import classNames from "./Signin.module.css";

export default function Signup() {
  const { user } = useSelector((state) => state.user);

  function handleSignupWith(type) {
    signUpUserWithProvider(type);
  }

  return user ? (
    <Redirect to='/dashboard' />
  ) : (
    <>
      <div className={classNames.signin}>
        <button
          className={`button has-text-white ${classNames.googleBtn}`}
          onClick={() => handleSignupWith("google")}
        >
          <span className='icon'>
            <i className='fab fa-google'></i>
          </span>
          <span>Sign In With Google</span>
        </button>
      </div>
    </>
  );
}
