import React from "react";

//Material UI componenets
import Paper from "@material-ui/core/Paper";

import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";

//antd
import { Form, Icon, Input, Button } from "antd";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  Inputs: {
    displa: "block"
  },
  button: {
    color: "#ffffff",
    marginTop: theme.spacing(3)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const AddExpenseForm = props => {
  const classes = useStyles();

  const dateInFormat = new Date(props.values.date);
  let date = `${dateInFormat.getFullYear()}-${
    dateInFormat.getMonth().toString().length === 1
      ? "0" + (dateInFormat.getMonth() + 1).toString()
      : dateInFormat.getMonth() + 1
  }-${dateInFormat.getDate()}`;

  return (
    <Paper className={classes.root}>
      <form>
        <Form.Item>
          <Input
            size="large"
            value={props.values.reason}
            onChange={e => props.change(e, "reason")}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            value={props.values.cost}
            onChange={e => props.change(e, "cost")}
          />
        </Form.Item>
        <Form.Item>
          <Input type="date" onChange={e => props.change(e, "date")} />
        </Form.Item>

        <Form.Item>
          {!props.btn ? (
            <Button
              htmlType="submit"
              type="primary"
              className={classes.button}
              onClick={e => {
                props.submit(e);
              }}
            >
              Add
            </Button>
          ) : (
            <Button
              htmlType="submit"
              type="primary"
              className={classes.button}
              onClick={e => {
                props.update(e);
              }}
            >
              Update
            </Button>
          )}
        </Form.Item>
      </form>
    </Paper>
  );
};

export default AddExpenseForm;
