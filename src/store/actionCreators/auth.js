import {
  ON_AUTH_SUCCESS,
  ON_AUTH_START,
  ON_AUTH_FAIL,
  ON_AUTH_LOGOUT
} from "../actionTypes/auth.js";
import { fetchExpensesAction } from "./fetchExpenses";

const onAuthSuccess = user => {
  return {
    type: ON_AUTH_SUCCESS,
    payload: {
      user
    }
  };
};
const onAuthStart = () => {
  return {
    type: ON_AUTH_START
  };
};

const onAuthFail = error => {
  return {
    type: ON_AUTH_FAIL,
    payload: {
      error
    }
  };
};

const onLogout = () => {
  return {
    type: ON_AUTH_LOGOUT
  };
};

export const authUserAction = ({ email, password }) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .login({ email, password })
      .then(resuts => {
        dispatch(onAuthStart());
        dispatch(onAuthSuccess(resuts.user.user));
        fetchExpensesAction();
      })
      .catch(error => {
        dispatch(onAuthFail(error));
      });
  };
};

export const getCurrentUserAction = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(onAuthSuccess(user));
      } else {
        console.log("no signed in user");
      }
    });
  };
};

export const logoutAction = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(function() {
        dispatch(onLogout());
      })
      .catch(function(error) {
        // An error happened.
      });
  };
};
