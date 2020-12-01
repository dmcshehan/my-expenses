import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { List } from "antd";

import Header from "./Header";
import ColumnInnerWraper from "../ColumnInnerWrapper/ColumnInnerWraper";
import AddGroupListForm from "./AddGroupListForm/AddGroupListForm";
import ListItem from "./ListItem/ListItem";
import ListEmpty from "../ListEmpty/ListEmpty";

import { list } from "./GroupList.module.css";

//action creators
import {
  fetchGroupLists,
  selectGroupList,
  updateGroupList,
  deleteGroupList,
} from "../../store/actionCreators/groupList";

export default function GrouptList() {
  const [updating, setUpdating] = useState({});
  const dispatch = useDispatch();

  const { isAddGroupListFormOpen, groupLists } = useSelector(
    (state) => state.groupList
  );

  useEffect(() => {
    const unsubscribe = dispatch(fetchGroupLists());
    return () => {
      unsubscribe();
    };
  }, []);

  function selectList(_id) {
    dispatch(selectGroupList(_id));
  }

  function makeUpdatable(event, _id) {
    event.stopPropagation();
    setUpdating(groupLists.find((groupList) => groupList._id === _id));
  }

  function cancelUpdate(event) {
    event.stopPropagation();
    setUpdating({});
  }

  function stopPropogation(event) {
    event.stopPropagation();
  }

  function deleteLIst(event, _id) {
    event.stopPropagation();
    dispatch(deleteGroupList(_id));
  }

  function update(values) {
    dispatch(updateGroupList(values)).then(function resetFormtoDefault() {
      setUpdating({});
    });
  }

  return (
    <ColumnInnerWraper className={list}>
      <Header />
      {isAddGroupListFormOpen ? <AddGroupListForm /> : null}
      {groupLists.length === 0 ? (
        <ListEmpty text="No Lists" />
      ) : (
        <List
          className={list}
          dataSource={groupLists}
          renderItem={(item) => (
            <ListItem
              {...item}
              {...{
                updating,
                update,
                deleteLIst,
                cancelUpdate,
                makeUpdatable,
                selectList,
                stopPropogation,
              }}
            />
          )}
        />
      )}
    </ColumnInnerWraper>
  );
}
