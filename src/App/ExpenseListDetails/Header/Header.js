import React from "react";
import { PageHeader } from "antd";

export default function Header() {
  return (
    <PageHeader
      title='Title'
      className='site-page-header'
      subTitle='This is a subtitle'
    ></PageHeader>
  );
}
