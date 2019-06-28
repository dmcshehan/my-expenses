import * as actionTypes from "../actionTypes/index";
import axios from "../../axios/axios-expenses";
// import axiosCurrency from "axios";

const calculatedTotalSpentSuccess = totalSpent => {
  return {
    type: actionTypes.CALCULATE_TOTAL_SPENT_SUCCESS,
    totalSpent: totalSpent
  };
};

const calculatedTotalSpentStart = () => {
  return {
    type: actionTypes.CALCULATE_TOTAL_SPENT_START
  };
};

export const calculateAmountSpent = allExpenses => {
  return (dispatch, getState) => {
    //const state = getState();

    //getting the base currency from the current loggedin user

    //const baseCurrency = state.auth.user.baseCurrency;

    //maps over all expense objects and push cost into an array

    if (allExpenses.length !== 0) {
      let allExpensList = [];

      Object.keys(allExpenses).forEach(expenseId => {
        allExpensList.push(allExpenses[expenseId].cost);
      });

      let totalCost = allExpensList.reduce((accumilator, currentVal) => {
        return accumilator + +currentVal;
      }, 0);

      //calculates the total spent in base currency
      dispatch(calculatedTotalSpentStart());
      dispatch(calculatedTotalSpentSuccess(totalCost));
    }
  };
};

const onBaseCurrencyUpdateSuccess = newBaseCurrency => {
  return {
    type: actionTypes.BASE_CURRENCY_UPDATE_SUCCESS,
    newBaseCurrency: newBaseCurrency
  };
};

export const updateBaseCurrency = (newBaseCurrency, uid) => {
  return dispatch => {
    axios
      .get(`/users.json?orderBy="userId"&equalTo="${uid}"`)
      .then(response => {
        Object.keys(response.data).forEach(uniqueId => {
          const userObject = {
            userId: uid,
            baseCurrency: newBaseCurrency
          };

          axios
            .put(`/users/${uniqueId}.json`, userObject)
            .then(response => {
              dispatch(onBaseCurrencyUpdateSuccess(newBaseCurrency));
            })
            .catch(error => {
              console.log(error);
            });
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };
};
