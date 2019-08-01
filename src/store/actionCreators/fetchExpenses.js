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

export const fetchExpenses = () => {
  return (dispatch, getState) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;

    axios
      .get(`/${currentUserId}.json`)
      .then(response => {
        let allData = null;
        if (response.data !== null) {
          allData = Object.keys(response.data).map(uniqueId => ({
            ...response.data[uniqueId],
            key: uniqueId
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
