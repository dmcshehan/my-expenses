import {
  ON_DELETE_EXPENSES_SUCCESS,
  ON_DELETE_EXPENSES_FAIL
} from "../actionTypes/expense";

const onDeleteExpenseSuccess = () => {
  return {
    type: ON_DELETE_EXPENSES_SUCCESS
  };
};
const onDeleteExpenseFail = error => {
  return {
    type: ON_DELETE_EXPENSES_FAIL,
    payload: {
      error
    }
  };
};

export const deleteExpenseAction = key => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var adaRef = firebase.database().ref(`expenses/${key}`);
    adaRef
      .remove()
      .then(() => {
        dispatch(onDeleteExpenseSuccess());
      })
      .catch(function(error) {
        dispatch(onDeleteExpenseFail(error));
      });
  };
};
