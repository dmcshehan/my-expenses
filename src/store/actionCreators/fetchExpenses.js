import * as actionTypes from "../actionTypes/index";
import axios from "../../axios/axios-expenses";

import * as actionCreators from "./index";

const fetchExpensesSuccess = expensesObject => {
  return {
    type: actionTypes.ON_EXPENSES_FETCH_SUCCESS,
    allExpenses: expensesObject
  };
};

const fetchExpensesFail = () => {
  return {
    type: actionTypes.ON_EXPENSES_FETCH_FAIL
  };
};

const fetchExpensesStart = () => {
  return {
    type: actionTypes.ON_EXPENSES_FETCH_START
  };
};

export const fetchExpenses = userId => {
  return dispatch => {
    let queryParams = `?orderBy="userId"&equalTo="${userId}"`;

    axios
      .get(`/expenses.json${queryParams}`)
      .then(response => {
        let allData = null;
        if (response.data !== null) {
          allData = Object.keys(response.data).map(uniqueId => ({
            ...response.data[uniqueId],
            id: uniqueId,
            date: new Date(response.data[uniqueId].date)
          }));
        }
        dispatch(fetchExpensesStart());
        dispatch(fetchExpensesSuccess(allData));
        dispatch(actionCreators.calculateAmountSpent(allData));
      })
      .catch(error => {
        console.log("Error", error);
        dispatch(fetchExpensesFail(error));
      });
  };
};
