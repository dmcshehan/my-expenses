import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "antd";

import { input } from "./AddEntryForm.module.css";

const { Item } = Form;

export default function AddExpenseList({ onSubmit }) {
  const dispatch = useDispatch();
  const textInput = React.createRef();
  const [form] = Form.useForm();

  useEffect(() => {
    textInput.current.focus();
  });

  function onFinish(values) {
    dispatch(onSubmit({ ...values }));
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
