import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsLoggedIn } from '../../redux/Auth/authSelectors';

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};
