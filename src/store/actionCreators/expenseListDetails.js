import { db } from "../../auth/firebase";

import { displaySuccessNotification } from "./notification";
import {
  SHOW_ADD_EXPENSE_FORM,
  HIDE_ADD_EXPENSE_FORM,
  FETCH_EXPENSES_SUCCESS,
} from "../actionTypes/expenseListDetails";

const expensesCollection = db.collection("expenses");

function fetchExpenses(listId) {
  return (dispatch) => {
    const query = expensesCollection.where("listId", "==", listId);

    query.onSnapshot(function (querySnapshot) {
      const expenses = [];
      querySnapshot.forEach(function (doc) {
        expenses.push({ ...doc.data(), _id: doc.id });
      });

      dispatch({
        type: FETCH_EXPENSES_SUCCESS,
        payload: {
          expenses,
        },
      });
    });
  };
}

function addExpense(expense) {
  return (dispatch) => {
    expensesCollection
      .add(expense)
      .then(() => {
        dispatch(
          displaySuccessNotification({
            title: "Expense added!",
          })
        );
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
}

function showAddExpenseForm() {
  return (dispatch) => {
    dispatch({
      type: SHOW_ADD_EXPENSE_FORM,
    });
  };
}

function hideAddExpenseForm() {
  return (dispatch) => {
    dispatch({
      type: HIDE_ADD_EXPENSE_FORM,
    });
  };
}

export { fetchExpenses, addExpense, showAddExpenseForm, hideAddExpenseForm };
