import React from "react";
import { Layout } from "antd";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

const { Header } = Layout;

export default function HeaderComp() {
  return (
    <Header
      style={{
        padding: 0,
        height: "auto",
      }}
    >
      <Navbar />
    </Header>
  );
}
