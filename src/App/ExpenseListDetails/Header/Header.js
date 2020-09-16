import React from "react";

import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";

import { header } from "./Header.module.css";

export default function Header() {
  return (
    <div className={header}>
      <Title />
      <AddButton />
    </div>
  );
}
