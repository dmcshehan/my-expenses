import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function ContentComp({ children }) {
  return (
    <Content style={{ margin: "24px 16px 0", backgroundColor: "white" }}>
      <div
        className='site-layout-background'
        style={{ padding: 24, minHeight: "calc(100vh - 160px)" }}
      >
        {children}
      </div>
    </Content>
  );
}
