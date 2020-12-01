import React from "react";
import { Layout } from "antd";

import Navbar from '../Navbar/Navbar'
import NavbarAvatar from "../NavbarAvatar/NavbarAvatar";

//styles
import { header } from "./Header.module.css";

const { Header } = Layout;

export default function HeaderComp() {
  return (
    <Header className={header}>
      <Navbar />
      <NavbarAvatar />
    </Header>
  );
}
