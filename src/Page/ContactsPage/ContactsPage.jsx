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
        <Form />
      </div>
      <div className={css.contactsContainer}>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};
export default ContactsPage;
