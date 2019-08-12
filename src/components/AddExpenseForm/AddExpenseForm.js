import React from "react";
import { addExpenseAction } from "../../store/actionCreators/addExpense";
import { connect } from "react-redux";
//antd
import { Form, Input, Button, InputNumber, DatePicker, Card } from "antd";

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
    const { addExpense } = this.props;
    this.props.form.validateFields((err, expenseObj) => {
      if (!err) {
        addExpense(expenseObj);
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

const mapDispatchToProps = dispatch => ({
  addExpense: expenseObj => dispatch(addExpenseAction(expenseObj))
});

export default connect(
  null,
  mapDispatchToProps
)(Form.create({ name: "add_expense_form" })(AddExpenseForm));
