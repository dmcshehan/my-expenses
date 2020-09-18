import React from "react";
import { Layout } from "antd";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { content } from "./RIghtLayout.module.css";

export default function RightLayout({ children }) {
  return (
    <Layout>
      <Header />
      <div className={content}>{children}</div>

      {/* <Footer /> */}
    </Layout>
  );
}
