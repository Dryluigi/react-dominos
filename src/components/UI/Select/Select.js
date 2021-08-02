import React, { useEffect } from 'react';

import './Select.css';

import SelectOption from './SelectOption';

const Select = ({ 
  selectData, 
  className, 
  name, 
  selectedValue, 
  onValueChange
 }) => {
  const classes = 'select';
  let selectedIndex = 0;

  if(selectedValue) {
    const index = selectData.findIndex(data => data.value === selectedValue);
    if (index !== -1) {
      selectedIndex = index;
    }
  }

  let i = 0;

  const valueChangeHandler = (event) => {
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  useEffect(() => {
    if (onValueChange) {
      onValueChange(selectedValue);
    }
  }, [onValueChange, selectedValue])
  
  return (
    <select 
      name={ name ? name : 'select'} 
      className={ className ? `${classes} ${className}` : classes }
      onChange={ valueChangeHandler }
    >
      {selectData.map((item, index) => (
        <SelectOption key={ i++ } value={ item.value } selected={ index === selectedIndex }>
          { item.text }
        </SelectOption>
      ))}
    </select>
  );
};

export default Select;