import React from 'react';
import { LiCSS, UlCSS } from 'components/Styles.styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <UlCSS>
      {filteredContacts.map(contact => (
        <LiCSS key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number} </span>
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </LiCSS>
      ))}
    </UlCSS>
  );
};

export default ContactList;
