import { ContactsList, Filter, Form, Loader } from 'components';
import { useSelector } from 'react-redux';
import { selectedStatus } from '../../redux/Contacts/contactsSelectors';
import { STATUSES } from 'utils/Statuses';
import css from './App.module.css';
const ContactsPage = () => {
  const status = useSelector(selectedStatus);
  return (
    <>
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
    </>
  );
};
export default ContactsPage;
