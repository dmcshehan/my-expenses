import React from "react";
import { siderElWrapper } from "./SiderElWrapper.module.scss";

export default function SiderElWrapper({ children }) {
  return <div className={siderElWrapper}>{children}</div>;
}
