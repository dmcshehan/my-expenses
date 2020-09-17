import { db } from "../../auth/firebase";
import {
  SHOW_ADD_EXPENSE_FORM,
  HIDE_ADD_EXPENSE_FORM,
} from "../actionTypes/expenseListDetails";

const expensesCollection = db.collection("expenses");

function fetchExpenses(listId) {
  return (dispatch, getState) => {
    const query = expensesCollection.where("listId", "==", listId);

    query.onSnapshot(function (querySnapshot) {
      const expenses = [];
      querySnapshot.forEach(function (doc) {
        expenses.push({ ...doc.data(), _id: doc.id });
      });
    });
  };
}

function addExpense(expense) {
  return (dispatch) => {
    expensesCollection
      .add()
      .then(() => {
        console.log("Expense added!");
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
