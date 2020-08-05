import React from "react";

import classNames from "./Dropdown.module.css";
import { useSelector, useDispatch } from "react-redux";

//actioncreators
import { logoutUser } from "../../store/actionCreators/user";

export default function Dropdown() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isDropdownOpen } = useSelector((state) => state.dropDown);

  function logout() {
    dispatch(logoutUser());
  }

  return user ? (
    <div
      className={`box ${classNames.dropDown} ${
        isDropdownOpen ? classNames.showDropdown : classNames.hideDropdown
      }`}
    >
      <figure className={`image ${classNames.avaratFigure}`}>
        <img className='is-rounded' src={user.photoURL} alt='User Avatar' />
      </figure>
      <p className={`${classNames.displayName} has-text-centered`}>
        {user.displayName}
      </p>
      <p className={`${classNames.email} has-text-centered`}>{user.email}</p>
      <hr className='navbar-divider'></hr>
      <button className={`button ${classNames.signOutBtn}`} onClick={logout}>
        Sign out
      </button>
    </div>
  ) : null;
}
