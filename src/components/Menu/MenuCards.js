import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './MenuCards.css';

import Section from '../UI/Section/Section';
import Card from '../UI/Card/Card';
import FourColumnGrid from '../UI/GridLayout/FourColumnGrid';
import DUMMY_MENU from '../../data/dummy-menus';

const MenuCards = () => {
  const [menus, setMenus] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    setMenus(DUMMY_MENU);
  }, [setMenus]);

  return (
    <Section title="Menu Kami">
      <FourColumnGrid>
        { menus.map(menu => (
          <Link key={ menu.id } to={ `${url}/${menu.id}` }>
            <Card isButton>
              <img className="card__image" src={`assets/images/menus/${menu.image}`} alt="menu" />
              <h3 className="card__title menu__name">{ menu.id }</h3>
            </Card>
          </Link>
        )) }
      </FourColumnGrid>
    </Section>
  );
};

export default MenuCards;