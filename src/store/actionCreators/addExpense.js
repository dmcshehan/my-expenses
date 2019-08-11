import * as actionTypes from "../actionTypes/index";
import axios from "../../axios/axios-expenses";

import { fetchExpensesAction } from "./fetchExpenses";

const addExpenseSuccess = id => {
  return {
    type: actionTypes.ON_EXPENSE_ADD_SUCCESS,
    id: id
  };
};

const addExpenseStart = () => {
  return {
    type: actionTypes.ON_EXPENSE_ADD_START
  };
};

const addExpenseFail = () => {
  return {
    type: actionTypes.ON_EXPENSE_ADD_FAIL
  };
};

export const addExpense = expense => {
  return (dispatch, getState, getFirebase) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;

    const firebase = getFirebase();

    firebase.push("expenses", { expense }).then(() => {
      //
    });
  };
};
