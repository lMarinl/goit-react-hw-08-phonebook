import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

import { filterContacts } from '../../redux/filterSlice/filterSlice.js';
import { selectedFilter } from '../../redux/filterSlice/filterSelectors.js';

export const Filter = () => {
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = filterContacts(value);
    dispatch(action);
  };
  return (
    <form className={css.contactsFormFilter}>
      <h3 className={css.contactsTitle}>Your contact list</h3>
      <label className={css.labelFilter}>
        Search contacts by name
        <input
          className={css.inputFilter}
          type="text"
          value={filter}
          onChange={handleChangeFilter}
          placeholder="Enter a name"
        />
      </label>
    </form>
  );
};
