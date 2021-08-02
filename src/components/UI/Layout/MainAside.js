import React from 'react';

import './MainAside.css';

const Aside = ({ className, children }) => {
  let classes = 'main-aside__aside';

  if(className) {
    classes += ` ${className}`;
  }

  return (
    <aside className={ classes }>
      { children }
    </aside>
  )
};

const Main = ({ className, children }) => {
  let classes = 'main-aside__main';

  if(className) {
    classes += ` ${className}`;
  }

  return (
    <div className={ classes }>
      { children }
    </div>
  )
};

const MainAside = (props) => {
  let classes = 'main-aside';

  if(props.className) {
    classes += ` ${props.className}`;
  }

  return (
    <div className={ classes }>
      { props.children }
    </div>
  );
};

export {
  MainAside,
  Main,
  Aside,
};