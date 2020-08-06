import React from "react";
import { Layout } from "antd";

//styles
import { content } from "./Content.module.css";

const { Content } = Layout;

export default function ContentComp({ children }) {
  return (
    <Content className={content}>
      <div
        className='site-layout-background'
        style={{ padding: 24, minHeight: "calc(100vh - 160px)" }}
      >
        {children}
      </div>
    </Content>
  );
}
