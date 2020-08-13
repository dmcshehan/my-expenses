import React from "react";
import { Layout } from "antd";

import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import SiderElWrapper from "../SiderElWrapper/SiderElWrapper";

import { sider } from "./Sider.module.scss";

const { Sider } = Layout;

export default function SiderComp() {
  return (
    <Sider breakpoint='lg' collapsedWidth='0' className={sider}>
      <Logo />
      <SiderElWrapper>
        <Menu />
        <Menu />
      </SiderElWrapper>
    </Sider>
  );
}
