import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import signUpUserWithProvider from "../../auth/signupUserWithProvider";

//antd comps
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import { signin } from "./Signin.module.css";

export default function Signup() {
  const { user } = useSelector((state) => state.user);

  function handleSignupWith(type) {
    signUpUserWithProvider(type);
  }

  return user ? (
    <Redirect to='/dashboard' />
  ) : (
    <>
      <div className={signin}>
        <Button
          type='primary'
          onClick={() => handleSignupWith("google")}
          size='large'
          icon={<GoogleOutlined />}
        >
          Sign In With Google
        </Button>
      </div>
    </>
  );
}
