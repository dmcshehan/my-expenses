import { db } from "../../auth/firebase";
import {
  CHANGE_GROUP_LISTS_SUCCESS,
  SELECT_GROUP_LIST_SUCCESS,
  SHOW_ADD_GROUP_LIST_FORM,
  HIDE_ADD_GROUP_LIST_FORM,
  UPDATE_GROUP_LIST_SUCCESS,
  CLEAR_SELECTED_GROUP_LIST,
} from "../actionTypes/groupList";

// import { fetchGroups, clearGroup } from "./groupListDetails";

import { fetchExpensesForTheGroup } from "./groupListDetails";

const groupListCollection = db.collection("groupLists");
const groupsCollection = db.collection("groups");

function showAddGroupListForm() {
  return (dispatch) => {
    dispatch({
      type: SHOW_ADD_GROUP_LIST_FORM,
    });
  };
}

function hideAddGroupListForm() {
  return (dispatch) => {
    dispatch({
      type: HIDE_ADD_GROUP_LIST_FORM,
    });
  };
}

function clearSelectedGroupList() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SELECTED_GROUP_LIST,
    });
  };
}

function addGroupList(groupList) {
  return (dispatch) => {
    groupListCollection
      .add(groupList)
      .then(function () {
        console.log("Group List added!");
        //dispatch(hideAddGroupListForm());
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };
}

function updateGroupList(updated) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      groupListCollection
        .doc(updated._id)
        .set(
          {
            title: updated.title,
            lists: updated.lists,
          },
          { merge: true }
        )
        .then(function () {
          resolve("Group List updated!");
          dispatch({
            type: UPDATE_GROUP_LIST_SUCCESS,
            payload: {
              updated: {
                ...updated,
              },
            },
          });
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
  };
}

function deleteGroupList(listId) {
  return (dispatch, getState) => {
    return new Promise(function (resolve) {
      groupListCollection
        .doc(listId)
        .delete()
        .then(function () {
          const { selected } = getState().groupList;

          if (selected._id === listId) {
            // dispatch(clearGroup());
          }

          //  dispatch(clearSelectedGroupList());
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
  };
}

function fetchGroupLists() {
  return (dispatch, getState) => {
    const { uid } = getState().user.user;

    const query = groupListCollection.where("uid", "==", uid);

    let unsubscribe = query.onSnapshot(function (querySnapshot) {
      const groupLists = [];
      querySnapshot.forEach(function (doc) {
        groupLists.push({ ...doc.data(), _id: doc.id });
      });

      dispatch({
        type: CHANGE_GROUP_LISTS_SUCCESS,
        payload: {
          groupLists,
        },
      });
    });

    return unsubscribe;
  };
}

function selectGroupList(groupId) {
  return (dispatch, getState) => {
    const { groupLists } = getState().groupList;
    const selectedGroup = groupLists.find((group) => group._id === groupId);

    dispatch({
      type: SELECT_GROUP_LIST_SUCCESS,
      payload: {
        groupId,
      },
    });

    dispatch(fetchExpensesForTheGroup(selectedGroup.lists));
  };
}

// Not used

function addDailyGroupsList(uid) {
  return (dispatch) => {
    groupListCollection
      .add({
        title: "Daily Groups",
        uid,
      })
      .then(function () {
        console.log("Group List added!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };
}

function selectDailyGroupsList() {
  return (dispatch, getState) => {
    const { groupLists } = getState().groupList;

    const { _id } = groupLists.find(
      (groupList) => groupList.title === "Daily Groups"
    );

    dispatch(selectGroupList(_id));
  };
}

export {
  addGroupList,
  fetchGroupLists,
  selectGroupList,
  addDailyGroupsList,
  selectDailyGroupsList,
  showAddGroupListForm,
  hideAddGroupListForm,
  updateGroupList,
  deleteGroupList,
};
