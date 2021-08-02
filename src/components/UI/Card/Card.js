import React from 'react';

import './Card.css';

const Card = (props) => {
  let classNames = 'card';

  if (props.className) {
    classNames += ` ${props.className}`;
  }

  if (props.isButton) {
    classNames += ` card--interactive`;
  }

  return (
    <div className={ classNames }>
      { props.children }
    </div>
  );
};

export default Card;