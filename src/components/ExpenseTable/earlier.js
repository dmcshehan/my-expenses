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
            onClick={() => this.props.onDelete(expense.id)}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => this.props.onUpdate(expense.id)}
          >
            <EditIcon fontSize="large" />
          </IconButton>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>;
