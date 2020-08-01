import React from "react";
import { Layout } from "antd";
import Sider from "../Sider/Sider";
import RightLayout from "../RightLayout/RightLayout";

export default function LayoutComp({ children }) {
  return (
    <Layout>
      <Sider />
      <RightLayout>{children}</RightLayout>
    </Layout>
  );
}
