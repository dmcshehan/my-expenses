import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { createBlacklistFilter } from "redux-persist-transform-filter";

import userReducer from "./user";
import dropdownReducer from "./dropdown";
import notificationReducer from "./notification";
import expenseListReducer from "./expenseList";
import expenseListDetailsReducer from "./expenseListDetails";
import groupListReducer from './groupList'

const blackListAddExpenseListForm = createBlacklistFilter("expenseList", [
  "isAddExpenseListFormOpen",
]);

const blackListAddGroupListForm = createBlacklistFilter("groupList", [
  "isAddGroupListFormOpen",
]);


const blackListAddExpenseListDetailsForm = createBlacklistFilter(
  "expenseListDetails",
  ["isAddExpenseFormOpen"]
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dropDown", "notification"],
  transforms: [blackListAddExpenseListForm, blackListAddExpenseListDetailsForm, blackListAddGroupListForm],
};

const rootReducer = combineReducers({
  user: userReducer,
  dropDown: dropdownReducer,
  notification: notificationReducer,
  expenseList: expenseListReducer,
  expenseListDetails: expenseListDetailsReducer,
  groupList: groupListReducer
});

export default persistReducer(persistConfig, rootReducer);
