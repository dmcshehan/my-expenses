import React from "react";

import { Row, Col } from "antd";
// redux stuff
import { connect } from "react-redux";

//custom modules
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import TotalSpent from "../../components/TotalSpent/TotalSpent";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";

//redux
import * as actionCreators from "../../store/actionCreators/index";
import { deleteExpense } from "../../store/actionCreators/deleteExpense";

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
      <>
        <Row gutter={32}>
          <Col span={18}>
            <p>Space </p>
          </Col>
          <Col span={6} style={{ marginBottom: 32 }}>
            <TotalSpent total={this.props.totalSpentInLKR} />
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={18}>
            <ExpenseTable
              expenses={this.props.allExpenses}
              onDelete={key => this.deleteExpenseHandler(key)}
              onUpdate={id => this.updateIconBtnClickHandler(id)}
            />
          </Col>
          <Col span={6}>
            <AddExpenseForm
              values={this.state.formValues}
              change={(e, type) => this.formValueChnageHandler(e, type)}
              onAdd={(e, expense) => this.addExpenseHandler(e, expense)}
              btn={this.props.updateInProgress}
              onUpdate={e => this.updateExpenseHandler(e)}
              baseCurrency={this.props.baseCurrency}
            />
          </Col>
        </Row>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
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
)(Dashboard);
