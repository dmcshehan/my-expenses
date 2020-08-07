import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";

const { Item } = Menu;

export default function MenuComp() {
  return (
    <Menu
      theme='light'
      mode='inline'
      defaultSelectedKeys={[""]}
      style={{ minHeight: "calc(100vh - 10px)" }}
    >
      <Item key='1' icon={<DashboardOutlined />}>
        <Link to='/dashboard'>Dashboard</Link>
      </Item>
    </Menu>
  );
}
