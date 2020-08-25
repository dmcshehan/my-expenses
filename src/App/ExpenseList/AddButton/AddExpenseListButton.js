import React from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { showAddExpenseListForm } from "../../../store/actionCreators/addExpenseListForm";

export default function AddExpenseListButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showAddExpenseListForm());
  }
  return (
    <Button type='text' onClick={handleClick} icon={<PlusOutlined />}></Button>
  );
}
