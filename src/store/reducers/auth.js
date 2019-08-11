import {
  ON_AUTH_SUCCESS,
  ON_AUTH_START,
  ON_AUTH_FAIL,
  ON_AUTH_LOGOUT
} from "../actionTypes/auth.js";

import combineObjectsAndReturn from "../../shared/combineObjectsAndReturn/combineObjectsAndReturn";

const intialState = {
  user: null,
  error: null,
  authenticating: false
};

const auth = (state = intialState, action) => {
  switch (action.type) {
    case ON_AUTH_START:
      return combineObjectsAndReturn(state, { authenticating: true });

    case ON_AUTH_SUCCESS:
      return combineObjectsAndReturn(state, {
        user: action.user,
        authenticating: false
      });

    case ON_AUTH_FAIL:
      return combineObjectsAndReturn(state, {
        error: action.error,
        authenticating: false
      });

    case ON_AUTH_LOGOUT:
      return combineObjectsAndReturn(state, { user: null });

    default:
      return state;
  }
};

export default auth;
