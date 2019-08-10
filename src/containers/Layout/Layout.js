import React from "react";
import Header from "../../components/Header/Header";
import FooterComp from "../../components/Footer/Footer";
import { Layout } from "antd";

const { Content } = Layout;

const LayoutComp = props => {
  return (
    <Layout className="layout">
      <Header isAuthenticated={props.auth} />
      <Content>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: "calc(100vh - 133px)",
            boxSizing: "border-box"
          }}
        >
          {props.children}
        </div>
      </Content>
      <FooterComp />
    </Layout>
  );
};

export default LayoutComp;
