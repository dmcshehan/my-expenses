import React from "react";

//material stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";

import Aux from "../../hoc/Aux/Aux";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//import currencies from "../../shared/currencies/currencies";

const styles = theme => ({
  mainTitle: {
    fontWeight: 300
  },
  total: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  formControl: {
    minWidth: 240
  },
  button: {
    color: "#fff",
    marginTop: theme.spacing(2)
  }
});

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
      <Aux>
        <Grid item xs={12}>
          <Paper className={classes.total}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              className={classes.mainTitle}
              align="right"
            >
              Total Spent
            </Typography>
            <Typography
              variant="h5"
              display="block"
              gutterBottom
              className={classes.mainTitle}
              align="right"
            >
              {this.props.amountSpent} {this.props.baseCurrency}
            </Typography>
          </Paper>
        </Grid>
      </Aux>
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
)(withStyles(styles)(TotalSpent));
