import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsLoggedIn } from '../../redux/Auth/authSelectors';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
