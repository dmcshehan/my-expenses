import { ON_EXPENSES_DELETE_SUCCESS } from "../actionTypes/expense";
import axios from "../../axios/axios-expenses";

import { fetchExpensesAction } from "./fetchExpenses";

const deleteExpenseSuccess = () => {
  return {
    type: ON_EXPENSES_DELETE_SUCCESS
  };
};

export const deleteExpense = key => {
  return (dispatch, getState, getFirebase) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;
    const firebase = getFirebase();

    var adaRef = firebase.database().ref(`expenses/${key}`);
    adaRef.remove().catch(function(error) {
      console.log("Remove failed: " + error.message);
    });
  };
};
