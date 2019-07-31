import React from "react";
import Header from "../../components/Header/Header";
import FooterComp from "../../components/Footer/Footer";
import { Layout, Menu, Breadcrumb } from "antd";

const { Content, Footer } = Layout;

const LayoutComp = props => {
  return (
    <Layout className="layout">
      <Header isAuthenticated={props.auth} />
      <Content>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <FooterComp />
    </Layout>
  );
};

export default LayoutComp;
