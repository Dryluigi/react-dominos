import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import './Menu.css';

import Section from '../UI/Section/Section';
import Card from '../UI/Card/Card';
import FourColumnGrid from '../UI/GridLayout/FourColumnGrid';

const MenuHighlight = () => {
  const { url } = useRouteMatch();
  const menuUrlTemplate = url + 'menus/';

  return (
    <Section title="Menu Kami" expand={{ link: '/menus', text: 'Lihat lainnya...'}}>
      <FourColumnGrid>
        <Link to={ menuUrlTemplate + 'pizza' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/pizza.png" alt="menu" />
            <h3 className="card__title menu__name">Pizza</h3>
          </Card>
        </Link>
        <Link to={ menuUrlTemplate + 'pasta' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/pasta.png" alt="menu" />
            <h3 className="card__title menu__name">Pasta</h3>
          </Card>
        </Link>
        <Link to={ menuUrlTemplate + 'dessert' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/dessert.png" alt="menu" />
            <h3 className="card__title menu__name">Dessert</h3>
          </Card>
        </Link>
        <Link to={ menuUrlTemplate + 'bread' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/bread.png" alt="menu" />
            <h3 className="card__title menu__name">Bread</h3>
          </Card>
        </Link>
      </FourColumnGrid>
    </Section>
  );
};

export default MenuHighlight;