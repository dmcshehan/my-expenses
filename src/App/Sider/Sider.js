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
      style={{ backgroundColor: "#f5f5fa" }}
    >
      <Logo />
      <Menu />
    </Sider>
  );
}
