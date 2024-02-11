import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { apiAddContact } from '../../redux/operations';
import { selectedContacts } from '../../redux/contactsSlice/contactsSelectors';
import css from './Form.module.css';
export const Form = ( ) => {

  const dispatch = useDispatch();
  const contacts  = useSelector(selectedContacts);

  const handlerAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      Notiflix.Notify.warning(
        'It seems like you already have a contact with that name in your contacts list.'
      );
      return;
    }
    dispatch(apiAddContact(formData));
  };

  const handelSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const phone  = event.currentTarget.number.value;

    const formData = {
      name,
      phone ,
    };
    handlerAddContact(formData);
    event.currentTarget.reset();

  };

  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <label className={css.label}>
        <span className={css.spanLabel}>Name</span>
        <input className={css.formInput} type="text" name="name" required />
      </label>
      <label className={css.label}>
        <span className={css.spanLabel}>Number</span>
        <input className={css.formInput} type="tel" name="number" required />
      </label>
      <button className={css.buttonSubmit} type="submit">
        Add number{' '}
      </button>
    </form>
  );
};
