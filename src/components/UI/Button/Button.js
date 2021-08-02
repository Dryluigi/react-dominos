import React from 'react';

import './Button.css';

const Button = (props) => {
  const { className, color, invertColor, onClick } = props;

  let classes = 'btn';  

  if (invertColor) {
    classes += ' btn--invert';
  }

  if (color) {
    if (color === 'blue') {
      classes += ' btn--blue';
    }
  }

  if (className) {
    classes += ` ${className}`;
  }

  const clickHandler = (event) => {
    // event.stopPropagation();

    if (onClick) {
      onClick(event);
    }
  };


  return (
    <button onClick={ clickHandler } className={ classes } disabled={ props.disabled }>{ props.text }</button>
  );
};

export default Button;