import {
  ON_EXPENSE_ADD_SUCCESS,
  ON_EXPENSE_ADD_START,
  ON_EXPENSE_ADD_FAIL
} from "../actionTypes/expense";

import { fetchExpensesAction } from "./fetchExpenses";

const addExpenseSuccess = id => {
  return {
    type: ON_EXPENSE_ADD_SUCCESS,
    id: id
  };
};

const addExpenseStart = () => {
  return {
    type: ON_EXPENSE_ADD_START
  };
};

const addExpenseFail = () => {
  return {
    type: ON_EXPENSE_ADD_FAIL
  };
};

export const addExpenseAction = expenseObj => {
  return (dispatch, getState, getFirebase) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;

    const storingExpenseObj = {
      ...expenseObj,
      userId: currentUserId,
      date: new Date(expenseObj.date._d).getTime()
    };

    console.log(storingExpenseObj);

    const firebase = getFirebase();
    firebase.push("expenses", storingExpenseObj).then(result => {
      console.log("Added", result);
    });
  };
};
