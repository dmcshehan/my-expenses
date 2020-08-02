import React from "react";
import { Layout } from "antd";

import Content from "../Content/Content";
import Sider from "../Sider/Sider";

export default function RightLayout({ children }) {
  return (
    <Layout>
      <Sider />
      <Content>{children}</Content>
    </Layout>
  );
}
