import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../../js/store/ContactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      window.alert('Please write something');
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" />
        <input type="text" name="number" value={number} onChange={handleInputChange} placeholder="Number" />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
