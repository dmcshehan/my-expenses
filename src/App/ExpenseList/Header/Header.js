import React from "react";
import Title from "../Title/ExpenseListTitle";
import AddButton from "../AddButton/AddExpenseListButton";
import ColumnHeader from '../../ColumnHeader/ColumnHeader'


export default function Header() {
  return (
    <ColumnHeader>
      <Title />
      <AddButton />
    </ColumnHeader>
  );
}
