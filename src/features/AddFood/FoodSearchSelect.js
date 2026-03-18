import React, { useState } from 'react';
import Select from 'react-select';
import { debounce, get } from 'lodash';
import { getDishByName } from '../../services/foodApi';

const FoodSearchSelect = ({ selectValue, options, changeSelectValue, changeOptions }) => {
  const [isLoading, setIsLoading] = useState(false);

  const formattedOptions = options.map(item => ({
    value: item._id,
    label: `${item.itemName}, calories: ${item.calories}`,
  }));

  const fetchFoodOptions = async query => {
    if (query === '') {
      changeOptions([]);
      return;
    }

    const responseData = await getDishByName(query);
    const rawProducts = get(responseData, 'products', []);
    const parsedOptions = rawProducts
      .map(product => {
        const nutriments = product.nutriments || {};
        return {
          _id: get(product, 'id', ''),
          itemName: get(product, 'product_name', ''),
          brandName: get(product, 'brands', ''),
          calories: nutriments['energy-kcal_serving'] || nutriments['energy-kcal'] || 0,
          photo: get(product, 'image_thumb_url', ''),
          fat: nutriments['fat'] || 0,
          protein: nutriments['proteins'] || 0,
          carbs: nutriments['carbohydrates'] || 0,
        };
      })
      .filter(item => item.itemName && item.calories > 0);

    setIsLoading(false);
    changeOptions(parsedOptions);
  };

  const onInputChangeDebounced = debounce((value, action) => {
    if (action.action === 'input-change') {
      setIsLoading(true);
      fetchFoodOptions(value);
    }
  }, 500);

  const onSelectionChange = (value, { action }) => {
    if (action === 'clear') {
      changeSelectValue(null);
      changeOptions([]);
    }
    if (value) changeSelectValue(value);
  };

  return (
    <Select
      isClearable
      placeholder="Search for ingredient"
      value={selectValue}
      onChange={onSelectionChange}
      options={formattedOptions}
      onInputChange={onInputChangeDebounced}
      name="ingredient"
      id="ingredient"
      isLoading={isLoading}
    />
  );
};

export default FoodSearchSelect;
