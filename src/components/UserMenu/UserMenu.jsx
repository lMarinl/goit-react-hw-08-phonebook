import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/Auth/authOperations';
import { STATUSES } from 'utils/Statuses';
import {
  selectedUserData,
  selectedStatus,
} from '../../redux/Auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectedUserData);
  const status = useSelector(selectedStatus);

  const handleLogOut = () => dispatch(apiLogoutUser());
  const userEmail = userData?.email ?? "Could't get user email";

  return (
    <div>
      <p>{userEmail}</p>
      <button
        type="button"
        onClick={handleLogOut}
        disabled={status === STATUSES.pending}
      >
        Logout
      </button>
    </div>
  );
};
