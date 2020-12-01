import React from "react";
import { useSelector } from "react-redux";

import Title from "../Title/Title";
import ColumnHeader from "../../ColumnHeader/ColumnHeader";
import TotalAmount from "../TotalAmount/TotalAmount";

export default function Header() {
  const { expenses } = useSelector((state) => state.groupListDetails);
  return (
    <ColumnHeader>
      <Title />
      <TotalAmount expenses={expenses} />
    </ColumnHeader>
  );
}
