import produce from "immer";

import {
  ON_EXPENSE_ADD_START,
  ON_EXPENSE_ADD_SUCCESS,
  ON_EXPENSE_ADD_FAIL,
  ON_EXPENSES_DELETE_START,
  ON_EXPENSES_DELETE_SUCCESS,
  ON_EXPENSES_DELETE_FAIL,
  ON_EXPENSES_FETCH_START,
  ON_EXPENSES_FETCH_SUCCESS,
  ON_EXPENSES_FETCH_FAIL,
  ON_EXPENSES_UPDATE_START,
  ON_EXPENSES_UPDATE_SUCCESS,
  ON_EXPENSES_UPDATE_FAIL,
  ON_EXPENSES_UPDATE_INIT
} from "../actionTypes/expense";

const intialState = {
  expenses: null,
  fetching: false,
  error: null
};

const expense = (state = intialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_EXPENSE_ADD_START:
        break;

      case ON_EXPENSE_ADD_SUCCESS:
        break;

      case ON_EXPENSE_ADD_FAIL:
        break;

      case ON_EXPENSES_DELETE_START:
        break;

      case ON_EXPENSES_DELETE_SUCCESS:
        break;

      case ON_EXPENSES_DELETE_FAIL:
        break;

      case ON_EXPENSES_FETCH_START:
        break;

      case ON_EXPENSES_FETCH_SUCCESS:
        draft.expenses = action.payload.allExpenses;
        break;

      case ON_EXPENSES_FETCH_FAIL:
        break;

      case ON_EXPENSES_UPDATE_START:
        break;

      case ON_EXPENSES_UPDATE_SUCCESS:
        break;

      case ON_EXPENSES_UPDATE_FAIL:
        break;

      case ON_EXPENSES_UPDATE_INIT:
        break;

      default:
        return draft;
    }
  });

export default expense;
