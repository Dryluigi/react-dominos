import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import './Food.css';

import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import FoodDetail from '../../components/FoodDetail/FoodDetail';
import FoodVariantAction from '../../components/FoodVariantAction/FoodVariantAction';
import Section from '../../components/UI/Section/Section';
import FoodCard from '../../components/FoodCard/FoodCard';
import FourColumnGrid from '../../components/UI/GridLayout/FourColumnGrid';
import FoodDetailButtons from '../../components/FoodDetail/FoodDetailButtons';
import { MainAside, Main, Aside } from '../../components/UI/Layout/MainAside';
import useDeviceScreen from '../../hooks/use-device-screen';
import { recentFoodsActions } from '../../store/recent-foods/recent-foods-slice';
import { FoodDetailProvider } from '../../contexts/food-detail/food-detail-context';

import DUMMY_FOODS from '../../data/dummy-foods';
import DUMMY_MENUS from '../../data/dummy-menus';

const Food = (props) => {
  const dispatch = useDispatch();
  const [food, setFood] = useState(null);
  const [foodIsFound, setFoodIsFound] = useState(false);
  const { isTabletScreen } = useDeviceScreen();
  const { category, foodId } = useParams();
  const currentCategory = DUMMY_MENUS.find(menu => menu.id === category);
  const recentFoods = useSelector(state => state.recentFoods.foods);

  useEffect(() => {
    const filteredFood = DUMMY_FOODS.filter(food => 
      (food.id === foodId && food.menu === category)
    );

    if (filteredFood.length > 0) {
      setFood(filteredFood[0]);
      setFoodIsFound(true);
    }
  }, [setFood, category, foodId]);

  useEffect(() => {
    dispatch(recentFoodsActions.addFood(food));
  }, [dispatch, food]);

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
      link: `/menus/${category}`,
      text: category,
    },
    // {
    //   link: `/menus/${food.menu}/${food.id}`,
    //   text: food.name,
    // },
  ];

  let content = foodIsFound
    ? (
      <>
      <Breadcrumb navigations={ DUMMY_NAVIGATIONS }/>
      <MainAside className="food">
        <Main>
          <FoodDetail food={ food } style={{ flex: '3' }}/>
        </Main>
        <Aside>
          { food.variant && <FoodVariantAction foodVariantData={ food.variant } style={{ flex: '1' }}/> }
          { isTabletScreen && <FoodDetailButtons /> }
        </Aside>
      </MainAside>
      </>
    )
    : (
      <h2>Tidak ditemukan!</h2>
    );

  return (
    <FoodDetailProvider>
      <div className="content-wrapper--large">
        { content }
        { recentFoods.length > 0 &&
          <Section title="Produk yang Terakhir Dibuka">
            <FourColumnGrid>
              { recentFoods.map(pizza => (
                <FoodCard key={ pizza.id } food={ pizza }/>
              )) }
            </FourColumnGrid>
          </Section>
        }
      </div>
    </FoodDetailProvider>
  );
};

export default Food;