import React from "react";
import { useSelector } from "react-redux";
import { PageHeader } from "antd";

import { header } from "./Header.module.css";

export default function Header() {
  const { selected } = useSelector((state) => state.expenseList);

  const { title } = selected;

  return <PageHeader title={title} className={header}></PageHeader>;
}
