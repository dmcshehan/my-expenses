import React from "react";
import { header } from "./TableHeader.module.css";
import TotalAmount from "./../TotalAmount/TotalAmount";

export default function TableHeader({ title, expenses }) {
  return (
    <div className={header}>
      <h4>{title}</h4>
      <TotalAmount expenses={expenses} />
    </div>
  );
}
