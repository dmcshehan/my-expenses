import { db } from "../../auth/firebase";
import moment from "moment";

import {
  FETCH_EXPENSES_SUCCESS_FOR_SELECTED_GROUP,
  CLEAR_EXPENSES,
} from "../actionTypes/groupListDetails";

const expensesCollection = db.collection("expenses");

function fetchExpensesForTheGroup(listIds) {
  return (dispatch) => {
    expensesCollection
      .where("listId", "in", listIds)
      .get()
      .then(function (querySnapshot) {
        const expenses = [];
        querySnapshot.forEach(function (doc) {
          const data = { ...doc.data() };
          expenses.push({
            _id: doc.id,
            ...data,
            date: moment(data.date.seconds * 1000),
          });
        });

        dispatch({
          type: FETCH_EXPENSES_SUCCESS_FOR_SELECTED_GROUP,
          payload: {
            expenses,
          },
        });
      });
  };
}

function clearExpense(_id) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_EXPENSES,
    });
  };
}

export { fetchExpensesForTheGroup, clearExpense };
