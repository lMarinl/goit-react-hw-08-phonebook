import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactItem, Loader } from 'components';

import {
  selectedContacts,
  selectedError,
  selectedStatus,
} from '../../redux/Contacts/contactsSelectors.js';
import { selectedFilter } from '../../redux/filterSlice/filterSelectors.js';
import { apiGetContacts } from '../../redux/Contacts/contactsOperations.js';

import { STATUSES } from 'utils/Statuses.js';
import css from './ListContacts.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectedContacts);
  const status = useSelector(selectedStatus);
  const error = useSelector(selectedError);
  const filter = useSelector(selectedFilter);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    return (
      Array.isArray(contacts) &&
      contacts.filter(
        contact =>
          contact?.name &&
          contact.name.toLowerCase().includes(filter.trim().toLowerCase())
      )
    );
  };
  const getFilteredContacts = filteredContacts();
  return (
    <>
      {status === STATUSES.pending && <Loader />}
      {error && status === STATUSES.error && <p>{error}</p>}
      <ul className={css.contactsList}>
        {Array.isArray(getFilteredContacts) &&
          getFilteredContacts?.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
};
