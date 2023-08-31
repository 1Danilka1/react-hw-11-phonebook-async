import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactsList.module.css'

const ContactsList = ({ filterVal }) => {
  const contacts = useSelector((state) => state.contacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterVal.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
        ))
      ) : (
        <span>No contact available</span>
      )}
    </ul>
  );
};

export default ContactsList;