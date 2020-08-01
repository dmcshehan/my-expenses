import React from "react";
import { Layout } from "antd";

import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

const { Sider } = Layout;

export default function SiderComp() {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      style={{ backgroundColor: "#1f1f1f" }}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo />
      <Menu />
    </Sider>
  );
}