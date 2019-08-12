import {
  ON_EXPENSES_FETCH_SUCCESS,
  ON_EXPENSES_FETCH_FAIL,
  ON_EXPENSES_FETCH_START
} from "../actionTypes/expense";

const fetchExpensesSuccess = allExpenses => {
  return {
    type: ON_EXPENSES_FETCH_SUCCESS,
    payload: {
      allExpenses
    }
  };
};

const fetchExpensesFail = () => {
  return {
    type: ON_EXPENSES_FETCH_FAIL
  };
};

const fetchExpensesStart = () => {
  return {
    type: ON_EXPENSES_FETCH_START
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
        const expensesObj = snapshot.val();
        let expenseArray;
        if (snapshot.val() !== null) {
          expenseArray = Object.keys(expensesObj).map(expenseId => {
            return { ...expensesObj[expenseId], id: expenseId };
          });
        } else {
          expenseArray = null;
        }

        dispatch(fetchExpensesSuccess(expenseArray));
      });
  };
};
