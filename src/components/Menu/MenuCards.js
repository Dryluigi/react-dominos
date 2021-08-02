import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './Menu.css';

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
        
        {/* <Link to={ url + '/pasta' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/pasta.png" alt="menu" />
            <h3 className="card__title menu__name">Pasta</h3>
          </Card>
        </Link>
        <Link to={ url + '/dessert' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/dessert.png" alt="menu" />
            <h3 className="card__title menu__name">Dessert</h3>
          </Card>
        </Link>
        <Link to={ url + '/bread' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/bread.png" alt="menu" />
            <h3 className="card__title menu__name">Bread</h3>
          </Card>
        </Link>
        <Link to={ url + '/rice' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/rice.png" alt="menu" />
            <h3 className="card__title menu__name">Rice</h3>
          </Card>
        </Link>
        <Link to={ url + '/sides' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/sides.png" alt="menu" />
            <h3 className="card__title menu__name">Sides</h3>
          </Card>
        </Link>
        <Link to={ url + '/chicken' }>
          <Card isButton>
            <img className="card__image" src="assets/images/menus/chicken.png" alt="menu" />
            <h3 className="card__title menu__name">Chicken</h3>
          </Card>
        </Link> */}
      </FourColumnGrid>
    </Section>
  );
};

export default MenuCards;