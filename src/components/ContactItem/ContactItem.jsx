import React from 'react';

const ContactItem = ({ name, number, onDelete }) => (
  <li>
    <p>Name: {name}</p>
    <p>Number: {number}</p>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </li>
);

export default ContactItem;
