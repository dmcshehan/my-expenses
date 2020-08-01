import React from "react";
import { Menu } from "antd";
const { Item } = Menu;

export default function MenuComp() {
  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={[""]}
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <Item key='1'>nav 1</Item>
      <Item key='2'>nav 2</Item>
    </Menu>
  );
}
