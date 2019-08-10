import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//importing global CSS that effect the full project
import "./index.css";

//Redux related imports
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/database";

//import all reducers from /reducers folder
import addReducer from "./store/reducers/addExpense";
import authReducer from "./store/reducers/auth";
import updateReducer from "./store/reducers/updateExpense";
import deleteReducer from "./store/reducers/deleteExpense";
import fetchReducer from "./store/reducers/fetchExpenses";
import calculateReducer from "./store/reducers/calculateExpenses";

//Redux browser extensition configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var firebaseConfig = {
  apiKey: "AIzaSyC5zeqTa6JZK12UXxfv7YknmQS2fez_EuY",
  authDomain: "my-expenses-cf95d.firebaseapp.com",
  databaseURL: "https://my-expenses-cf95d.firebaseio.com",
  projectId: "my-expenses-cf95d",
  storageBucket: "my-expenses-cf95d.appspot.com",
  messagingSenderId: "584599269295",
  appId: "1:584599269295:web:1d52b59770089094"
};

firebase.initializeApp(firebaseConfig);

//combining all reducers to be one reducer
const rootReducer = combineReducers({
  add: addReducer,
  update: updateReducer,
  delete: deleteReducer,
  fetch: fetchReducer,
  calculate: calculateReducer,
  auth: authReducer
});
const initialState = {};

//creation of redux store
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase, {
      userProfile: "users",
      enableLogging: false
    })
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
