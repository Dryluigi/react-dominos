import React from 'react';

import './Select.css';

const SelectOption = ({ children, value, selected}) => {
  return (
    <option value={value} selected={ selected }>{children}</option>
  );
};

export default SelectOption;