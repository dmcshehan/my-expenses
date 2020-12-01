import produce from "immer";
import {
    CHANGE_GROUP_LISTS_SUCCESS,
    SELECT_GROUP_LIST_SUCCESS,
    SHOW_ADD_GROUP_LIST_FORM,
    HIDE_ADD_GROUP_LIST_FORM,
    UPDATE_GROUP_LIST_SUCCESS,
    CLEAR_SELECTED_GROUP_LIST,
} from "../actionTypes/groupList.js";

const initialState = {
    groupLists: [],
    selected: null,
    isAddGroupListFormOpen: false,
};

export default (state = initialState, action) =>
    produce(state, (draftState) => {
        const { type, payload } = action;
        switch (type) {

            case CHANGE_GROUP_LISTS_SUCCESS:
                draftState.groupLists = payload.groupLists;
                break;

            case UPDATE_GROUP_LIST_SUCCESS:
                if (payload.updated._id === state.selected._id) {
                    draftState.selected = payload.updated;
                }
                break;

            case SELECT_GROUP_LIST_SUCCESS:
                //draftState.selected = payload.listId;
                draftState.selected = state.groupLists.find(
                    (GROUPList) => GROUPList._id === payload.listId
                );
                break;

            case SHOW_ADD_GROUP_LIST_FORM:
                draftState.isAddGroupListFormOpen = true;
                break;
            case HIDE_ADD_GROUP_LIST_FORM:
                draftState.isAddGroupListFormOpen = false;
                break;

            case CLEAR_SELECTED_GROUP_LIST:
                draftState.selected = null;
                break;
            default:
                break;
        }
    });
