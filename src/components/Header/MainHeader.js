import React from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom';

import './MainHeader.css';

import Search from '../Search/Search';
import Cart from './Cart/Cart';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { tablet as tabletScreen } from '../../lib/window-screen-widths';

const MainHeader = (props) => {
  const { width: windowWidth } = useWindowDimensions();

  if (windowWidth > tabletScreen) {
    props.onCloseMobileMenu();
  }

  const toggleMobileMenuHandler = () => {
    props.onToggleMobileMenu();
  };

  return (
    <div className="main-header">
      <div className="main-header__container">
        <Link to="/"><img className="header__logo" src="/assets/images/dominos-logo.png" alt="Logo" /></Link>
        {/* <Search /> */}
        <div className="header__right">
          { windowWidth > tabletScreen &&
            <nav className="header__auth">
              <NavLink to="/login" className="header__login">Masuk</NavLink>
              <NavLink to="/register" className="header__register">Daftar</NavLink>
            </nav>
          }
          <Switch>
            <Route path="/cart"></Route>
            <Route path="*">
              <Cart />
            </Route>
          </Switch>
          <svg onClick={ toggleMobileMenuHandler } xmlns="http://www.w3.org/2000/svg" className="header__button-icon header__hamburger-menu" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;