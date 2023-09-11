import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
// import { getFilteredContacts } from '../../redux/selectors'
import { getContacts } from '../../redux/selectors'

const ContactsList = ({ filterVal }) => {
  // const contacts = useSelector(getContacts);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filterVal.toLowerCase())
  // );
  const filteredContacts = useSelector(getContacts);

  return (
    // <ul>
    //   {filteredContacts.map((contact) => (
    //     <li key={contact.id}>{contact.name} : {contact.number}</li>
    //   ))}
    // </ul>
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            contactName={name}
            contactNumber={number}
            contactId={id}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;


