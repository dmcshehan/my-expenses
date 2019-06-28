import React, { Component } from "react";

//other Material Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";

//button icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
//Styles
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  actionIcon: {
    fontSize: 20
  }
});

class ExpenseList extends Component {
  render() {
    const { classes } = this.props;
    return this.props.allExpenses !== null ? (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reason</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.allExpenses.map((expense, index) => (
            <TableRow key={expense.id}>
              <TableCell align="left">{expense.reason}</TableCell>
              <TableCell align="right">{expense.cost}</TableCell>
              <TableCell align="right">
                {`${expense.date.getDate()}-${
                  expense.date.getMonth().toString().length === 1
                    ? "0" + (expense.date.getMonth() + 1).toString()
                    : expense.date.getMonth() + 1
                }-${expense.date.getFullYear()}`}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="Delete"
                  className={classes.actionIcon}
                  onClick={() => this.props.onDelete(expense.id)}
                >
                  <DeleteIcon fontSize="large" className={classes.actionIcon} />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  className={classes.actionIcon}
                  onClick={() => this.props.onUpdate(expense.id)}
                >
                  <EditIcon fontSize="large" className={classes.actionIcon} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <p>Loading</p>
    );
  }
}

export default withStyles(styles)(ExpenseList);
