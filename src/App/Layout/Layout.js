import React from "react";
import { Layout } from "antd";
import RightLayout from "../RightLayout/RightLayout";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Sider from "../Sider/Sider";

export default function LayoutComp({ children }) {
  return (
    <Layout>
      <Sider />
      <RightLayout>{children}</RightLayout>
    </Layout>
  );
}
