import React from "react";
import { useSelector } from "react-redux";

import { Menu, Dropdown, Avatar } from "antd";

import ProfileMenu from "../ProfileMenu/ProfileMenu";

const { Item } = Menu;

export default function NavBar() {
  const { photoURL } = useSelector((state) => state.user).user;

  return (
    <>
      <Menu theme='light' mode='horizontal'>
        <Item key='avatar'>Item</Item>
        <Dropdown overlay={ProfileMenu} trigger={["click"]} placement='topLeft'>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            <Avatar src={photoURL} />
          </a>
        </Dropdown>
      </Menu>
    </>
  );
}
