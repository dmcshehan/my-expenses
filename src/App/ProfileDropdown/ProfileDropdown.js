import React from "react";

//antd comps
import { Card, Divider } from "antd";

//custom comps
import Summary from "./Summary/Summary";
import Avatar from "./Avatar/Avatar";
import LogoutButton from "./LogoutButton/LogoutButton";
//styles
import { dropdown } from "./ProfileDropdown.module.css";

export default function ProfileDropdown() {
  return (
    <Card className={dropdown}>
      <Avatar />
      <Summary />
      <Divider />
      <LogoutButton />
    </Card>
  );
}
