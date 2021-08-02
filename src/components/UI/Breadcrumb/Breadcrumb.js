import React from 'react';
import { NavLink } from 'react-router-dom';

import './Breadcrumb.css';

const Breadcrumb = (props) => {
  const { navigations } = props;

  let i = 0;

  return (
    <nav className="breadcrumb">
      { navigations.map(navigation => (
        <NavLink exact activeClassName="active" key={ i++ } to={ navigation.link } className="breadcrumb__item">{ navigation.text }</NavLink>
      )) }
    </nav>
  );
};

export default Breadcrumb;