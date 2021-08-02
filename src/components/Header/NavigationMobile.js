import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationMobile.css';

const NavigationMobile = ({ onCloseMobileMenu }) => {
  let classes = 'navigation-mobile';

  return (
    <nav className={ classes }>
      <div class="navigation-mobile-container">
        <Link onClick={ onCloseMobileMenu } to='/menus' className="navigation-mobile__menu">Menu Kami</Link>
        <Link onClick={ onCloseMobileMenu } to='/deals' className="navigation-mobile__menu">Penawaran Khusus</Link>
        <Link onClick={ onCloseMobileMenu } to='/location' className="navigation-mobile__menu">Lokasi Toko</Link>
        <Link onClick={ onCloseMobileMenu } to='/about' className="navigation-mobile__menu">Tentang Kami</Link>
        <Link onClick={ onCloseMobileMenu } to='/contact' className="navigation-mobile__menu">Hubungi Kami</Link>
        <Link onClick={ onCloseMobileMenu } to='/order' className="navigation-mobile__menu highlight">Order Online</Link>
      </div>  
    </nav>
  );
};

export default NavigationMobile;
