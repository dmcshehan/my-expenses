import React from "react";
import { Menu } from "antd";

export default function ProfileMenu() {
  return (
    <Menu>
      <Menu.Item key='0'>
        <a href='http://www.alipay.com/'>1st menu item</a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a href='http://www.taobao.com/'>2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>3rd menu item</Menu.Item>
    </Menu>
  );
}
