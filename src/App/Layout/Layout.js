import React from "react";
import { Layout } from "antd";
import RightLayout from "../RightLayout/RightLayout";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function LayoutComp({ children }) {
  return (
    <Layout>
      <Header />
      <RightLayout>{children}</RightLayout>
      <Footer />
    </Layout>
  );
}
