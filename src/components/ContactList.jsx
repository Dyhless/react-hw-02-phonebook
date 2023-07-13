import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
