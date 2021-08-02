import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderNavigation.css';

const HeaderNavigation = () => {
  return (
    <div className="header-navigation">
      <nav className="header-navigation-container">
        <Link to='/menus' className="header-navigation__menu">Menu Kami</Link>
        <Link to='/deals' className="header-navigation__menu">Penawaran Khusus</Link>
        <Link to='/location' className="header-navigation__menu">Lokasi Toko</Link>
        <Link to='/about' className="header-navigation__menu">Tentang Kami</Link>
        <Link to='/contact' className="header-navigation__menu">Hubungi Kami</Link>
        <Link to='/order' className="header-navigation__menu highlight">Order Online</Link>
      </nav>
    </div>
  );
};

export default HeaderNavigation;