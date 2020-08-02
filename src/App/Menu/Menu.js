import React from "react";
import { Link } from "react-router-dom";
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
      <Item key='1'>
        <Link to='/dashboard'>Dashboard</Link>
      </Item>
    </Menu>
  );
}
