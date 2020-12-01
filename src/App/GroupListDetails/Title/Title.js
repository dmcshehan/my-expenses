import React from "react";
import { useSelector } from "react-redux";
import ColumnTitle from '../../ColumnTitle/ColumnTitle'

export default function ExpenseListTitle() {
  const { title } = useSelector((state) => state.expenseList.selected);
  return (
    <ColumnTitle>
      {title}
    </ColumnTitle>
  );
}
