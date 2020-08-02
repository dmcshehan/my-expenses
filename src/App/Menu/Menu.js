import React from "react";
import { Menu } from "antd";
const { Item } = Menu;

export default function MenuComp() {
  return (
    <Menu
      theme='light'
      mode='inline'
      defaultSelectedKeys={[""]}
      style={{ minHeight: "calc(100vh - 136px)" }}
    >
      <Item key='1'>nav 1</Item>
      <Item key='2'>nav 2</Item>
    </Menu>
  );
}
