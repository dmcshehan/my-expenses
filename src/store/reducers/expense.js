import produce from "immer";

import {
  ON_ADD_EXPENSE_SUCCESS,
  ON_ADD_EXPENSE_FAIL,
  ON_DELETE_EXPENSES_SUCCESS,
  ON_DELETE_EXPENSES_FAIL,
  ON_FETCH_EXPENSES_SUCCESS,
  ON_FETCH_EXPENSES_FAIL,
  ON_UPDATE_EXPENSES_SUCCESS,
  ON_UPDATE_EXPENSES_FAIL,
  CALCULATE_TOTAL_SPENT_SUCCESS
} from "../actionTypes/expense";

const intialState = {
  expenses: null,
  fetching: false,
  error: null,
  loading: false,
  totalSpent: null
};

const expense = (state = intialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_ADD_EXPENSE_SUCCESS:
        draft.loading = false;
        break;

      case ON_ADD_EXPENSE_FAIL:
        draft.error = action.payload.error;
        break;

      case ON_DELETE_EXPENSES_SUCCESS:
        draft.loading = false;
        break;

      case ON_DELETE_EXPENSES_FAIL:
        draft.error = action.payload.error;
        break;

      case ON_FETCH_EXPENSES_SUCCESS:
        draft.expenses = action.payload.allExpenses;
        break;

      case ON_FETCH_EXPENSES_FAIL:
        draft.error = action.payload.error;
        break;

      case ON_UPDATE_EXPENSES_SUCCESS:
        draft.loading = false;
        break;

      case ON_UPDATE_EXPENSES_FAIL:
        draft.error = action.payload.error;
        break;

      case CALCULATE_TOTAL_SPENT_SUCCESS:
        draft.totalSpent = action.payload.totalSpent;
        break;

      default:
        return draft;
    }
  });

export default expense;
