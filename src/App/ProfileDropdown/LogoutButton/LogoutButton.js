import React from "react";
import { useSelector, useDispatch } from "react-redux";

//antd comps
import { Button } from "antd";

//action creators
import { logoutUser } from "../../../store/actionCreators/user";

export default function LogoutButton() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(logoutUser());
  }
  return (
    <Button size='large' block onClick={onClick}>
      Logout from Account
    </Button>
  );
}
