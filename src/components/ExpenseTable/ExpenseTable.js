import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { deleteExpenseAction } from "../../store/actionCreators/deleteExpense";
import { updateExpenseAction } from "../../store/actionCreators/updateExpense";

import { Table, Button, Input, InputNumber, DatePicker, Form } from "antd";
const ButtonGroup = Button.Group;

class ExpenseList extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  state = {
    keyBeignEdited: null,
    expObj: null
  };

  handleUpdate(key) {
    const { updateExpense } = this.props;

    this.props.form.validateFields((err, expenseObj) => {
      if (!err) {
        const newData = {
          ...expenseObj,
          date: new Date(expenseObj.date._d).getTime()
        };

        updateExpense(key, newData);
        this.setState({ keyBeignEdited: null });
      }
    });
  }

  render() {
    const { deleteExpense, expenses } = this.props;

    const { getFieldDecorator } = this.props.form;

    const columns = [
      {
        title: "Reason",
        dataIndex: "reason",
        key: "name",
        render: (text, expense) =>
          expense.key === this.state.keyBeignEdited ? (
            <Form.Item>
              {getFieldDecorator("reason", {
                rules: [
                  { required: true, message: "Please enter the reason!" }
                ],
                initialValue: expense.reason
              })(<Input placeholder="Enter Reason" name="reason" />)}
            </Form.Item>
          ) : (
            <p>{expense.reason}</p>
          )
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        render: (text, expense) =>
          expense.key === this.state.keyBeignEdited ? (
            <Form.Item>
              {getFieldDecorator("amount", {
                rules: [
                  { required: true, message: "Please enter the amount!" }
                ],
                initialValue: expense.amount
              })(
                <InputNumber
                  style={{ display: "block", width: "100%" }}
                  placeholder="Amount"
                  formatter={value =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace(/\$\s?|(,*)/g, "")}
                />
              )}
            </Form.Item>
          ) : (
            <p>{expense.amount}</p>
          )
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (text, expense) =>
          expense.key === this.state.keyBeignEdited ? (
            <Form.Item>
              {getFieldDecorator("date", {
                rules: [
                  {
                    required: true,
                    message: "Please select the Date!"
                  }
                ],
                initialValue: moment(new Date(expense.date))
              })(<DatePicker style={{ display: "block", width: "100%" }} />)}
            </Form.Item>
          ) : (
            <p>{moment(expense.date).format("MMM Do YY")}</p>
          )
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: (text, expense) =>
          expense.key === this.state.keyBeignEdited ? (
            <Button
              icon="check"
              type="primary"
              onClick={() => {
                this.handleUpdate(expense.key);
              }}
            />
          ) : (
            <ButtonGroup>
              <Button
                icon="delete"
                type="danger"
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure you want to delete ${expense.reason}`
                    )
                  ) {
                    deleteExpense(expense.key);
                  }
                }}
              />
              <Button
                icon="edit"
                type="primary"
                onClick={() =>
                  this.setState({
                    keyBeignEdited: expense.key,
                    expObj: expense
                  })
                }
              />
            </ButtonGroup>
          )
      }
    ];

    //date is stored as an object
    const data = expenses
      ? expenses.map(expense => ({
          ...expense,
          date: new Date(expense.date),
          key: expense.id
        }))
      : [];

    return <Table columns={columns} dataSource={data} />;
  }
}

const mapStateToProps = state => ({
  expenses: state.expense.expenses
});

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: key => dispatch(deleteExpenseAction(key)),
    updateExpense: (key, newData) => dispatch(updateExpenseAction(key, newData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "expense_table_update" })(ExpenseList));
