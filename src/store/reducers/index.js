import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { createBlacklistFilter } from "redux-persist-transform-filter";

import userReducer from "./user";
import dropdownReducer from "./dropdown";
import notificationReducer from "./notification";
import expenseListReducer from "./expenseList";
import expenseListDetailsReducer from "./expenseListDetails";

const blackListAddExpenseListForm = createBlacklistFilter("expenseList", [
  "isAddExpenseListFormOpen",
]);
const blackListAddExpenseListDetailsForm = createBlacklistFilter(
  "expenseListDetails",
  ["isAddExpenseFormOpen"]
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dropDown", "notification"],
  transforms: [blackListAddExpenseListForm, blackListAddExpenseListDetailsForm],
};

const rootReducer = combineReducers({
  user: userReducer,
  dropDown: dropdownReducer,
  notification: notificationReducer,
  expenseList: expenseListReducer,
  expenseListDetails: expenseListDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);
