import React from "react";
import { useSelector } from "react-redux";

//antd comps
import { Avatar, Card } from "antd";

//custom comps
import ProfileMenu from "../ProfileMenu/ProfileMenu";

//styles
import { dropdown } from "./ProfileDropdown.module.css";

export default function ProfileDropdown() {
  const { photoURL } = useSelector((state) => state.user).user;
  return (
    <Card className={dropdown}>
      <Avatar src={photoURL} size={64} />
      <ProfileMenu />
    </Card>
  );
}
