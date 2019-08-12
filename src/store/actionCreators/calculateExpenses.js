import {
  CALCULATE_TOTAL_SPENT_SUCCESS,
  CALCULATE_TOTAL_SPENT_START,
  BASE_CURRENCY_UPDATE_SUCCESS
} from "../actionTypes/expense";

import axios from "../../axios/axios-expenses";

const calculatedTotalSpentSuccess = totalSpent => {
  return {
    type: CALCULATE_TOTAL_SPENT_SUCCESS,
    totalSpent: totalSpent
  };
};

const calculatedTotalSpentStart = () => {
  return {
    type: CALCULATE_TOTAL_SPENT_START
  };
};

export const calculateAmountSpent = allExpenses => {
  return (dispatch, getState) => {
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
    type: BASE_CURRENCY_UPDATE_SUCCESS,
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
