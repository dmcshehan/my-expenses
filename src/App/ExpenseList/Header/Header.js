import React from "react";
import Title from "../Title/ExpenseListTitle";
import AddButton from "../AddButton/AddExpenseListButton";

//styles
import { header } from "./Header.module.css";

export default function Header() {
  return (
    <div className={header}>
      <Title />
      <AddButton />
    </div>
  );
}
