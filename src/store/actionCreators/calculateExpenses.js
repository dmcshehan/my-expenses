import {
  CALCULATE_TOTAL_SPENT_SUCCESS,
  BASE_CURRENCY_UPDATE_SUCCESS
} from "../actionTypes/expense";

import axios from "../../axios/axios-expenses";

const calculatedTotalSpentSuccess = totalSpent => {
  return {
    type: CALCULATE_TOTAL_SPENT_SUCCESS,
    payload: {
      totalSpent
    }
  };
};

export const calculateAmountSpent = allExpenses => {
  return (dispatch, getState) => {
    if (allExpenses.length !== 0) {
      const allExpArray = [];
      allExpenses.forEach(expObj => {
        allExpArray.push(expObj.amount);
      });

      const totalSpent = allExpArray.reduce((a, b) => a + b, 0);
      dispatch(calculatedTotalSpentSuccess(totalSpent));
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
