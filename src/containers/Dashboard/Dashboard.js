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

//redux
import * as actionCreators from "../../store/actionCreators/index";

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
        reason: "default",
        cost: "1000",
        currency: "",
        date: new Date()
      },
      updateInProgress: false
    };

    this.formValueChnageHandler = this.formValueChnageHandler.bind(this);
    this.addExpenseHandler = this.addExpenseHandler.bind(this);
    this.deleteExpenseHandler = this.deleteExpenseHandler.bind(this);
    this.updateExpenseHandler = this.updateExpenseHandler.bind(this);
    this.updateIconBtnClickHandler = this.updateIconBtnClickHandler.bind(this);
  }

  componentDidMount() {}

  updateExpenseHandler(e) {
    e.preventDefault();

    let newData = this.state.formValues;
    const expenseId = newData["id"];
    delete newData["id"];
    console.log(newData, expenseId);
    this.props.updateExpense(expenseId, newData);
  }

  updateIconBtnClickHandler(id) {
    let updateExpense = this.props.allExpenses.find(expense => {
      return expense.id === id;
    });
    if (updateExpense) {
      this.setState({
        ...this.state,
        updateInProgress: true,
        formValues: updateExpense
      });
    }
  }

  addExpenseHandler(e) {
    e.preventDefault();
    const newData = this.state.formValues;
    newData.userId = this.props.user.uid;
    newData.currency = this.props.user.baseCurrency;

    this.props.addExpense({
      ...newData
    });
  }

  deleteExpenseHandler(id) {
    this.props.deleteExpense(id);
  }

  formValueChnageHandler(e, type) {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [type]: type === "date" ? new Date(e.target.value) : e.target.value
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
            <ExpenseTable
              allExpenses={this.props.allExpenses}
              onDelete={id => this.deleteExpenseHandler(id)}
              onUpdate={id => this.updateIconBtnClickHandler(id)}
            />
          </Grid>
          <Grid item xs={3}>
            <AddExpenseForm
              values={this.state.formValues}
              change={(e, type) => this.formValueChnageHandler(e, type)}
              submit={e => this.addExpenseHandler(e)}
              btn={this.state.updateInProgress}
              update={e => this.updateExpenseHandler(e)}
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
    deleteExpense: id => dispatch(actionCreators.deleteExpense(id)),
    updateExpense: (id, newData) =>
      dispatch(actionCreators.updateExpense(id, newData))
  };
};

const mapStateToProps = state => {
  return {
    totalSpentInUSD: state.calculate.totalSpentInUSD,
    allExpenses: state.fetch.expenses,
    baseCurrency: state.auth.user.baseCurrency,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
