import {
  ON_ADD_EXPENSE_SUCCESS,
  ON_ADD_EXPENSE_FAIL
} from "../actionTypes/expense";

// import { fetchExpensesAction } from "./fetchExpenses";

const onAddExpenseSuccess = id => {
  return {
    type: ON_ADD_EXPENSE_SUCCESS,
    id: id
  };
};

const onAddExpenseFail = error => {
  return {
    type: ON_ADD_EXPENSE_FAIL,
    payload: {
      error
    }
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

    const firebase = getFirebase();

    firebase
      .push("expenses", storingExpenseObj)
      .then(result => {
        console.log("Added", result);
        dispatch(onAddExpenseSuccess());
      })
      .catch(error => {
        dispatch(onAddExpenseFail(error));
      });
  };
};
