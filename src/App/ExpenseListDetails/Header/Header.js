import React from "react";
import { useSelector } from "react-redux";

import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";

import { header } from "./Header.module.css";

export default function Header() {
  const { selected } = useSelector((state) => state.expenseList);

  return (
    <div className={header}>
      <Title />
      <AddButton />
    </div>
  );
}
