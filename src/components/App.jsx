import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Loader, RestrictedRoute, PrivateRoute } from 'components';
import { apiRefreshUser } from '../redux/Auth/authOperations';
import { selectedToken } from '../redux/Auth/authSelectors';

const HomePage = lazy(() => import('Page/HomePage/HomePage'));
const LoginPage = lazy(() => import('Page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('Page/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('Page/ContactsPage/ContactsPage'));

export const App = () => {
  const token = useSelector(selectedToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(apiRefreshUser());
  }, [dispatch, token]);
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
