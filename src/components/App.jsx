import { ContactsList, Form, Filter } from 'components';
import css from './App.module.css';
import { Loader } from './Loader/Loader';
import { STATUSES } from '../utils/Statuses';
import { useSelector } from 'react-redux';
import { selectedStatus } from '../redux/contactsSlice/contactsSelectors';

export const App = () => {

  const status = useSelector(selectedStatus)
  return (
    <div>
      {status === STATUSES.pending && <Loader/>}
   
    <div className={css.phoneBookContainer}>
        
      <h1 className={css.phoneBookTitle}>Phone book</h1>
      <Form />
      <div className={css.contactsContainer}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter/>
        <ContactsList
        />
      </div>
      </div>
      </div>
  );
};
