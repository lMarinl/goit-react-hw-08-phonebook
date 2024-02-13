import { useDispatch } from 'react-redux';
import { apiDeleteContact } from '../../redux/Contacts/contactsOperations';
import css from './ItemContact.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(apiDeleteContact(id));
  };

  return (
    <li className={css.contactItem} key={id} id={id}>
      <p className={css.contactName}>
        {name}: {phone}
      </p>
      <button
        className={css.buttonDeleteNumber}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
