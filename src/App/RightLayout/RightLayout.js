import React from "react";
import { Layout } from "antd";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

export default function RightLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}
