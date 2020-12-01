import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, DatePicker, InputNumber, Button, Select } from "antd";

import { addExpense } from "../../../store/actionCreators/expenseListDetails";

import { input } from "./AddExpenseForm.module.css";

const { Item } = Form;
const { Option } = Select;

export default function AddExpenseList() {
  const dispatch = useDispatch();
  const textInput = React.createRef();
  const [form] = Form.useForm();

  const { uid } = useSelector((state) => state.user.user);
  const { _id } = useSelector((state) => state.expenseList.selected);

  function onFinish(values) {
    dispatch(
      addExpense({
        ...values,
        listId: _id,
        uid,
        date: values.date._d,
        createdOn: new Date(),
        lastUpdatedOn: false,
      })
    ).then(() => {
      form.resetFields();
    });
  }

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <Form
      onFinish={onFinish}
      onClick={(e) => e.stopPropagation()}
      form={form}
      layout='inline'
      initialValues={{ currency: "LKR" }}
    >
      <Item name='reason'>
        <Input className={input} ref={textInput} placeholder='Reason' />
      </Item>
      <Item name='date'>
        <DatePicker />
      </Item>
      <Item name='currency'>
        <Select style={{ width: 120 }}>
          <Option value='LKR'>Rs</Option>
        </Select>
      </Item>
      <Item name='cost'>
        <InputNumber placeholder='Cost' />
      </Item>
      <Item>
        <Button type='primary' htmlType='submit'>
          Add Expense
        </Button>
      </Item>
    </Form>
  );
}
