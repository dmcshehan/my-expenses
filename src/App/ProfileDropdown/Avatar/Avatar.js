import React from "react";
import { useSelector } from "react-redux";

//antd comps
import { Avatar } from "antd";

import { avatar } from "./Avatar.module.css";

export default function AvatarComp() {
  const { photoURL } = useSelector((state) => state.user).user;
  return <Avatar src={photoURL} size={64} className={avatar} />;
}
