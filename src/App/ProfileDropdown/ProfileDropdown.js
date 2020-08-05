import React from "react";
import { useSelector } from "react-redux";

//antd comps
import { Dropdown, Avatar } from "antd";

//custom comps
import ProfileMenu from "../ProfileMenu/ProfileMenu";

export default function ProfileDropdown() {
  const { photoURL } = useSelector((state) => state.user).user;
  return (
    <Dropdown
      overlay={ProfileMenu}
      trigger={["click"]}
      placement='bottomLeft'
      arrow
    >
      <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
        <Avatar src={photoURL} />
      </a>
    </Dropdown>
  );
}
