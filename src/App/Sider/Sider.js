import React from "react";
import { Layout } from "antd";

import Menu from "../Menu/Menu";

const { Sider } = Layout;

export default function SiderComp() {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      style={{ backgroundColor: "#f5f5fa" }}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu />
    </Sider>
  );
}
