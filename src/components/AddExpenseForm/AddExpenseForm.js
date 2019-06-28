import React from "react";

//Material UI componenets
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Send";
import UpdateIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  textFields: {
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

  let date = `${props.values.date.getFullYear()}-${
    props.values.date.getMonth().toString().length === 1
      ? "0" + (props.values.date.getMonth() + 1).toString()
      : props.values.date.getMonth() + 1
  }-${props.values.date.getDate()}`;

  return (
    <Paper className={classes.root}>
      <form>
        <FormControl fullWidth>
          <TextField
            label="Reason"
            margin="normal"
            value={props.values.reason}
            onChange={e => props.change(e, "reason")}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Cost"
            margin="normal"
            type="number"
            value={props.values.cost}
            onChange={e => props.change(e, "cost")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {props.baseCurrency}
                </InputAdornment>
              )
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Date"
            margin="normal"
            type="date"
            defaultValue={date}
            onChange={e => props.change(e, "date")}
          />
        </FormControl>

        <FormControl>
          {!props.btn ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={e => {
                props.submit(e);
              }}
            >
              Add
              <DeleteIcon className={classes.rightIcon} />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={e => {
                props.update(e);
              }}
            >
              Update
              <UpdateIcon className={classes.rightIcon} />
            </Button>
          )}
        </FormControl>
      </form>
    </Paper>
  );
};

export default AddExpenseForm;
