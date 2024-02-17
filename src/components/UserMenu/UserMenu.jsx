import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/Auth/authOperations';
import { STATUSES } from 'utils/Statuses';
import {
  selectedUserData,
  selectedStatus,
} from '../../redux/Auth/authSelectors';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectedUserData);
  const status = useSelector(selectedStatus);

  const handleLogOut = () => dispatch(apiLogoutUser());
  const userEmail = userData?.email ?? "Could't get user email";

  return (
    <div className={css.userMenu}>
      <p className={css.userMenuEmail}>{userEmail}</p>
      <button
        className={css.userMenuButton}
        type="button"
        onClick={handleLogOut}
        disabled={status === STATUSES.pending}
      >
        Logout
      </button>
    </div>
  );
};
