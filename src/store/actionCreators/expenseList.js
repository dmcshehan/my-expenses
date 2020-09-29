import { db } from "../../auth/firebase";
import {
  CHANGE_EXPENSE_LISTS_SUCCESS,
  SELECT_EXPENSE_LIST_SUCCESS,
  SHOW_ADD_EXPENSE_LIST_FORM,
  HIDE_ADD_EXPENSE_LIST_FORM,
  UPDATE_EXPENSE_LIST_SUCCESS,
} from "../actionTypes/expenseList";

import { fetchExpenses } from "./expenseListDetails";

const expenseListCollection = db.collection("expenseLists");

function showAddExpenseListForm() {
  return (dispatch) => {
    dispatch({
      type: SHOW_ADD_EXPENSE_LIST_FORM,
    });
  };
}

function hideAddExpenseListForm() {
  return (dispatch) => {
    dispatch({
      type: HIDE_ADD_EXPENSE_LIST_FORM,
    });
  };
}

function addExpenseList(expenseList) {
  return (dispatch) => {
    expenseListCollection
      .add(expenseList)
      .then(function () {
        console.log("Expense List added!");
        dispatch(hideAddExpenseListForm());
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };
}

function updateExpenseList(_id, newData) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      expenseListCollection
        .doc(_id)
        .set(
          {
            ...newData,
          },
          { merge: true }
        )
        .then(function () {
          resolve("Expense List updated!");
          dispatch({
            type: UPDATE_EXPENSE_LIST_SUCCESS,
            payload: {
              updated: {
                ...newData,
                _id,
              },
            },
          });
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
  };
}

function fetchExpenseLists() {
  return (dispatch, getState) => {
    const { uid } = getState().user.user;

    const query = expenseListCollection.where("uid", "==", uid);

    let unsubscribe = query.onSnapshot(function (querySnapshot) {
      const expenseLists = [];
      querySnapshot.forEach(function (doc) {
        expenseLists.push({ ...doc.data(), _id: doc.id });
      });

      dispatch({
        type: CHANGE_EXPENSE_LISTS_SUCCESS,
        payload: {
          expenseLists,
        },
      });

      const { selected } = getState().expenseList;

      // if (!selected) {
      //   dispatch(selectDailyExpensesList());
      // }
    });

    return unsubscribe;
  };
}

function selectExpenseList(listId) {
  return (dispatch) => {
    dispatch({
      type: SELECT_EXPENSE_LIST_SUCCESS,
      payload: {
        listId,
      },
    });

    dispatch(fetchExpenses(listId));
  };
}

// Not used

function addDailyExpensesList(uid) {
  return (dispatch) => {
    expenseListCollection
      .add({
        title: "Daily Expenses",
        uid,
      })
      .then(function () {
        console.log("Expense List added!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };
}

function selectDailyExpensesList() {
  return (dispatch, getState) => {
    const { expenseLists } = getState().expenseList;

    console.log("expenseLists", expenseLists);

    const { _id } = expenseLists.find(
      (expenseList) => expenseList.title === "Daily Expenses"
    );

    dispatch(selectExpenseList(_id));
  };
}

export {
  addExpenseList,
  fetchExpenseLists,
  selectExpenseList,
  addDailyExpensesList,
  selectDailyExpensesList,
  showAddExpenseListForm,
  hideAddExpenseListForm,
  updateExpenseList,
};
