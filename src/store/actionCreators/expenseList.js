import { db } from "../../auth/firebase";
import { CHANGE_EXPENSE_LISTS } from "../actionTypes/expenseList";

import { hideAddExpenseListForm } from "../actionCreators/addExpenseListForm";

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
        type: CHANGE_EXPENSE_LISTS,
        payload: {
          expenseLists,
        },
      });
    });

    return unsubscribe;
  };
}

export { addExpenseList, fetchExpenseLists };
