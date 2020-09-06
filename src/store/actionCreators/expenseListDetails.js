import { db } from "../../auth/firebase";
import { SELECT_EXPENSE_LIST } from "../actionTypes/expenseListDetails";

const expensesCollection = db.collection("expenses");

function fetchExpenses(listId) {
  return (dispatch, getState) => {
    const { uid } = getState().user.user;

    const query = expensesCollection.where("listId", "==", listId);

    query.onSnapshot(function (querySnapshot) {
      const expenses = [];
      querySnapshot.forEach(function (doc) {
        expenseLists.push({ ...doc.data(), _id: doc.id });
      });

      dispatch({
        type: SELECT_EXPENSE_LIST,
        payload: {
          expenseLists,
        },
      });
    });
  };
}

export { fetchExpenses };
