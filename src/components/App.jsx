import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/Store';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.container}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};
