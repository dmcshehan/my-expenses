import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import produce from "immer";

import { deleteExpense } from "../../store/actionCreators/deleteExpense";
import { updateExpense } from "../../store/actionCreators/updateExpense";

import { Table, Button, Input, InputNumber, DatePicker } from "antd";
const ButtonGroup = Button.Group;

class ExpenseList extends Component {
  state = {
    keyBeignEdited: null,
    expObj: null
  };

  render() {
    const {
      //fetchExpenses,
      deleteExpense,
      updateExpense,
      expenses
    } = this.props;

    const columns = [
      {
        title: "Reason",
        dataIndex: "reason",
        key: "name",
        render: (text, expense) =>
          expense.key === this.state.keyBeignEdited ? (
            <Input
              value={this.state.expObj.reason}
              onChange={e => {
                e.persist();
                this.setState(
                  produce(draft => {
                    draft.expObj.reason = e.target.value;
                  })
                );
              }}
            />
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
            <InputNumber
              defaultValue={this.state.expObj.amount}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|(,*)/g, "")}
              onChange={value => {
                this.setState(
                  produce(draft => {
                    draft.expObj.amount = value;
                  })
                );
              }}
            />
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
            <DatePicker
              defaultValue={moment(new Date(expense.date))}
              onChange={dateObj => {
                this.setState(
                  produce(draft => {
                    draft.expObj.date = dateObj._d;
                  })
                );
              }}
            />
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
                updateExpense(expense.key, this.state.expObj);
                this.setState({
                  keyBeignEdited: null,
                  expObj: null
                });
              }}
            />
          ) : (
            <ButtonGroup>
              <Button
                icon="delete"
                type="danger"
                onClick={() => deleteExpense(expense.key)}
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
          date: expense.date.toString()
        }))
      : [];

    return <Table columns={columns} dataSource={data} />;
  }
}

const mapStateToProps = state => ({
  expenses: state.fetch.expenses
});

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: key => dispatch(deleteExpense(key)),
    updateExpense: (key, newData) => dispatch(updateExpense(key, newData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);
