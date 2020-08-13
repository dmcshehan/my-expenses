import React from "react";
import { Layout } from "antd";
import RightLayout from "../RightLayout/RightLayout";

import Sider from "../Sider/Sider";
import ExpenseList from "../ExpenseList/ExpenseList";

export default function LayoutComp({ children }) {
  return (
    <Layout>
      <Sider />
      <RightLayout>{children}</RightLayout>
    </Layout>
  );
}
