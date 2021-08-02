import React from 'react'

import MenuCards from '../../components/Menu/MenuCards';
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';

const DUMMY_NAVIGATIONS = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/menus',
    text: 'Menu'
  }
];

const Menus = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb navigations={ DUMMY_NAVIGATIONS } />
      <MenuCards />
    </div>
  );
};

export default Menus;