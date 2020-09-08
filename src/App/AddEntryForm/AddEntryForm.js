import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "antd";

import { input } from "./AddEntryForm.module.css";

import { addExpenseList } from "../../store/actionCreators/expenseList";

const { Item } = Form;

export default function AddExpenseList({ onSubmit }) {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user.user);
  const textInput = React.createRef();
  const [form] = Form.useForm();

  useEffect(() => {
    textInput.current.focus();
  });

  function onFinish(values) {
    // dispatch(addExpenseList({ ...values, uid }));
    dispatch(onSubmit({ ...values, uid }));
  }

  return (
    <div>
      <Form onFinish={onFinish} form={form}>
        <Item name='title'>
          <Input className={input} ref={textInput} />
        </Item>
      </Form>
    </div>
  );
}
