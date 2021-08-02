import React from 'react';
import { NavLink, useHistory, useLocation, Redirect } from 'react-router-dom';

import './FoodCategoryFilter.css';

import Select from '../UI/Select/Select';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { tablet as tabletScreen } from '../../lib/window-screen-widths';

const FILTER_VARIABLE = 'filter';

const getFilter = (location) => {
  if (location.search) {
    const queryString = new URLSearchParams(location.search);
    return queryString.get(FILTER_VARIABLE);
  } else {
    return null;
  }
}

const FoodCategoryFilter = ({ categories }) => {
  const { width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();

  const transformedCategories = categories.map(category => ({
    text: category.displayName,
    value: category.id,
  }));

  const mobileSelectChangeHandler = React.useCallback((selected) => {
    history.push({
      pathname: location.pathname,
      search: `?${FILTER_VARIABLE}=${selected}`,
    });
  }, [history, location.pathname]);

  if (width < tabletScreen) {
    const filter = getFilter(location);
    return (
      <Select 
        name="food-category" 
        className="food-category-filter--mobile"
        selectData={ transformedCategories }
        selectedValue={ filter ? filter : categories[0].id  }
        onValueChange={ mobileSelectChangeHandler }
      />
    );
  }

  return (
    <aside className="food-category-filter">
      { transformedCategories.map((category, index) => (
        <NavLink
          exact
          to={{
            pathname: location.pathname,
            search: `?${FILTER_VARIABLE}=${category.value}`
          }}
          isActive={(match, location) => {
            const filter = getFilter(location);
                    
            if ((!filter && index === 0) || filter === category.value) {
              return true;
            }

            return false;
          }}
          className="food-category-filter__item">
            {category.text}
        </NavLink>
      )) }
    </aside>
  );
};

export default FoodCategoryFilter;