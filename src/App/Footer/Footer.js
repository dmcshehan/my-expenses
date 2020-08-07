import React from "react";
import { Layout } from "antd";
import { footer } from "./Footer.module.css";

const { Footer } = Layout;

export default function FooterComp() {
  return (
    <Footer style={{ textAlign: "center", maxHeight: 20 }} className={footer}>
      My Expenses ©2020 Created by Shehan Disanayake
    </Footer>
  );
}
