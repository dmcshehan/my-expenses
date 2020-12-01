import React from "react";
import { useDispatch } from "react-redux";

import AddButton from "../AddButton/AddButton";

import { showAddGroupListForm } from "../../store/actionCreators/groupList";

export default function AddGroupListButton() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(showAddGroupListForm());

    }

    return <AddButton onClick={handleClick} />;
}
