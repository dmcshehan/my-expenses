import { ON_FETCH_EXPENSES_SUCCESS } from "../actionTypes/expense";

const fetchExpensesSuccess = allExpenses => {
  return {
    type: ON_FETCH_EXPENSES_SUCCESS,
    payload: {
      allExpenses
    }
  };
};

//fetch expenses fail is not implemented
export const fetchExpensesAction = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    const state = getState();
    const currentUser = state.auth.user;

    if (currentUser) {
      const currentUserId = state.auth.user.uid;

      var ref = firebase.database().ref("expenses");
      ref
        .orderByChild("userId")
        .equalTo(currentUserId)
        .on("value", function(snapshot) {
          //everytime there is a change, this will fire

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
    }
  };
};
