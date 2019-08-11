import React, { useState } from "react";
//import { addExpense } from "../../store/actionCreators/addExpense";
import moment from "moment";
//antd
import {
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
  Card,
  Icon,
  Typography
} from "antd";

const { Text } = Typography;

class AddExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    reason: "",
    amount: "",
    date: null
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("reason", {
              rules: [{ required: true, message: "Please enter the reason!" }]
            })(<Input placeholder="Enter Reason" size="large" name="reason" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("amount", {
              rules: [{ required: true, message: "Please enter the amount!" }],
              initialValue: 1000
            })(
              <InputNumber
                style={{ display: "block", width: "100%" }}
                placeholder="Amount"
                size="large"
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("date", {
              rules: [
                {
                  required: true,
                  message: "Please select the Date!"
                }
              ]
            })(
              <DatePicker
                style={{ display: "block", width: "100%" }}
                size="large"
              />
            )}
          </Form.Item>

          <Form.Item>
            <Button block htmlType="submit" type="primary">
              Add Expense
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default Form.create({ name: "add_expense_form" })(AddExpenseForm);
