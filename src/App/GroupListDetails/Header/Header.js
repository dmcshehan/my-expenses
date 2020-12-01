import React from "react";

import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";
import ColumnHeader from '../../ColumnHeader/ColumnHeader'


export default function Header() {
  return (
    <ColumnHeader>
      <Title />
      <AddButton />
    </ColumnHeader>
  );
}
