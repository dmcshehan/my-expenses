import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { addButton } from "./AddButton.module.css";

export default function AddExpenseListButton({ onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <Button
      type='text'
      onClick={handleClick}
      icon={<PlusOutlined className={addButton} />}
    ></Button>
  );
}
