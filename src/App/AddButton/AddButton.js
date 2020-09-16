import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function AddExpenseListButton({ onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <Button type='text' onClick={handleClick} icon={<PlusOutlined />}></Button>
  );
}
