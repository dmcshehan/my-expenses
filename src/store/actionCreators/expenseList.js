import { db } from "../../auth/firebase";
import {
  CHANGE_EXPENSE_LISTS_SUCCESS,
  SELECT_EXPENSE_LIST_SUCCESS,
  SHOW_ADD_EXPENSE_LIST_FORM,
  HIDE_ADD_EXPENSE_LIST_FORM,
} from "../actionTypes/expenseList";

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

const expenseListCollection = db.collection("expenseLists");

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
};
