import React from "react";

//redux
import { connect } from "react-redux";
import { updateBaseCurrency } from "../../store/actionCreators/calculateExpenses";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//antd
import { Typography, Card } from "antd";

const { Text, Title } = Typography;

class TotalSpent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseCurrency: "USD"
    };

    this.currencyChangeHandler = this.currencyChangeHandler.bind(this);
    this.currencyChangeSubmitHandler = this.currencyChangeSubmitHandler.bind(
      this
    );
  }

  currencyChangeHandler(e) {
    this.setState({
      ...this.state,
      baseCurrency: e.target.value
    });
  }

  currencyChangeSubmitHandler() {
    const currentUserId = firebase.auth().currentUser.uid;
    console.log(currentUserId, this.state.baseCurrency);
    this.props.onBaseCurrencyUpdate(this.state.baseCurrency, currentUserId);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      baseCurrency: this.props.baseCurrency
    });
  }

  render() {
    return (
      <Card>
        <Title level={4}>Total Spent</Title>
        <Text>
          {this.props.amountSpent} {this.props.baseCurrency}
        </Text>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    amountSpent: state.expense.totalSpent,
    baseCurrency: state.expense.baseCurrency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBaseCurrencyUpdate: (newCurr, uid) =>
      dispatch(updateBaseCurrency(newCurr, uid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalSpent);
