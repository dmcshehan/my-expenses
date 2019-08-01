import React from "react";

//material stuff
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";

// redux stuff
import { connect } from "react-redux";

//custom modules
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import TotalSpent from "../../components/TotalSpent/TotalSpent";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";
import StatusMessage from "../../components/StatusMessage/StatusMessage";

//redux
import * as actionCreators from "../../store/actionCreators/index";
import { deleteExpense } from "../../store/actionCreators/deleteExpense";

const styles = theme => ({
  mainTitle: {
    marginTop: theme.spacing(3)
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        cost: "",
        currency: "",
        date: new Date().getTime(),
        reason: "",
        id: "",
        userId: ""
      },
      statusMessage: null
    };

    this.formValueChnageHandler = this.formValueChnageHandler.bind(this);
    this.addExpenseHandler = this.addExpenseHandler.bind(this);
    this.deleteExpenseHandler = this.deleteExpenseHandler.bind(this);
    this.updateExpenseHandler = this.updateExpenseHandler.bind(this);
    this.updateIconBtnClickHandler = this.updateIconBtnClickHandler.bind(this);
    this.statusMessageCloseHandler = this.statusMessageCloseHandler.bind(this);
  }

  componentDidMount() {}

  updateExpenseHandler(e) {
    e.preventDefault();

    let newData = { ...this.state.formValues };
    this.props.updateExpense(newData);
  }

  statusMessageCloseHandler() {
    this.setState({
      ...this.state,
      statusMessage: null
    });
  }

  updateIconBtnClickHandler(id) {
    this.props.updateInit();
    let updateExpense = this.props.allExpenses.find(expense => {
      return expense.id === id;
    });

    if (updateExpense) {
      this.setState({
        ...this.state,
        formValues: { ...updateExpense }
      });
    }
  }

  addExpenseHandler(e, expense) {
    const { addExpense } = this.props;
    e.preventDefault();
    addExpense(expense);
  }

  deleteExpenseHandler(key) {
    const { deleteExpense } = this.props;
    deleteExpense(key);
  }

  formValueChnageHandler(e, type) {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [type]:
          type === "date" ? new Date(e.target.value).getTime() : e.target.value
      }
    });
  }

  render() {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={9}>
            <p>Space </p>
          </Grid>
          <Grid item xs={3}>
            <TotalSpent total={this.props.totalSpentInLKR} />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={9}>
            {this.state.statusMessage ? (
              <StatusMessage
                message={this.state.statusMessage}
                open={this.state.statusMessage ? true : false}
                close={this.statusMessageCloseHandler}
              />
            ) : null}
            <ExpenseTable
              expenses={this.props.allExpenses}
              onDelete={key => this.deleteExpenseHandler(key)}
              onUpdate={id => this.updateIconBtnClickHandler(id)}
            />
          </Grid>
          <Grid item xs={3}>
            <AddExpenseForm
              values={this.state.formValues}
              change={(e, type) => this.formValueChnageHandler(e, type)}
              onAdd={(e, expense) => this.addExpenseHandler(e, expense)}
              btn={this.props.updateInProgress}
              onUpdate={e => this.updateExpenseHandler(e)}
              baseCurrency={this.props.baseCurrency}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchExpenses: userId => dispatch(actionCreators.fetchExpenses(userId)),
    addExpense: expense => dispatch(actionCreators.addExpense(expense)),
    deleteExpense: key => dispatch(deleteExpense(key)),
    updateExpense: (id, newData) =>
      dispatch(actionCreators.updateExpense(id, newData)),
    updateInit: () => dispatch(actionCreators.updateInit())
  };
};

const mapStateToProps = state => {
  return {
    totalSpentInUSD: state.calculate.totalSpentInUSD,
    allExpenses: state.fetch.expenses,
    baseCurrency: state.auth.user.baseCurrency,
    user: state.auth.user,
    addStatusMessage: state.add.addStatusMessage,
    updateStatusMessage: state.update.updateStatusMessage,
    deleteStatusMessage: state.delete.deleteStatusMessage,
    updateInProgress: state.update.updateInProgress
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
