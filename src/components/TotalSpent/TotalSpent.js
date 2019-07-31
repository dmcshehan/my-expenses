import React from "react";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";

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
    const { classes } = this.props;
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
    amountSpent: state.calculate.totalSpent,
    baseCurrency: state.auth.user.baseCurrency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBaseCurrencyUpdate: (newCurr, uid) =>
      dispatch(actionCreators.updateBaseCurrency(newCurr, uid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalSpent);
