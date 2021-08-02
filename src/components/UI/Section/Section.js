import React from 'react';
import { Link } from 'react-router-dom';

import './Section.css';

const Section = (props) => {
  const { expand } = props;
  let classNames = 'section';

  if (props.className) {
    classNames += ` ${props.className}`;
  }

  return (
    <section className={classNames}>
      <header className="section__header">
        <h2 className="section__title">{ props.title }</h2>
        {expand && <Link className="section__expand-link" to={ expand.link }>{ expand.text }</Link>}
      </header>
      { props.children }
    </section>
  );
};

export default Section;