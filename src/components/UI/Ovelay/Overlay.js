import React from 'react';
import reactDom from 'react-dom';
import { useSelector } from 'react-redux';

import './Overlay.css';

const Overlay = () => {
  const isOpen = useSelector(state => state.overlay.isOpen);

  const targetLocation = document.getElementById('overlay');

  if (!isOpen) {
    return null;
  }

  return reactDom.createPortal((
    <div className="overlay"></div>
    ),
    targetLocation
  );
};

export default Overlay;