import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { ContactsList, Form, Filter, Layout, Loader } from 'components';
import { selectedStatus } from '../redux/Contacts/contactsSelectors';

import { STATUSES } from '../utils/Statuses';
import css from './App.module.css';

const HomePage = lazy(() => import('Page/HomePage/HomePage'));
const LoginPage = lazy(() => import('Page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('Page/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('Page/ContactsPage/ContactsPage'));

export const App = () => {
  const status = useSelector(selectedStatus);
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>

        {status === STATUSES.pending && <Loader />}
        <div className={css.phoneBookContainer}>
          <h1 className={css.phoneBookTitle}>Phone book</h1>
          <Form />
          <div className={css.contactsContainer}>
            <h2 className={css.contactsTitle}>Contacts</h2>
            <Filter />
            <ContactsList />
          </div>
        </div>
      </Layout>
    </>
  );
};
