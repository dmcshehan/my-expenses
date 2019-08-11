import * as actionTypes from "../actionTypes/index";

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

export const fetchExpensesAction = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    const state = getState();
    const currentUserId = state.auth.user.uid;

    var ref = firebase.database().ref("expenses");
    ref
      .orderByChild("userId")
      .equalTo(currentUserId)
      .on("value", function(snapshot) {
        console.log("Expenses", snapshot.val());
      });
  };
};
