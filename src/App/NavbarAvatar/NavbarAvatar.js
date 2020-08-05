import React from "react";
import { useSelector } from "react-redux";

//antd comps
import { Avatar } from "antd";

//styles
import { avatar } from "./NavbarAvatar.module.css";

export default function NavbarAvatar() {
  const { photoURL } = useSelector((state) => state.user).user;

  function handleAvatarClick() {
    console.log("object");
  }
  return (
    <Avatar src={photoURL} className={avatar} onClick={handleAvatarClick} />
  );
}
