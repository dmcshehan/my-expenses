import { db } from "../../auth/firebase";
import moment from "moment";

import { displaySuccessNotification } from "./notification";
import {
  SHOW_ADD_EXPENSE_FORM,
  HIDE_ADD_EXPENSE_FORM,
  FETCH_EXPENSES_SUCCESS,
} from "../actionTypes/expenseListDetails";

const expensesCollection = db.collection("expenses");

function fetchExpenses(listId) {
  return (dispatch) => {
    console.log(listId);
    const query = expensesCollection.where("listId", "==", listId);

    query.onSnapshot(function (querySnapshot) {
      const expenses = [];
      querySnapshot.forEach(function (doc) {
        const data = { ...doc.data() };

        expenses.push({
          _id: doc.id,
          ...data,
          date: moment(data.date.seconds * 1000),
        });
      });

      console.log(expenses);

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
    return new Promise(function (resolve, reject) {
      expensesCollection
        .add(expense)
        .then(function () {
          resolve("Expense List updated!");
          dispatch(
            displaySuccessNotification({
              title: "Expense added!",
            })
          );
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        }); //end
    });
  };
}
function updateExpense(_id, newExpense) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      expensesCollection
        .doc(_id)
        .set(
          {
            ...newExpense,
          },
          { merge: true }
        )
        .then(function () {
          resolve("Expense updated!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        }); //end
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

export {
  fetchExpenses,
  addExpense,
  showAddExpenseForm,
  hideAddExpenseForm,
  updateExpense,
};
