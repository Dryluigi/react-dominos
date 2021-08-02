import React, { useState } from 'react';

import './FoodVariantAction.css';

import Select from '../UI/Select/Select';
import formatToIdr from '../../lib/idr-string';
import DUMMY_PIZZA_VARIANTS from '../../data/dummy-pizza-variants';

const FoodVariantSelect = ({ label, variantData, onChange, currentVariantId }) => {
  const current = DUMMY_PIZZA_VARIANTS.find(variant => variant.id === currentVariantId);
  const transformedData = variantData.map(variant => ({
    text: `${variant.name} ${formatToIdr(variant.price)}`,
    value: variant.id,
  }));
  
  const variantChangeHandler = React.useCallback((variantId) => {
    if (onChange) {
      onChange(variantId);
    }
  }, [onChange]);

  return (
    <div className="food-variant-select__group">
      <span className="food-variant-select__label">{ label }</span>
      <Select 
        selectedValue={ currentVariantId }
        className="food-variant-select" 
        selectData={ transformedData }
        onValueChange={ variantChangeHandler }
      />
      {current.description && <p>{current.description}</p>}
    </div>
  );
};

export default FoodVariantSelect;