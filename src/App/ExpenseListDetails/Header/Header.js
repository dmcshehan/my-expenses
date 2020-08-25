import React from "react";
import { PageHeader } from "antd";

import { header } from "./Header.module.css";

export default function Header() {
  return (
    <PageHeader
      title='Title'
      subTitle='This is a subtitle'
      className={header}
    ></PageHeader>
  );
}
