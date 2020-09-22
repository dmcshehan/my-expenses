import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import { addExpenseList } from "../../../store/actionCreators/expenseList";

import { input, formComp, listName } from "./AddExpenseListForm.module.css";

const { Item } = Form;

export default function AddExpenseList() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user.user);
  const textInput = React.createRef();
  const [form] = Form.useForm();

  function onFinish(values) {
    dispatch(addExpenseList({ ...values, uid }));
  }

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <div>
      <Form
        onFinish={onFinish}
        form={form}
        layout='inline'
        className={formComp}
      >
        <Item name='title' className={listName}>
          <Input className={input} ref={textInput} />
        </Item>
        <Item name='title'>
          <Button type='primary' htmlType='submit'>
            Add List
          </Button>
        </Item>
      </Form>
    </div>
  );
}
