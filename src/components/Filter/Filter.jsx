import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ContactSearch = ({ onFilterChange }) => {
  const contacts = useSelector((state) => state.contacts.item);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    onFilterChange(searchTerm); 
  }, [searchTerm, onFilterChange]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default ContactSearch;