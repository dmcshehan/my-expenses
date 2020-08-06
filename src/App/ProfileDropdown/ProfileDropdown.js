import React from "react";
import { useSelector } from "react-redux";

//antd comps
import { Card, Divider } from "antd";

//custom comps
import Summary from "./Summary/Summary";
import Avatar from "./Avatar/Avatar";
import LogoutButton from "./LogoutButton/LogoutButton";
//styles
import { dropdown, show } from "./ProfileDropdown.module.css";

export default function ProfileDropdown() {
  const { isDropdownOpen } = useSelector((state) => state.dropDown);
  return (
    <Card className={`${dropdown} ${isDropdownOpen ? show : ""}`}>
      <Avatar />
      <Summary />
      <Divider />
      <LogoutButton />
    </Card>
  );
}
