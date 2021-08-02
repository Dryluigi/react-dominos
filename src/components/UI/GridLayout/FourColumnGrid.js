import React from 'react';

import './GridLayout.css';

const FourColumnGrid = (props) => {
  return (
    <div className="grid grid--four-column">
      { props.children }
    </div>
  );
};

export default FourColumnGrid;