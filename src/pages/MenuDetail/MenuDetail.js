import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import './MenuDetail.css';

import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import FoodCategoryFilter from '../../components/FoodCategoryFilter/FoodCategoryFilter';
import FourColumnGrid from '../../components/UI/GridLayout/FourColumnGrid';
import Section from '../../components/UI/Section/Section';
import FoodCard from '../../components/FoodCard/FoodCard';
import NoPageFound from '../NoPage/NoPageFound';

import DUMMY_FOODS from '../../data/dummy-foods';
import DUMMY_MENUS from '../../data/dummy-menus';

const MenuDetail = () => {
  const location = useLocation();
  const { category } = useParams();
  const currentCategory = DUMMY_MENUS.find(menu => menu.id === category);
  let sectionTitle = null;

  if (!currentCategory) {
    return <NoPageFound />
  }

  let filteredFoods = DUMMY_FOODS.filter(food => food.menu === category);

  if (currentCategory.categories) {
    const filter = new URLSearchParams(location.search).get('filter');

    if (filter) {
      filteredFoods = filteredFoods.filter(food => food.category === filter);
      sectionTitle = currentCategory.categories.find(menuCategory => menuCategory.id === filter).displayName;
    } else {
      filteredFoods = filteredFoods.filter(food => food.category === currentCategory.categories[0].id);
      sectionTitle = currentCategory.categories[0].displayName;
    }
  }

  const DUMMY_NAVIGATIONS = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/menus',
      text: 'Menu'
    },
    {
      link: '/menus/' + category,
      text: category,
    }
  ];

  return (
    <div className="content-wrapper--large">
      <Breadcrumb navigations={ DUMMY_NAVIGATIONS } />
      <div className="menu-detail-layout">
        { currentCategory.categories &&  
          <div className="menu-detail-layout__side">
            <FoodCategoryFilter categories={ currentCategory.categories } />
          </div>
        }
        <div className="menu-detail-layout__main">
          <Section title={ sectionTitle }>
            <FourColumnGrid>
              { filteredFoods.map(food => (
                <FoodCard key={ food.id } food={ food }/>
              )) }
            </FourColumnGrid>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;