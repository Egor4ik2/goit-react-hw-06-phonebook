import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../contactSlice/ContactsSlice';

import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter" className={styles.label}>
        Filter contacts:
      </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default Filter;
