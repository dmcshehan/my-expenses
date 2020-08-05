import React from "react";
import { useSelector, useDispatch } from "react-redux";

//antd comps
import { Avatar } from "antd";

//action creators
import {
  openDropdown,
  closeDropdown,
} from "../../store/actionCreators/dropdown";

//styles
import { avatar } from "./NavbarAvatar.module.css";

export default function NavbarAvatar() {
  const dispatch = useDispatch();
  const { photoURL } = useSelector((state) => state.user).user;
  const { isDropdownOpen } = useSelector((state) => state.dropDown);

  function handleAvatarClick() {
    if (isDropdownOpen) {
      return dispatch(closeDropdown());
    }

    dispatch(openDropdown());
  }
  return (
    <Avatar src={photoURL} className={avatar} onClick={handleAvatarClick} />
  );
}
