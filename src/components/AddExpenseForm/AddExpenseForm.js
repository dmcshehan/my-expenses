import React from "react";

//antd
import {
  Form,
  Icon,
  Input,
  Button,
  InputNumber,
  DatePicker,
  Card,
  Typography
} from "antd";

const { Text, Title } = Typography;

const AddExpenseForm = props => {
  const dateInFormat = new Date(props.values.date);
  let date = `${dateInFormat.getFullYear()}-${
    dateInFormat.getMonth().toString().length === 1
      ? "0" + (dateInFormat.getMonth() + 1).toString()
      : dateInFormat.getMonth() + 1
  }-${dateInFormat.getDate()}`;

  return (
    <Card>
      <form>
        <Form.Item>
          <Text strong style={{ fontSize: 16 }}>
            Reason
          </Text>
          <Input
            placeholder="Shopping"
            size="large"
            value={props.values.reason}
            onChange={e => props.change(e, "reason")}
          />
        </Form.Item>
        <Form.Item>
          <Text strong style={{ fontSize: 16 }}>
            Amount
          </Text>
          <InputNumber
            style={{ display: "block", width: "100%" }}
            placeholder="Amount"
            size="large"
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        <Form.Item>
          <Text strong style={{ fontSize: 16 }}>
            Expense Date
          </Text>
          <DatePicker
            style={{ display: "block", width: "100%" }}
            size="large"
            onChange={() => {}}
          />
        </Form.Item>

        <Form.Item>
          {!props.btn ? (
            <Button
              block
              htmlType="submit"
              type="primary"
              onClick={e => {
                props.submit(e);
              }}
            >
              Add
            </Button>
          ) : (
            <Button
              block
              htmlType="submit"
              type="primary"
              onClick={e => {
                props.update(e);
              }}
            >
              Update
            </Button>
          )}
        </Form.Item>
      </form>
    </Card>
  );
};

export default AddExpenseForm;
