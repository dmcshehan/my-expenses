import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./user";

import dropdownReducer from "./dropdown";
import notificationReducer from "./notification";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dropDown"],
};

const rootReducer = combineReducers({
  user: userReducer,
  dropDown: dropdownReducer,
  notification: notificationReducer,
});

export default persistReducer(persistConfig, rootReducer);
