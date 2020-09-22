import React from "react";
import { Layout } from "antd";
import RightLayout from "../RightLayout/RightLayout";

//import Sider from "../Sider/Sider";

export default function LayoutComp({ children }) {
  return (
    <Layout>
      <RightLayout>{children}</RightLayout>
    </Layout>
  );
}
