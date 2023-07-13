import React from 'react';

const Filter = ({ filter, onChangeFilter }) => (
  <label>
    Filter contacts by name:
    <input type="text" value={filter} onChange={onChangeFilter} />
  </label>
);

export default Filter;
