import React from 'react';

const TwelveColumnGrid = ({ children, className }) => {
  let classes = 'grid--twelve-columns';

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <div className={ classes }>
      { children }
    </div>
  );
};

export default TwelveColumnGrid;