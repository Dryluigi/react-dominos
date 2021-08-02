import React, { useState, useContext, useEffect } from 'react';

import './FoodVariantAction.css';

import FoodVariantSelect from './FoodVariantSelect';
import DUMMY_PIZZA_VARIANTS from '../../data/dummy-pizza-variants';
import { FoodDetailContext } from '../../contexts/food-detail/food-detail-context';

const FoodVariantAction = ({ style, foodVariantData }) => {
  const { dispatch } = useContext(FoodDetailContext);
  let sizeVariants = DUMMY_PIZZA_VARIANTS.filter(variant => variant.variantName === 'Ukuran');

  sizeVariants = sizeVariants.filter(size => !(foodVariantData.except.sizeIds.includes(size.id)))

  let crustVariants = DUMMY_PIZZA_VARIANTS.filter(variant => variant.variantName === 'Crust');
  const [variantIds, setVariantIds] = useState({
    sizeId: foodVariantData.default.sizeId,
    crustId: foodVariantData.default.crustId,
  });

  crustVariants = crustVariants.filter(crust => crust.dependsOn.includes(variantIds.sizeId));
  crustVariants = crustVariants.filter(crust => !(foodVariantData.except.crustIds.includes(crust.id)))
  useEffect(() => {
    dispatch({ type: 'UPDATE_VARIANT', variant: variantIds});
  }, [dispatch, variantIds])

  const sizeChangeHandler = React.useCallback((newSizeId) => {
    setVariantIds(prevIds => ({
      sizeId: newSizeId,
      crustId: crustVariants[0].id,
    }));
  }, [setVariantIds, crustVariants[0].id]);

  const crustChangeHandler = React.useCallback((newCrustId) => {
    setVariantIds(prevIds => ({
      ...prevIds,
      crustId: newCrustId,
    }));
  }, [setVariantIds]) 

  return (
    <div className="variant-card" style={ style }>
      <h3 className="variant-card__title">Pilih Varian</h3>
      <FoodVariantSelect 
        onChange={ sizeChangeHandler }
        label={ 'Ukuran' } 
        variantData={ sizeVariants }
        currentVariantId={ variantIds.sizeId }
      />
      <FoodVariantSelect
        onChange={ crustChangeHandler } 
        label={ 'Crust' } 
        variantData={ crustVariants }
        currentVariantId={ variantIds.crustId }
      />
    </div>
  );
};

export default FoodVariantAction;