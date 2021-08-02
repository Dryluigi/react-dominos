import React from 'react';

import './Checkbox.css';

const Checkbox = ({ 
  name, 
  id, 
  className, 
  onValueChange, 
  defaultChecked = false,
  disabled }) => {
  let classes = 'checkbox';

  if (className) {
    classes += ` ${className}`;
  }

  const valueChangeHandler = (event) => {
    if (onValueChange) {
      onValueChange(event.target.checked);
    }
  };

  return (
    <input 
      type="checkbox"
      name={ name }
      id={ id }
      className={ classes }
      checked={ defaultChecked }
      onChange={ valueChangeHandler }
      disabled={ disabled }
    />
  );
};

export default Checkbox;