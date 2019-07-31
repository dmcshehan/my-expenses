import React, { useState } from "react";

//antd
import {
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
  Card,
  Typography
} from "antd";

const { Text } = Typography;

const AddExpenseForm = props => {
  const [values, setValues] = useState({
    reason: "",
    amount: "",
    date: null
  });

  const updateValues = (e, type) => {
    switch (type) {
      case "reason":
        setValues({ ...values, reason: e.target.value });
        break;
      case "amount":
        setValues({ ...values, amount: e });
        break;
      case "date":
        setValues({ ...values, date: e._d ? e._d : null });
        break;
      default:
        setValues({ ...values });
    }
  };

  console.log(values);

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
            value={values.reason}
            onChange={e => updateValues(e, "reason")}
            name="reason"
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
            onChange={e => updateValues(e, "amount")}
          />
        </Form.Item>
        <Form.Item>
          <Text strong style={{ fontSize: 16 }}>
            Expense Date
          </Text>
          <DatePicker
            style={{ display: "block", width: "100%" }}
            size="large"
            onChange={e => updateValues(e, "date")}
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
