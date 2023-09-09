import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
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
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            contactName={name}
            contactNumber={phone}
            contactId={id}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;


