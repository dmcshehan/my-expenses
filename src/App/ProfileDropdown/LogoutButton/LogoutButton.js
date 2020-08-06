import React from "react";
import { useDispatch } from "react-redux";

//antd comps
import { Button } from "antd";

//icons
import { PoweroffOutlined } from "@ant-design/icons";

//action creators
import { logoutUser } from "../../../store/actionCreators/user";

export default function LogoutButton() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(logoutUser());
  }
  return (
    <Button type='primary' block onClick={onClick} icon={<PoweroffOutlined />}>
      Logout from Account
    </Button>
  );
}
