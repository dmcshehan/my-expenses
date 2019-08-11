import produce from "immer";

import {
  ON_AUTH_SUCCESS,
  ON_AUTH_START,
  ON_AUTH_FAIL,
  ON_AUTH_LOGOUT
} from "../actionTypes/auth.js";

const intialState = {
  user: null,
  error: null,
  authenticating: false
};

const auth = (state = intialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_AUTH_START:
        draft.authenticating = true;
        break;

      case ON_AUTH_SUCCESS:
        draft.authenticating = false;
        draft.error = null;
        draft.user = action.payload.user;
        break;

      case ON_AUTH_FAIL:
        draft.error = action.payload.error;
        draft.authenticating = false;
        break;

      case ON_AUTH_LOGOUT:
        draft.user = null;
        break;

      default:
        return draft;
    }
  });

export default auth;
